import { tx, wallet, settings } from '@cityofzion/neon-core';
import { Payment } from '../interfaces/payment';
import jsonpath from 'jsonpath';
import logger from '../utils/logger';
import smartContractService from './smartContractService';
import walletService from './walletService';
import { AppConfig } from '../config/appConfig';
import {
  isEarlierThan,
  isEarlierThanOrEqual,
  isEqual,
  isLaterThan,
  isLaterThanOrEqual,
} from '../utils/dateTimeUtil';

class PaymentService {
  getReceiveLink(paymentAddress: string) {
    return `${AppConfig.env.receivePaymentPath}?a=${paymentAddress}`;
  }

  generatePaymentAddress(): string {
    const acct = new wallet.Account();
    return acct.address;
  }

  async getPayment(paymentAddress: string): Promise<Payment> {
    const result = await smartContractService.getPayment(paymentAddress);
    return result;
  }

  async getActivePaymentByCreator(creatorAddress: string): Promise<Payment[]> {
    const payments = await smartContractService.getPaymentsByCreator(creatorAddress);
    const result = payments.filter((item) => item.status === 'open');
    return result;
  }

  async getInactivePaymentByCreator(creatorAddress: string): Promise<Payment[]> {
    const payments = await smartContractService.getPaymentsByCreator(creatorAddress);
    const result = payments.filter((item) => item.status !== 'open');
    return result;
  }

  async createPayment(payment: Payment): Promise<boolean> {
    await smartContractService.createPayment(payment, walletService.getLoggedInKey());
    return true;
  }

  async cancelPayment(paymentAddress: string): Promise<boolean> {
    const payment = await this.getPayment(paymentAddress);
    if (payment.status !== 'open') {
      logger.logWarning('paymentService.releasePayment', 'Payment status is not open.');
      return false;
    }

    await smartContractService.releasePayment(payment.paymentAddress);
  }

  async releasePayment(paymentAddress: string): Promise<boolean> {
    const payment = await this.getPayment(paymentAddress);
    if (payment.status !== 'open') {
      logger.logWarning('paymentService.releasePayment', 'Payment status is not open.');
      return false;
    }

    const isConditionMet = await this.checkReleaseCondition(payment);
    if (!isConditionMet) {
      logger.logWarning('paymentService.releasePayment', 'Payment condition not fulfilled.');
      return false;
    }

    await smartContractService.releasePayment(payment.paymentAddress);

    return true;
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

    if (
      payment.conditionFieldType == 'number' &&
      Number(queryValue) !== NaN &&
      Number(payment.conditionValue) !== NaN
    ) {
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

    if (payment.conditionFieldType == 'datetime') {
      const responseDate = new Date(queryValue);
      const conditionDate = new Date(payment.conditionValue);

      if (payment.conditionOperator === '=') {
        result = isEqual(responseDate, conditionDate);
      }
      if (payment.conditionOperator === '>') {
        result = isLaterThan(responseDate, conditionDate);
      }
      if (payment.conditionOperator === '>=') {
        result = isLaterThanOrEqual(responseDate, conditionDate);
      }
      if (payment.conditionOperator === '<') {
        result = isEarlierThan(responseDate, conditionDate);
      }
      if (payment.conditionOperator === '<=') {
        result = isEarlierThanOrEqual(responseDate, conditionDate);
      }
    }

    return result;
  }
}

export default new PaymentService();
