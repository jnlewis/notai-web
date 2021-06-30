import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/pages/account.style';
import Create from '../components/Create/Create';
import PageHead from '../components/Global/PageHead';
import HeaderLoggedIn from '../components/HeaderLoggedIn/HeaderLoggedIn';
import ActiveList from '../components/ActiveList/ActiveList';
import HistoryList from '../components/HistoryList/HistoryList';
import walletService from '../core/services/walletService';

export default function Account() {
  const router = useRouter();

  const [selectedMenu, setSelectedMenu] = useState('create');

  useEffect(() => {
    if (!walletService.isLoggedIn()) {
      router.push("/");
    }
  });

  return (
    <>
      <style jsx global>
        {styles}
      </style>

      <PageHead />
      <HeaderLoggedIn />

      <div className="container">
        <div className="content">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="new-tab"
                data-toggle="tab"
                href="#new"
                role="tab"
                aria-controls="new"
                aria-selected="true"
                onClick={() => setSelectedMenu('create')}
              >
                New Payment
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="active-tab"
                data-toggle="tab"
                href="#active"
                role="tab"
                aria-controls="active"
                aria-selected="false"
                onClick={() => setSelectedMenu('active')}
              >
                Active Payments
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="history-tab"
                data-toggle="tab"
                href="#history"
                role="tab"
                aria-controls="history"
                aria-selected="false"
                onClick={() => setSelectedMenu('history')}
              >
                Past Payments
              </a>
            </li>
          </ul>

          {selectedMenu === 'create' && <Create />}
          {selectedMenu === 'active' && <ActiveList />}
          {selectedMenu === 'history' && <HistoryList />}
        </div>
      </div>
    </>
  );
}
