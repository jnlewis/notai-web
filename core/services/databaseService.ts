import { EscrowData } from '../interfaces/escrowData';

class DatabaseService {
  private apiUrl: string = 'https://notai-b9fb.restdb.io';
  private apiKey: string = '60d49fbc8f4ebf19b1cbe9d1';

  async addEscrow(data: EscrowData) {
    this.post(`${this.apiUrl}/rest/escrow`, data).then((response) => {
      console.log(response);
    });
  }

  async updateEscrowStatus(recordId: string, newStatus: string) {
    this.patch(`${this.apiUrl}/rest/escrow/${recordId}`, { status: newStatus}).then((response) => {
      console.log(response);
    });
  }

  async getEscrow(escrowAddress: string): Promise<EscrowData> {
    return new Promise((resolve, reject) => {
      this.get(`${this.apiUrl}/rest/escrow?q={"escrow_address": "${escrowAddress}"}`)
        .then((data) => {
          console.log(data);
          if (data && data.length > 0) {
            resolve(data[0]);
          } else {
            resolve(null);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  async getEscrowsByCreatorWithStatus(creatorAddress: string, status: string): Promise<EscrowData[]> {
    return new Promise((resolve, reject) => {
      this.get(`${this.apiUrl}/rest/escrow?q={"creator_address": "${creatorAddress}", "status": "${status}"}`)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  async getEscrowsByCreatorWithoutStatus(creatorAddress: string, status: string): Promise<EscrowData[]> {
    return new Promise((resolve, reject) => {
      this.get(`${this.apiUrl}/rest/escrow?q={"creator_address": "${creatorAddress}", "status": {"$not" : "${status}"}}`)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  private async get(url: string): Promise<any> {
    console.log(`get: ${url}`);

    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'x-apikey': this.apiKey,
        },
        redirect: 'follow',
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  private async post(url: string, data: unknown = {}) {
    console.log(`post: ${url}`);
    console.log(data);

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
    console.log(`patch: ${url}`);
    console.log(data);

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
