import React, { useState } from 'react';
import styles from './Create.style';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';
import MessageDialog from '../MessageDialog/MessageDialog';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PaymentService from '../../core/services/paymentService';
import WalletService from './../../core/services/walletService';
import { Payment } from '../../core/interfaces/payment';
import { releaseConditionPresets } from '../../core/config/releaseConditionPresets';
import { ConditionPreset } from '../../core/interfaces/conditionPreset';
import paymentService from '../../core/services/paymentService';

export default function Create() {
  const [showTransactionDialog, setShowTransactionDialog] = useState(false);
  const [showPreset, setShowPreset] = useState(false);
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [messageDialogTitle, setMessageDialogTitle] = useState('');
  const [messageDialogDesc, setMessageDialogDesc] = useState('');

  // User input states
  const [inputTitle, setInputTitle] = useState('');
  const [inputToAddress, setInputToAddress] = useState('');
  const [inputAsset, setInputAsset] = useState('NOTAI');
  const [inputAmount, setInputAmount] = useState(0);
  const [inputExpiryDate, setInputExpiryDate] = useState(new Date());
  const [inputConditionApi, setInputConditionApi] = useState('');
  const [inputConditionField, setInputConditionField] = useState('');
  const [inputConditionFieldType, setInputConditionFieldType] = useState('text');
  const [inputConditionOperator, setInputConditionOperator] = useState('=');
  const [inputConditionValue, setInputConditionValue] = useState('');

  const onPresetSelected = (preset: ConditionPreset) => {
    setShowPreset(false);
    setInputConditionApi(preset.conditionApi);
    setInputConditionField(preset.conditionField);
    setInputConditionFieldType(preset.conditionFieldType);
    setInputConditionOperator(preset.conditionOperator);
    setInputConditionValue(preset.conditionValue);
  };
  const onPresetClose = () => {
    setShowPreset(false);
  };

  const handleCreate = () => {
    // Validate input
    if (
      inputTitle.trim() === '' ||
      inputToAddress.trim() === '' ||
      inputAsset.trim() === '' ||
      inputAmount <= 0 ||
      inputExpiryDate === undefined ||
      inputConditionApi.trim() === '' ||
      inputConditionField.trim() === '' ||
      inputConditionFieldType.trim() === '' ||
      inputConditionOperator.trim() === '' ||
      inputConditionValue.trim() === ''
    ) {
      showMessage('Required Fields', `Please enter all fields.`);
      return;
    }

    // Show confirm dialog
    setShowTransactionDialog(true);
  };

  const handleTxCancel = () => {
    setShowTransactionDialog(false);
  };
  const handleTxConfirm = () => {
    setShowTransactionDialog(false);

    const paymentAddress: string = PaymentService.generatePaymentAddress();
    const creatorAddress: string = WalletService.getLoggedInAddress();

    const payment: Payment = {
      paymentAddress: paymentAddress,
      creatorAddress: creatorAddress,
      recipientAddress: inputToAddress,
      title: inputTitle,
      asset: inputAsset,
      amount: inputAmount,
      expiry: inputExpiryDate.getTime(),
      status: 'open',
      conditionApi: inputConditionApi,
      conditionField: inputConditionField,
      conditionFieldType: inputConditionFieldType,
      conditionOperator: inputConditionOperator,
      conditionValue: inputConditionValue,
    };

    PaymentService.createPayment(payment)
      .then(() => {
        showMessage(
          'Submission Successful',
          `Share the following link to claim: ${paymentService.getReceiveLink(
            payment.paymentAddress,
          )}`,
        );

        // Reset fields
        setInputTitle('');
        setInputToAddress('');
        setInputAsset('NOTAI');
        setInputAmount(0);
        setInputExpiryDate(new Date());
        setInputConditionApi('');
        setInputConditionField('');
        setInputConditionFieldType('text');
        setInputConditionOperator('=');
        setInputConditionValue('');
      })
      .catch(() => {
        showMessage(
          'Submission Failed',
          'Submission was not successful. Please try again or contact support.',
        );
      });
  };
  const showMessage = (title: string, message: string) => {
    setMessageDialogTitle(title);
    setMessageDialogDesc(message);
    setShowMessageDialog(true);
  };

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-12">
          <h2>Send a new conditional payment</h2>
          <div className="text-muted">Create a new payment and send it to anyone</div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="mt-4">
            <b>Payment Details</b>

            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                value={inputTitle}
                onInput={(e) => setInputTitle((e.target as HTMLInputElement).value)}
                placeholder="Eg: New years gift"
                maxLength={200}
              />
            </div>
            <div className="form-group">
              <label>Receiving Address</label>
              <input
                className="form-control"
                value={inputToAddress}
                onInput={(e) => setInputToAddress((e.target as HTMLInputElement).value)}
                placeholder="Eg: NTYVRPprQanDRYY6nFsEnrKMurypDXa45t"
                maxLength={60}
              />
            </div>

            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Asset</label>
                  <select
                    value={inputAsset}
                    className="form-control"
                    onChange={(e) => setInputAsset(e.target.value)}
                  >
                    <option value="NOTAI">NOTAI</option>
                    <option value="GAS">GAS</option>
                    <option value="NEO">NEO</option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Amount</label>
                  <input
                    className="form-control"
                    type="number"
                    value={inputAmount}
                    onInput={(e) =>
                      setInputAmount(parseFloat((e.target as HTMLInputElement).value))
                    }
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Expiry Date</label>
              <div>
                <DatePicker
                  className="form-control"
                  selected={inputExpiryDate}
                  onChange={(date) => setInputExpiryDate(date)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="mt-4">
            <b>Release Conditon</b>

            <div className="form-group">
              <label>Preset</label>
              <button className="form-control btn btn-default" onClick={() => setShowPreset(true)}>
                Select a preset
              </button>
            </div>

            <div className="form-section">
              <div className="form-group">
                <label>API Endpoint URL</label>
                <input
                  className="form-control"
                  value={inputConditionApi}
                  onInput={(e) => setInputConditionApi((e.target as HTMLInputElement).value)}
                  placeholder="Eg: https://..."
                  maxLength={500}
                />
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label>
                      Field (
                      <a className="more-link" href="https://jsonpath.com/" target="_blank">
                        JSONPath format)
                      </a>
                    </label>
                    <input
                      className="form-control"
                      value={inputConditionField}
                      onInput={(e) => setInputConditionField((e.target as HTMLInputElement).value)}
                      placeholder="Eg: $.parent.child"
                      maxLength={500}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Field Type</label>
                    <select
                      value={inputConditionFieldType}
                      className="form-control"
                      onChange={(e) => setInputConditionFieldType(e.target.value)}
                    >
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="datetime">Date Time</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label>Operator</label>
                    <select
                      value={inputConditionOperator}
                      className="form-control"
                      onChange={(e) => setInputConditionOperator(e.target.value)}
                    >
                      <option value="=">Equals</option>
                      <option value=">">More Than</option>
                      <option value=">=">More Than Equals</option>
                      <option value="<">Less Than</option>
                      <option value="<=">Less Than Equals</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label>Value</label>
                    <input
                      className="form-control"
                      value={inputConditionValue}
                      onInput={(e) => setInputConditionValue((e.target as HTMLInputElement).value)}
                      placeholder="Eg: value"
                      maxLength={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div>
          <button className="btn btn-primary create-button" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>

      {showTransactionDialog && (
        <ConfirmDialog
          show={true}
          title={`Confirm Submission`}
          description={`You are about to create a conditional payment of ${inputAmount} NOTAI. Confirm submission?`}
          onCancel={handleTxCancel}
          onConfirm={handleTxConfirm}
        />
      )}

      {showMessageDialog && (
        <MessageDialog
          show={true}
          title={messageDialogTitle}
          description={messageDialogDesc}
          onClose={() => setShowMessageDialog(false)}
        />
      )}

      <Modal show={showPreset} size="lg" onHide={onPresetClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Select a Release Condition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {releaseConditionPresets.map((item) => {
            return (
              <a className="preset-item" key={item.key} onClick={() => onPresetSelected(item)}>
                <div className="card">
                  <div className="card-body">
                    <h6>{item.name}</h6>
                    <span className="card-subtitle text-muted">{item.description}</span>
                  </div>
                </div>
              </a>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onPresetClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
}
