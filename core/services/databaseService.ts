import { AppConfig } from '../../core/config/appConfig';

export interface PaymentDbData {
  _id?: string;
  created_time?: number;
  payment_address?: string;
  creator_address?: string;
  recipient_address?: string;
  title?: string;
  asset?: string;
  amount?: number;
  expiry?: number;
  status?: string;
  condition_api?: string;
  condition_field?: string;
  condition_field_type?: string;
  condition_operator?: string;
  condition_value?: string;
}

class DatabaseService {
  private apiUrl: string = AppConfig.restDbApiUrl;
  private apiKey: string = AppConfig.restDbApiKey;

  async addPayment(data: PaymentDbData) {
    await this.post(`${this.apiUrl}/rest/escrow`, data);
  }

  async updatePaymentStatus(recordId: string, newStatus: string) {
    await this.patch(`${this.apiUrl}/rest/escrow/${recordId}`, { status: newStatus });
  }

  async getPayment(paymentAddress: string): Promise<PaymentDbData> {
    let data = await this.get(`${this.apiUrl}/rest/escrow?q={"payment_address": "${paymentAddress}"}`);

    if (data && data.length > 0) {
      return data[0];
    } else {
      return null;
    }
  }

  async getPaymentsByCreatorWithStatus(
    creatorAddress: string,
    status: string,
  ): Promise<PaymentDbData[]> {
    const data = await this.get(
      `${this.apiUrl}/rest/escrow?q={"creator_address": "${creatorAddress}", "status": "${status}"}`,
    );
    return data;
  }

  async getPaymentsByCreatorWithoutStatus(
    creatorAddress: string,
    status: string,
  ): Promise<PaymentDbData[]> {
    const data = await this.get(
      `${this.apiUrl}/rest/escrow?q={"creator_address": "${creatorAddress}", "status": {"$not" : "${status}"}}`,
    );
    return data;
  }

  private async get(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': this.apiKey,
      },
      redirect: 'follow',
    });
    const data = await response.json();
    return data;
  }

  private async post(url: string, data: unknown = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': this.apiKey,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data),
    });

    return response.json();
  }

  private async patch(url: string, data: unknown = {}) {
    const response = await fetch(url, {
      method: 'PATCH',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': this.apiKey,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data),
    });

    return response.json();
  }
}

export default new DatabaseService();
