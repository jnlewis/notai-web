import React from 'react';
import styles from './HeaderLoggedIn.style';
import WalletService from './../../core/services/walletService';
import { useRouter } from 'next/router';

export default function HeaderLoggedIn(): React.ReactElement {
  const router = useRouter();

  const logout = () => {
    WalletService.clearLoggedInKey();
    router.push('/').then(() => window.scrollTo(0, 0));
  };

  return (
    <>
      <style jsx global>
        {styles}
      </style>

      <header id="header" className="header-fixed">
        <div className="container">
          <div id="logo" className="pull-left">
            <h1>
              <a href="/" className="scrollto">
                NOTAI
              </a>
            </h1>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </nav>
          <nav id="nav-menu-container-mobile">
            <ul className="nav-menu">
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
