import { tx, wallet, settings } from '@cityofzion/neon-core';
import escrowAdapter from '../adapters/escrowAdapter';
import { Escrow } from '../interfaces/escrow';
import { EscrowData } from '../interfaces/escrowData';
import { WalletInfo } from '../interfaces/walletInfo';
import { getCurrentDomain } from '../utils/environmentUtil';
import databaseService from './databaseService';
import jsonpath from 'jsonpath';

class PaymentService {
  getReceiveLink(escrowAddress: string) {
    return `${getCurrentDomain()}/receive?a=${escrowAddress}`;
  }

  generateEscrowAddress(): string {
    const acct = new wallet.Account();
    return acct.address;
  }

  async createEscrow(escrow: Escrow): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      // TODO: Call blockchainService

      const dbEscrow: EscrowData = escrowAdapter.convertToEscrowData(escrow, Date.now());
      databaseService
        .addEscrow(dbEscrow)
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getEscrow(escrowAddress: string): Promise<Escrow> {
    
    return new Promise<Escrow>((resolve, reject) => {
      let result: Escrow = null;

      databaseService
        .getEscrow(escrowAddress)
        .then((data) => {
          result = escrowAdapter.convertToEscrow(data);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getActiveEscrowByCreator(creatorAddress: string): Promise<Escrow[]> {
    return new Promise<Escrow[]>((resolve, reject) => {
      let result: Escrow[] = [];

      databaseService
        .getEscrowsByCreatorWithStatus(creatorAddress, 'open')
        .then((data) => {
          result = escrowAdapter.convertToEscrowList(data);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async getInactiveEscrowByCreator(creatorAddress: string): Promise<Escrow[]> {
    return new Promise<Escrow[]>((resolve, reject) => {
      let result: Escrow[] = [];

      databaseService
        .getEscrowsByCreatorWithoutStatus(creatorAddress, 'open')
        .then((data) => {
          result = escrowAdapter.convertToEscrowList(data);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async cancelEscrow(escrowAddress: string): Promise<boolean> {

    return new Promise<boolean>((resolve, reject) => {
      databaseService.getEscrow(escrowAddress)
      .then((data) => {
        if (data) {
          this.updateEscrowStatus(data._id, 'cancelled')
          .then(() => {
            resolve(true);
          })
          .catch((e) => reject(e));
        }
      })
      .catch((error) => {
        reject(error);
      });
    });
  }

  async releaseEscrow(escrowAddress: string) {
    
    // TODO: check api condition

    this.updateEscrowStatus(escrowAddress, 'released');
  }

  private async updateEscrowStatus(id: string, newStatus: string) {
    // TODO: Call blockchainService

    databaseService.updateEscrowStatus(id, newStatus);
  }

  private async checkReleaseCondition(escrow: Escrow): Promise<boolean> {

    return new Promise<boolean>((resolve, reject) => {

      fetch(escrow.conditionApi)
        .then((response) => response.json())
        .then((data) => {

          var value = jsonpath.query(data, escrow.conditionField);
          
          // TODO: convert field type

          // TODO: apply match criteria

          
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
    
  }
}

export default new PaymentService();
