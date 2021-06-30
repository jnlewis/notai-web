import React from 'react';
import styles from './HeaderLogin.style';

export default function HeaderLogin(): React.ReactElement {
  return (
    <>
      <style jsx global>
        {styles}
      </style>

      <header id="header" className="header-fixed">
        <div className="container">
          <div id="logo" className="pull-left">
            <h1>
              <a href="/">
                NOTAI
              </a>
            </h1>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li>
                <a href="/">Back to Home</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
