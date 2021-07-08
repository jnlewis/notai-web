import React from 'react';
import smartContractService from '../core/services/smartContractService';
import { Payment } from '../core/interfaces/payment';
import PaymentService from '../core/services/paymentService';
import smartContractServiceTest from '../core/services/smartContractServiceTest';

export default function ContractTest(): React.ReactElement {
  const test = () => {
    // const newAddress = PaymentService.generatePaymentAddress();
    // console.log(`newAddress: ${newAddress}`);

    // 1: NcsC72yALmca34qHFNdfN3CLsjq4JeSfk3
    // 2: 
    // 3: 

    // const payment: Payment = {
    //   paymentAddress: newAddress, // generated
    //   creatorAddress: 'NXyT1U1RGin5E3U6YcE2bCKRGyR2AhzAJA', // wallet A
    //   recipientAddress: 'Ne7D2UBntvX5oT74i4E1TQherUMVMgucDR', // wallet B
    //   title: 'Something for tomorrow',
    //   asset: 'GAS',
    //   amount: 300,
    //   expiry: new Date('2021-08-01').getTime(),
    //   status: 'open',
    //   conditionApi: 'https://raw.githubusercontent.com/jnlewis/notai-web/main/public/example/api-response-true.json',
    //   conditionField: '$.payment.canBeClaimed',
    //   conditionFieldType: 'text',
    //   conditionOperator: '=',
    //   conditionValue: 'yes',
    // };

    // const creatorPrivateKey = '585ed0b29cd52608227a35b0269df26001006eaace252199d72687f7ba9a69e2'
    
    // smartContractService.testMethod1(payment, creatorPrivateKey);
    //smartContractService.destroy();

    //smartContractService.releasePayment(payment.paymentAddress);

    // smartContractService.getPayment(payment.paymentAddress).then(result => {
    //   console.log('results:');
    //   console.log(result);
    // });

    // smartContractService.getPaymentsByCreator(payment.creatorAddress).then(result => {
    //   console.log('results:');
    //   console.log(result);
    // });

    // smartContractService.getBalance(smartContractService.Assets.GAS, 'NTYVRPprQanDRYY6nFsEnrKMurypDXa45t').then(balance => {
    //   console.log(`balance: ${balance}`);
    // })

    smartContractServiceTest.destroy();
  };

  return (
    <div>
      <a onClick={test}>Test</a>
    </div>
  );
}
