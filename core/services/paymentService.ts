import { tx, wallet, settings } from '@cityofzion/neon-core';
import paymentAdapter from '../adapters/paymentAdapter';
import { Payment } from '../interfaces/payment';
import { getCurrentDomain } from '../utils/environmentUtil';
import databaseService, { PaymentDbData } from './databaseService';
import jsonpath from 'jsonpath';
import logger from '../logger/logger';

class PaymentService {
  getReceiveLink(paymentAddress: string) {
    return `${getCurrentDomain()}/receive?a=${paymentAddress}`;
  }

  generatePaymentAddress(): string {
    const acct = new wallet.Account();
    return acct.address;
  }

  async createPayment(payment: Payment): Promise<boolean> {
    // TODO: Call blockchainService

    const dbPayment: PaymentDbData = paymentAdapter.convertToPaymentDbData(payment, Date.now());
    await databaseService.addPayment(dbPayment);
    return true;
  }

  async getPayment(paymentAddress: string): Promise<Payment> {
    const data = await databaseService.getPayment(paymentAddress);
    const result = paymentAdapter.convertToPayment(data);
    return result;
  }

  async getActivePaymentByCreator(creatorAddress: string): Promise<Payment[]> {
    const data = await databaseService.getPaymentsByCreatorWithStatus(creatorAddress, 'open');
    const result = paymentAdapter.convertToPaymentList(data);
    return result;
  }

  async getInactivePaymentByCreator(creatorAddress: string): Promise<Payment[]> {
    const data = await databaseService.getPaymentsByCreatorWithoutStatus(creatorAddress, 'open');
    const result = paymentAdapter.convertToPaymentList(data);
    return result;
  }

  async cancelPayment(paymentAddress: string): Promise<void> {
    const data = await databaseService.getPayment(paymentAddress);
    await this.updatePaymentStatus(data._id, 'cancelled');
  }

  async releasePayment(paymentAddress: string): Promise<boolean> {

    const payment = await this.getPayment(paymentAddress);
    if (payment.status !== 'open') {
      logger.logWarning('paymentService.releasePayment', 'Payment status is not open.');
      return false;
    }

    const isConditionMet = await this.checkReleaseCondition(payment);
    if (isConditionMet) {
      await this.updatePaymentStatus(payment.paymentAddress, 'released');
    }

    return isConditionMet;
  }

  private async updatePaymentStatus(id: string, newStatus: string) {
    // TODO: Call blockchainService

    databaseService.updatePaymentStatus(id, newStatus);
  }

  private async checkReleaseCondition(payment: Payment): Promise<boolean> {
    let result: boolean = false;

    const response = await fetch(payment.conditionApi);
    const data = await response.json();

    const queryMatch = jsonpath.query(data, payment.conditionField);
    const queryValue = queryMatch && queryMatch.length > 0 && queryMatch[0];

    if (payment.conditionFieldType == 'text') {
      if (payment.conditionOperator === '=') {
        result = queryValue === payment.conditionValue;
      }
    }

    if (payment.conditionFieldType == 'number' &&
        Number(queryValue) !== NaN &&
        Number(payment.conditionValue) !== NaN) {

      if (payment.conditionOperator === '=') {
        result = Number(queryValue) === Number(payment.conditionValue);
      }
      if (payment.conditionOperator === '>') {
        result = Number(queryValue) > Number(payment.conditionValue);
      }
      if (payment.conditionOperator === '>=') {
        result = Number(queryValue) >= Number(payment.conditionValue);
      }
      if (payment.conditionOperator === '<') {
        result = Number(queryValue) < Number(payment.conditionValue);
      }
      if (payment.conditionOperator === '<=') {
        result = Number(queryValue) <= Number(payment.conditionValue);
      }
    }

    return result;
  }
}

export default new PaymentService();
