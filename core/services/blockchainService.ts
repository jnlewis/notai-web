import { CONST, rpc, sc, wallet, tx, u } from '@cityofzion/neon-core';
import { BigInteger } from '@cityofzion/neon-core/lib/u';

const vars: any = {};

const inputs = {
  fromAccount: new wallet.Account('L1QqQJnpBwbsPGAuutuzPTac8piqvbR1HRjrY5qHup48TBCBFe4g'),
  toAccount: new wallet.Account('L2QTooFoDFyRFTxmtiVHt5CfsXfVnexdbENGDkkrrgTTryiLsPMG'),
  tokenScriptHash: CONST.NATIVE_CONTRACT_HASH.NeoToken,
  amountToTransfer: 1,
  systemFee: 0,
  networkFee: 0,
  networkMagic: 1234567890, //CONST.MAGIC_NUMBER.TestNet,
  nodeUrl: 'http://localhost:20332', //"http://seed2t.neo.org:20332",
};

const rpcClient = new rpc.RPCClient(inputs.nodeUrl);

// async function simple() {

//     /*
//     const scriptHash = '5b7074e873973a6ed3708862f219a6fbf4d1c411' // TestNet RPX
//     const getName = { scriptHash, operation: 'name', args: [] }
//     const getDecimals = { scriptHash, operation: 'decimals', args: [] }
//     const getSymbol = { scriptHash, operation: 'symbol', args: [] }
//     const getTotalSupply = { scriptHash, operation: 'totalSupply', args: [] }

//     const script = Neon.create.script(getName, getDecimals, getSymbol, getTotalSupply)
//     */
//     const props = {
//         scriptHash: '5b7074e873973a6ed3708862f219a6fbf4d1c411', // Scripthash for the contract
//         operation: 'balanceOf', // name of operation to perform.
//         args: [u.reverseHex('cef0c0fdcfe7838eff6ff104f9cdec2922297537')] // any optional arguments to pass in. If null, use empty array.
//     }

//     const script = create.script(props);

//     rpc.Query.invokeScript(script)
//     .execute('http://seed3.neo.org:20332')
//     .then(res => {
//         console.log(res) // You should get a result with state: "HALT"
//     })
// }

async function createTransaction() {
  console.log("\n\n --- Today's Task ---");
  console.log(
    `Sending ${inputs.amountToTransfer} token \n` +
      `from ${inputs.fromAccount.address} \n` +
      `to ${inputs.toAccount.address}`,
  );

  // Since the token is now an NEP-5 token, we transfer using a VM script.
  const script = sc.createScript({
    scriptHash: inputs.tokenScriptHash,
    operation: 'transfer',
    args: [
      sc.ContractParam.hash160(inputs.fromAccount.address),
      sc.ContractParam.hash160(inputs.toAccount.address),
      sc.ContractParam.integer(BigInteger.fromNumber(inputs.amountToTransfer)),
      sc.ContractParam.any(),
    ],
  });

  // We retrieve the current block height as we need to
  const currentHeight = await rpcClient.getBlockCount();
  vars.tx = new tx.Transaction({
    signers: [
      {
        account: inputs.fromAccount.scriptHash,
        scopes: tx.WitnessScope.CalledByEntry,
      },
    ],
    validUntilBlock: currentHeight + 1000,
    script: script,
  });
  console.log('\u001b[32m  ✓ Transaction created \u001b[0m');
}

// async function checkNetworkFee() {
//     const feePerByteInvokeResponse = await rpcClient.invokeFunction(
//         CONST.NATIVE_CONTRACT_HASH.PolicyContract,
//         "getFeePerByte"
//     );

//     if (feePerByteInvokeResponse.state !== "HALT") {
//         if (inputs.networkFee === 0) {
//             throw new Error("Unable to retrieve data to calculate network fee.");
//         } else {
//             console.log("\u001b[31m  ✗ Unable to get information to calculate network fee.  Using user provided value.\u001b[0m");
//             vars.tx.networkFee = u.BigInteger.fromNumber(inputs.networkFee);
//         }
//     }

//     const feePerByte = u.BigInteger.fromNumber(feePerByteInvokeResponse.stack[0].value)

//     // Account for witness size
//     const transactionByteSize = vars.tx.serialize().length / 2 + 109;

//     // Hardcoded. Running a witness is always the same cost for the basic account.
//     const witnessProcessingFee = u.BigInteger.fromNumber(1000390);
//     const networkFeeEstimate = feePerByte
//         .mul(transactionByteSize)
//         .add(witnessProcessingFee);

//     if (inputs.networkFee && inputs.networkFee >= networkFeeEstimate.toNumber()) {
//         vars.tx.networkFee = u.BigInteger.fromNumber(inputs.networkFee);
//         console.log(
//         `  i Node indicates ${networkFeeEstimate.toDecimal(8)} networkFee but using user provided value of ${
//             inputs.networkFee
//         }`
//         );
//     } else {
//         vars.tx.networkFee = networkFeeEstimate;
//     }
//     console.log(
//         `\u001b[32m  ✓ Network Fee set: ${vars.tx.networkFee.toDecimal(8)} \u001b[0m`
//     );
// }
