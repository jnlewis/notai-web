import styles from '../styles/pages/receive.style';
import React from 'react';
import PageHead from '../components/Global/PageHead';
import HeaderLogin from '../components/HeaderLogin/HeaderLogin';
import { Escrow } from '../core/interfaces/escrow';
import paymentService from '../core/services/paymentService';

interface ReceiveProps {
  payment?: Escrow;
}

export default function Receive2({ payment }: ReceiveProps): React.ReactElement {
  const releasePayment = (escrowAddress: string) => {
    paymentService
      .releaseEscrow(escrowAddress)
      .then(() => {})
      .catch((error) => {});
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
                    <b>Expires on </b> {payment.expiry}
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
                  <div className="text-center mt-4">
                    <a
                      href="#"
                      className="btn btn-primary"
                      onClick={() => releasePayment(payment.escrowAddress)}
                    >
                      Claim Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: 20 + 'px' }}>
              <div className="col-lg-12 section-header">
                <p className="section-description" style={{ maxWidth: 450 + 'px' }}>
                  As transactions are carried out in a blockchain, please allow a few minutes for
                  the payment to be credited into your account.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let escrow: Escrow = null;

  const escrowAddress = context.query.a;
  if (escrowAddress) {
    escrow = await paymentService.getEscrow(escrowAddress);
  }

  return {
    props: {
      payment: escrow,
    },
  };
}
