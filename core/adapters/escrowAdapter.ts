import { Escrow } from '../interfaces/escrow';
import { EscrowData } from '../interfaces/escrowData';

class EscrowAdapter {
  convertToEscrowData(escrow: Escrow, createdTime: number) {
    if (!escrow) {
      return null;
    };

    const result: EscrowData = {
      created_time: createdTime,
      escrow_address: escrow.escrowAddress,
      creator_address: escrow.creatorAddress,
      recipient_address: escrow.recipientAddress,
      title: escrow.title,
      asset: escrow.asset,
      amount: escrow.amount,
      expiry: escrow.expiry,
      status: escrow.status,
      condition_api: escrow.conditionApi,
      condition_field: escrow.conditionField,
      condition_field_type: escrow.conditionFieldType,
      condition_value: escrow.conditionValue,
      condition_operator: escrow.conditionOperator,
    };

    return result;
  }

  convertToEscrow(data: EscrowData) {
    if (!data) {
      return null;
    };
    
    const result: Escrow = {
      escrowAddress: data.escrow_address,
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

  convertToEscrowList(data: EscrowData[]): Escrow[] {
    if (!data) {
      return null;
    }
    
    const result: Escrow[] = [];
    data.forEach((item) => {
      result.push(this.convertToEscrow(item));
    });

    return result;
  }
}

export default new EscrowAdapter();
