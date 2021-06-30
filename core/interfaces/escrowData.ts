export interface EscrowData {
  _id?: string;
  created_time?: number;
  escrow_address?: string;
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
