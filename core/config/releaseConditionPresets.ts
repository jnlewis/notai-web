import { ConditionPreset } from '../interfaces/conditionPreset';

export const releaseConditionPresets: ConditionPreset[] = [
  {
    key: 'custom',
    name: 'Custom Condition',
    description: 'Manually configure the payment release criteria',
    conditionApi: '',
    conditionField: '',
    conditionFieldType: 'text',
    conditionOperator: '=',
    conditionValue: '',
  },
  {
    key: 'demo',
    name: 'Demo',
    description: 'The NOTAI demo API call',
    conditionApi:
      'https://raw.githubusercontent.com/jnlewis/notai-web/main/public/example/api-response-true.json',
    conditionField: '$.payment.canBeClaimed',
    conditionFieldType: 'text',
    conditionOperator: '=',
    conditionValue: 'yes',
  },
  {
    key: 'specific-date',
    name: 'On a specific date',
    description: 'Payment can be claimed on a specific date (UTC time)',
    conditionApi: 'https://worldtimeapi.org/api/timezone/Etc/UTC',
    conditionField: '$.utc_datetime',
    conditionFieldType: 'datetime',
    conditionOperator: '>=',
    conditionValue: '2022-01-01',
  },
  {
    key: 'bitcoin-above-100k',
    name: 'Bitcoin Price Above 100k',
    description: 'Payment can be claimed when a bitcoin price above 100,000',
    conditionApi: 'https://api.coindesk.com/v1/bpi/currentprice.json',
    conditionField: '$.bpi.USD.rate_float',
    conditionFieldType: 'number',
    conditionOperator: '>',
    conditionValue: '100000.00',
  },
];

export function getReleaseConditionPreset(name: string): ConditionPreset {
  return releaseConditionPresets.find((item) => item.name == name);
}
