import React, { useState, useEffect, ReactNode } from 'react';
import styles from './ActiveList.style';
import PaymentService from '../../core/services/paymentService';
import WalletService from './../../core/services/walletService';
import { Escrow } from '../../core/interfaces/escrow';
import LoadingBlock from '../LoadingBlock/LoadingBlock';
import { isEarlierThan, isLaterThan, now, toShortDateFormat, unixTimeToDate } from '../../core/utils/dateTimeUtil';
import paymentService from '../../core/services/paymentService';

export default function ActiveList() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetched, setFetched] = useState(false);
  const [escrowList, setEscrowList] = useState<Escrow[]>([]);

  useEffect(() => {
    retrieveList();
  }, [escrowList]);

  const retrieveList = () => {
    if (!fetched) {
      setIsLoading(true);
      const creatorAddress: string = WalletService.getLoggedInAddress();

      PaymentService.getActiveEscrowByCreator(creatorAddress)
        .then((result) => {
          setIsLoading(false);
          setFetched(true);
          setEscrowList(result);
        })
        .catch((error) => {
          setIsLoading(false);
          setFetched(true);
          console.log(error);
        });
    }
  }

  const cancelPayment = (escrow: Escrow) => {

    if (isEarlierThan(now(), unixTimeToDate(escrow.expiry))) {
      alert('You cannot cancel this payment because is not yet expired.');
      return;
    }

    setIsLoading(true);
    PaymentService.cancelEscrow(escrow.escrowAddress)
    .then(() => {
      setFetched(false);
      retrieveList();
    })
    .catch((error) => {
      setIsLoading(false);
      console.log(error);
      alert('Unable to cancel. Please try again.');
    });
  }

  const displayActive = (): ReactNode => {
    if (isLoading) {
      return <LoadingBlock></LoadingBlock>;
    }

    if (escrowList && escrowList.length > 0) {
      return escrowList.map((item, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-body">
              <a
                className="selectable-item"
                data-toggle="collapse"
                href={`#collapse_${index}`}
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item.amount} {item.asset}
                </h6>
                <p className="card-text">
                  Status: {item.status}<br />
                  Expires on: {toShortDateFormat(unixTimeToDate(item.expiry))}
                </p>
              </a>

              <div className="collapse" id={`collapse_${index}`}>
                <div className="mt-4 mb-4">
                  <hr className="hr-dotted" />
                  <div>
                    <b>Receiving address:</b> {item.recipientAddress}
                  </div>
                  <div>
                    <b>Link:</b> {paymentService.getReceiveLink(item.escrowAddress)}
                  </div>
                  <h5 className="mt-2">Release Condition</h5>
                  <div>
                    <b>API:</b> {item.conditionApi}
                  </div>
                  <div>
                    <b>Field:</b> {item.conditionField} ({item.conditionFieldType})
                  </div>
                  <div>
                    <b>Matching:</b> {item.conditionOperator} {item.conditionValue}
                  </div>
                </div>
                <a href="#" className="card-link btn text-danger" onClick={() => cancelPayment(item)}>
                  Cancel Payment
                </a>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div className="pb-4">You do not have any active payments.</div>;
    }
  };

  return (
    <div className="wrapper">
      <h2>Active Payments</h2>
      <div className="text-muted">
        These are your active payments which have yet to be released. Click or tap each item for
        details.
      </div>
      <div className="pt-4">
        <div>{displayActive()}</div>
      </div>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
}
