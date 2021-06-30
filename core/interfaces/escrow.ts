export interface Escrow {
  escrowAddress: string;
  creatorAddress: string;
  recipientAddress: string;
  title: string;
  asset: string;
  amount: number;
  expiry: number;
  status: string;
  conditionApi: string;
  conditionField: string;
  conditionFieldType: string;
  conditionOperator: string;
  conditionValue: string;
}
