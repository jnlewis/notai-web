import React from 'react';
import smartContractService from '../core/services/smartContractService';
import { Payment } from '../core/interfaces/payment';
import PaymentService from '../core/services/paymentService';

export default function ContractTest(): React.ReactElement {
  const test = () => {
    // const newAddress = PaymentService.generatePaymentAddress();
    // console.log(`newAddress: ${newAddress}`);

    // 1: NTrdksanRWgN6UEW4uxpBpiWmdi4EYfDpe
    // 2: NSw83F56KiToWZUqjVc2tAuJYYgDqqydFX
    // 3: NXyW4CTfarxPAossyb7gFdqLMY7YJC214f

    const payment: Payment = {
      paymentAddress: 'NXyW4CTfarxPAossyb7gFdqLMY7YJC214f',
      creatorAddress: 'NSYzWPuz9HkAtbLYFJCaXhwggeMPoSV3HU',
      recipientAddress: 'NL1A1pwFeeEW4TwubukTKLRSwzSJYN3WJR',
      title: 'Something for tomorrow',
      asset: 'GAS',
      amount: 100.5,
      expiry: new Date('2021-08-01').getTime(),
      status: 'open',
      conditionApi: 'https://raw.githubusercontent.com/jnlewis/notai-web/main/public/example/api-response-true.json',
      conditionField: '$.payment.canBeClaimed',
      conditionFieldType: 'text',
      conditionOperator: '=',
      conditionValue: 'yes',
    };

    const creatorPrivateKey = 'c73842643e849e2d7e39e02a6c8421610d4e07109e4f5216c1d6f28e6e6b1aa5'
    
    //smartContractService.createPayment(payment, creatorPrivateKey);

    //smartContractService.releasePayment(payment.paymentAddress);

    smartContractService.getPayment(payment.paymentAddress).then(result => {
      console.log('results:');
      console.log(result);
    });

    // smartContractService.getPaymentsByCreator(payment.creatorAddress).then(result => {
    //   console.log('results:');
    //   console.log(result);
    // });

    // smartContractService.getBalance(smartContractService.Assets.GAS, 'NSYzWPuz9HkAtbLYFJCaXhwggeMPoSV3HU').then(balance => {
    //   console.log(`balance: ${balance}`);
    // })
  };

  return (
    <div>
      <a onClick={test}>Test</a>
    </div>
  );
}
