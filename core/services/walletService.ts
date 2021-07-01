import { tx, wallet, settings } from '@cityofzion/neon-core';
import { WalletInfo } from '../interfaces/walletInfo';

class WalletService {
  createNewWallet(): WalletInfo {
    const acct = new wallet.Account();

    const result: WalletInfo = {
      privateKey: acct.privateKey,
      publicKey: acct.publicKey,
      address: acct.address,
    };

    return result;
  }

  getWalletInfoFromKey(privateKey: string): WalletInfo {
    const walletAccount = new wallet.Account(privateKey);

    const result: WalletInfo = {
      privateKey: walletAccount.privateKey,
      publicKey: walletAccount.publicKey,
      address: walletAccount.address,
    };

    return result;
  }

  isValidPrivateKey(privateKey: string): boolean {
    return wallet.isPrivateKey(privateKey);
  }

  setLoggedInKey(privateKey: string): void {
    localStorage.setItem('notaiUserKey', privateKey);
  }

  getLoggedInKey(): string {
    return localStorage.getItem('notaiUserKey');
  }

  getLoggedInAddress(): string {
    return this.getWalletInfoFromKey(this.getLoggedInKey())?.address;
  }

  clearLoggedInKey(): void {
    localStorage.removeItem('notaiUserKey');
  }

  isLoggedIn(): boolean {
    const userKey = localStorage.getItem('notaiUserKey');
    return userKey && userKey.trim() !== '';
  }
}

export default new WalletService();
