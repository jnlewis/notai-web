import { CONST, rpc, sc, wallet, tx, u } from '@cityofzion/neon-core';
import { Payment } from '../interfaces/payment';
import logger from '../logger/logger';
import { SmartContract } from './../neonjsExperimental';

class SmartContractService {

  /*
  RPC Endpoint List:
  http://seed1t.neo.org:20332
  http://seed2t.neo.org:20332
  http://seed3t.neo.org:20332
  http://seed4t.neo.org:20332
  http://seed5t.neo.org:20332
  */

  // TESTNET
  //private rpcEndpoint: string = 'http://seed1t.neo.org:20332';

  // LOCAL
  private rpcEndpoint: string = 'http://127.0.0.1:50012';
  private networkMagic: number = 2392412620;
  private contractScriptHash: string = '0xf5da71ea19b90e7e606aca5f5c67fc8e088bacaf';
  private contractKey = '5d5fb3b38fc2c2846ea1cec80f14ad02d38a78318caca22b7b81c09c35928802';

  public Assets = {
    NEO: 'NEO',
    GAS: 'GAS,'
  }
  
  private convertStringToHex = (value: string) => u.str2hexstring(value);
  private convertHexToString = (value: string) => u.hexstring2str(value);
  private reverseHex = (value: string) => u.reverseHex(value);
  private byteStringToString = (value: string) => u.HexString.fromBase64(value).toAscii();
  private toDecimalNumber = (value: number) => value / 100000000;
  private toWholeNumber = (value: number) => value * 100000000;

  async createPayment(payment: Payment, creatorPrivateKey: string): Promise<boolean> {
    logger.logInfo('smartContractService.createPayment', 'begin');

    const config = {
      networkMagic: this.networkMagic,
      rpcAddress: this.rpcEndpoint,
      account: new wallet.Account(creatorPrivateKey),
    }
    const contract = new SmartContract(u.HexString.fromHex(this.contractScriptHash), config);

    // convert amount to whole number (smart contract does not support decimal)
    payment.amount = this.toWholeNumber(payment.amount);
    
    const response = await contract.invoke("createPayment", [
        sc.ContractParam.hash160(payment.paymentAddress),
        sc.ContractParam.hash160(payment.creatorAddress),
        sc.ContractParam.hash160(payment.recipientAddress),
        sc.ContractParam.string(payment.paymentAddress),
        sc.ContractParam.string(payment.creatorAddress),
        sc.ContractParam.string(payment.recipientAddress),
        sc.ContractParam.string(payment.title),
        sc.ContractParam.string(payment.asset),
        sc.ContractParam.integer(payment.amount),
        sc.ContractParam.integer(payment.expiry),
        sc.ContractParam.string(payment.status),
        sc.ContractParam.string(payment.conditionApi),
        sc.ContractParam.string(payment.conditionField),
        sc.ContractParam.string(payment.conditionFieldType),
        sc.ContractParam.string(payment.conditionOperator),
        sc.ContractParam.string(payment.conditionValue),
    ]);

    return true;
  }

  async cancelPayment(paymentAddress: string, creatorPrivateKey: string): Promise<boolean> {
    logger.logInfo('smartContractService.cancelPayment', 'begin');

    const config = {
      networkMagic: this.networkMagic,
      rpcAddress: this.rpcEndpoint,
      account: new wallet.Account(creatorPrivateKey),
    }
    const contract = new SmartContract(u.HexString.fromHex(this.contractScriptHash), config);

    const response = await contract.invoke("releasePayment", [
        sc.ContractParam.hash160(paymentAddress),
    ]);

    return true;
  }

  async releasePayment(paymentAddress: string): Promise<boolean> {
    logger.logInfo('smartContractService.releasePayment', 'begin');

    const config = {
      networkMagic: this.networkMagic,
      rpcAddress: this.rpcEndpoint,
      account: new wallet.Account(this.contractKey),
    }
    const contract = new SmartContract(u.HexString.fromHex(this.contractScriptHash), config);

    const response = await contract.invoke("releasePayment", [
        sc.ContractParam.hash160(paymentAddress),
    ]);

    return true;
  }

  private mapResponseToPayment(item: any): Payment {
    return {
      paymentAddress: this.byteStringToString(item.value[3].value.toString()),
      creatorAddress: this.byteStringToString(item.value[4].value.toString()),
      recipientAddress: this.byteStringToString(item.value[5].value.toString()),
      title: this.byteStringToString(item.value[6].value.toString()),
      asset: this.byteStringToString(item.value[7].value.toString()),
      amount: this.toDecimalNumber(Number(item.value[8].value.toString())),
      expiry: Number(item.value[9].value.toString()),
      status: this.byteStringToString(item.value[10].value.toString()),
      conditionApi: this.byteStringToString(item.value[11].value.toString()),
      conditionField: this.byteStringToString(item.value[12].value.toString()),
      conditionFieldType: this.byteStringToString(item.value[13].value.toString()),
      conditionOperator: this.byteStringToString(item.value[14].value.toString()),
      conditionValue: this.byteStringToString(item.value[15].value.toString()),
    };
  }

  async getPayment(paymentAddress: string): Promise<Payment> {
    const rpcClient = new rpc.RPCClient(this.rpcEndpoint);
    const response = await rpcClient.invokeFunction(
      this.contractScriptHash,
      'getPayment',
      [sc.ContractParam.hash160(paymentAddress)]
    );

    const result: Payment = this.mapResponseToPayment(response.stack[0]);

    return result;
  }

  async getPaymentsByCreator(creatorAddress: string): Promise<Payment[]> {
    const rpcClient = new rpc.RPCClient(this.rpcEndpoint);
    const response = await rpcClient.invokeFunction(
      this.contractScriptHash,
      'getPaymentsByCreator',
      [sc.ContractParam.hash160(creatorAddress)]
    );

    const result: Payment[] = [];
    
    // @ts-ignore
    response.stack[0].value.forEach(element => {
      result.push(this.mapResponseToPayment(element));
    });

    return result;
  }

  async getBalance(asset: string, address: string): Promise<number> {
    logger.logInfo('smartContractService.getGasBalance', 'Begin');

    const assetHash = this.getAssetHash(asset);
    const rpcClient = new rpc.RPCClient(this.rpcEndpoint);
    const response = await rpcClient.invokeFunction(
      assetHash,
      'balanceOf',
      [sc.ContractParam.hash160(address)]
    );
  
    if (response.state !== "HALT") {
      logger.logError('smartContractService.getGasBalance', response.exception);
      throw new Error(response.exception);
    }
    
    let balance = this.toDecimalNumber(Number(response.stack[0].value));
    return balance;
  }

  private getAssetHash(asset: string): string {
    if (asset == this.Assets.NEO) {
      return CONST.NATIVE_CONTRACT_HASH.NeoToken;
    }
    if (asset == this.Assets.GAS) {
      return CONST.NATIVE_CONTRACT_HASH.GasToken;
    }

    throw new Error(`${asset} is not a supported asset.`);
  }
}

export default new SmartContractService();
