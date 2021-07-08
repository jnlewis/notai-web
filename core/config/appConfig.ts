/*
  RPC Endpoint List: https://dora.coz.io/monitor
*/
interface Config {
  environment: string;
  rpcEndpoint: string;
  networkMagic: number;
  contractScriptHash: string;
  contractKey: string;
  receivePaymentPath: string;
}

export const LocalConfig: Config = {
  environment: 'local',
  rpcEndpoint: 'http://127.0.0.1:50012',
  networkMagic: 2572500607,
  contractScriptHash: '0x947e4587f56bb654bae58e92550a8b75b14e9b24',
  contractKey: '5d5fb3b38fc2c2846ea1cec80f14ad02d38a78318caca22b7b81c09c35928802',
  receivePaymentPath: 'http://localhost:3000/receive',
};

export const TestNetConfig: Config = {
  environment: 'testnet',
  rpcEndpoint: 'https://testnet1.neo.coz.io:443',
  networkMagic: 844378958,
  contractScriptHash: '0x52097e39b603e8c3765f57dd0db894c99988efd1',
  contractKey: 'd59cb956a141b9473f36ac8f5604a46352663a0874af5f42e726cffdbeb15b0d',
  receivePaymentPath: 'https://notai.vercel.app/receive',
};

export const AppConfig = {
  env: TestNetConfig,
};
