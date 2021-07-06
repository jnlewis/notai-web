import { Payment } from '../interfaces/payment';
import { PaymentDbData } from '../services/databaseService';

class PaymentAdapter {
  convertToPaymentDbData(payment: Payment, createdTime: number) {
    if (!payment) {
      return null;
    }

    const result: PaymentDbData = {
      created_time: createdTime,
      payment_address: payment.paymentAddress,
      creator_address: payment.creatorAddress,
      recipient_address: payment.recipientAddress,
      title: payment.title,
      asset: payment.asset,
      amount: payment.amount,
      expiry: payment.expiry,
      status: payment.status,
      condition_api: payment.conditionApi,
      condition_field: payment.conditionField,
      condition_field_type: payment.conditionFieldType,
      condition_value: payment.conditionValue,
      condition_operator: payment.conditionOperator,
    };

    return result;
  }

  convertToPayment(data: PaymentDbData) {
    if (!data) {
      return null;
    }

    const result: Payment = {
      paymentAddress: data.payment_address,
      creatorAddress: data.creator_address,
      recipientAddress: data.recipient_address,
      title: data.title,
      asset: data.asset,
      amount: data.amount,
      expiry: data.expiry,
      status: data.status,
      conditionApi: data.condition_api,
      conditionField: data.condition_field,
      conditionFieldType: data.condition_field_type,
      conditionValue: data.condition_value,
      conditionOperator: data.condition_operator,
    };

    return result;
  }

  convertToPaymentList(data: PaymentDbData[]): Payment[] {
    if (!data) {
      return null;
    }

    const result: Payment[] = [];
    data.forEach((item) => {
      result.push(this.convertToPayment(item));
    });

    return result;
  }
}

export default new PaymentAdapter();
