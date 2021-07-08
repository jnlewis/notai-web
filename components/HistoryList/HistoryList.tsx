import React, { useState, useEffect, ReactNode } from 'react';
import styles from './HistoryList.style';
import PaymentService from '../../core/services/paymentService';
import WalletService from '../../core/services/walletService';
import { Payment } from '../../core/interfaces/payment';
import LoadingBlock from '../LoadingBlock/LoadingBlock';
import { toShortDateFormat, unixTimeToDate } from '../../core/utils/dateTimeUtil';
import paymentService from '../../core/services/paymentService';
import logger from '../../core/utils/logger';

export default function HistoryList() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetched, setFetched] = useState(false);
  const [paymentList, setPaymentList] = useState<Payment[]>([]);

  useEffect(() => {
    if (!fetched) {
      setIsLoading(true);
      const creatorAddress: string = WalletService.getLoggedInAddress();

      PaymentService.getInactivePaymentByCreator(creatorAddress)
        .then((result) => {
          setIsLoading(false);
          setFetched(true);
          setPaymentList(result);
        })
        .catch((error) => {
          setIsLoading(false);
          setFetched(true);
          logger.logError('HistoryList.getInactivePaymentByCreator', error);
        });
    }
  }, [paymentList]);

  const displayInactive = (): ReactNode => {
    if (isLoading) {
      return <LoadingBlock></LoadingBlock>;
    }

    if (paymentList && paymentList.length > 0) {
      return paymentList.map((item, index) => {
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
                    <b>Link:</b> {paymentService.getReceiveLink(item.paymentAddress)}
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
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <div className="pb-4">You have no past payments at the moment.</div>;
    }
  };

  return (
    <div className="wrapper">
      <h2>Past Payments</h2>
      <div className="text-muted">
        These are your past payments which have yet to be released. Click or tap each item for
        details.
      </div>
      <div className="pt-4">
        <div>{displayInactive()}</div>
      </div>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
}
