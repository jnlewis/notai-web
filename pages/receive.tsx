import styles from '../styles/pages/receive.style';
import React, { useState } from 'react';
import PageHead from '../components/Global/PageHead';
import HeaderLogin from '../components/HeaderLogin/HeaderLogin';
import { Payment } from '../core/interfaces/payment';
import paymentService from '../core/services/paymentService';
import MessageDialog from '../components/MessageDialog/MessageDialog';
import { toShortDateFormat } from '../core/utils/dateTimeUtil';

interface ReceiveProps {
  payment?: Payment;
}

export default function Receive({ payment }: ReceiveProps): React.ReactElement {
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [messageDialogTitle, setMessageDialogTitle] = useState('');
  const [messageDialogDesc, setMessageDialogDesc] = useState('');
  const [isPaymentReleased, setIsPaymentReleased] = useState(false);

  const releasePayment = (paymentAddress: string) => {
    showMessage('Please Wait', 'Releasing payment...');

    paymentService
      .releasePayment(paymentAddress)
      .then((result) => {
        if (result) {
          showMessage(
            'Release Successful',
            'The payment is successful. Please allow a few minutes for transaction to take place.',
          );
          setIsPaymentReleased(true);
        } else {
          showMessage(
            'Condition Not Met',
            'The condition for the release of this payment is not yet met.',
          );
        }
      })
      .catch(() => {
        showMessage(
          'Release Failed',
          'Release was not successful. Please try again or contact support.',
        );
      });
  };

  const showMessage = (title: string, message: string) => {
    setMessageDialogTitle(title);
    setMessageDialogDesc(message);
    setShowMessageDialog(true);
  };

  if (!payment) {
    return (
      <>
        <style jsx global>
          {styles}
        </style>
        <div className="main-container">
          <PageHead />
          <HeaderLogin />
          <h2>Payment not found</h2>
          <div className="text-muted">This payment appears to be invalid.</div>
        </div>
      </>
    );
  }

  return (
    <>
      <style jsx global>
        {styles}
      </style>
      <div className="main-container">
        <PageHead />
        <HeaderLogin />

        <section id="more-features" className="section-bg">
          <div className="container">
            <div className="section-header">
              <h3 className="section-title">Payment Received</h3>
              <h4 className="text-center">
                {payment.amount} {payment.asset}
              </h4>
              <span className="section-divider"></span>
              <p className="section-description">
                You have received a conditional payment.
                <br />
                You can claim this payment once the following condition is met.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="box">
                  <h4 className="title">{payment.title}</h4>
                  <h4 className="title">
                    {payment.amount} {payment.asset}
                  </h4>
                  <div>
                    <b>From:</b> {payment.creatorAddress}
                  </div>
                  <div>
                    <b>To:</b> {payment.recipientAddress}
                  </div>
                  <div>
                    <b>Expires on </b> {toShortDateFormat(new Date(payment.expiry))}
                  </div>

                  <hr className="hr-dotted" />

                  <h4 className="title">Release Condition</h4>
                  <div>
                    <b>API:</b> {payment.conditionApi}
                  </div>
                  <div>
                    <b>Field:</b> {payment.conditionField} ({payment.conditionFieldType})
                  </div>
                  <div>
                    <b>Matching:</b> {payment.conditionOperator} {payment.conditionValue}
                  </div>
                  {(!isPaymentReleased && payment.status === 'open') && (
                    <div className="text-center mt-4">
                      <a
                        href="#"
                        className="btn btn-primary"
                        onClick={() => releasePayment(payment.paymentAddress)}
                      >
                        Claim Now
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: 20 + 'px' }}>
              <div className="col-lg-12 section-header">
                <p className="section-description">
                  As transactions are carried out in a blockchain, please allow a few minutes for
                  the payment to be credited into your account.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {showMessageDialog && (
        <MessageDialog
          show={true}
          title={messageDialogTitle}
          description={messageDialogDesc}
          onClose={() => setShowMessageDialog(false)}
        />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  let payment: Payment = null;

  const paymentAddress = context.query.a;
  if (paymentAddress) {
    payment = await paymentService.getPayment(paymentAddress);
  }

  return {
    props: {
      payment: payment,
    },
  };
}
