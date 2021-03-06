import React from 'react';
import styles from '../styles/pages/index.style';
import PageHead from '../components/Global/PageHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faMoneyCheck,
  faTrophy,
  faUmbrellaBeach,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="body">
      <PageHead />

      <header id="header" className="header-fixed">
        <div className="container">
          <div id="logo" className="pull-left">
            <h1>
              <a href="/">NOTAI</a>
            </h1>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#features">How it Works</a>
              </li>
              <li>
                <a href="#call-to-action">Developer</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
          <nav id="nav-menu-container-mobile">
            <ul className="nav-menu">
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="intro">
        <div className="intro-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p style={{ fontSize: 25 + 'px' }}>Send Payments With Condition</p>
                <p style={{ fontSize: 18 + 'px' }}>
                  Notai lets you send payments to anyone with your own condition.
                  <br />
                  Your payment is only released when a certain criteria on the internet is met.
                </p>
                <a href="/login" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="more-features" className="section-bg">
          <div className="container">
            <div className="section-header">
              <h3 className="section-title">How It Works</h3>
              <span className="section-divider"></span>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="box wow fadeInLeft">
                  <div className="icon">
                    <i>1</i>
                  </div>
                  <h4 className="title">
                    <a href="">Create Conditional Payment</a>
                  </h4>
                  <p className="description">
                    Send assets to anyone, set your own API condition for payment release, and a
                    claim expiry date.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="box wow fadeInRight">
                  <div className="icon">
                    <i>2</i>
                  </div>
                  <h4 className="title">
                    <a href="">Share Link With Recipient</a>
                  </h4>
                  <p className="description">
                    The funds are locked to a temporary escrow account. A link will be provided for
                    you to share with the recipient.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="box wow fadeInLeft">
                  <div className="icon">
                    <i>3</i>
                  </div>
                  <h4 className="title">
                    <a href="">Payment Release Verification</a>
                  </h4>
                  <p className="description">
                    The recipient visits the payment link to release the payment. Notai will verify
                    the release condition as configured by sender on the internet.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="box wow fadeInRight">
                  <div className="icon">
                    <i>4</i>
                  </div>
                  <h4 className="title">
                    <a href="">Payment Transacted</a>
                  </h4>
                  <p className="description">
                    When the release criteria is fulfilled, the funds will be transferred from the
                    temporary escrow account to the recipients account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="advanced-features">
          <div className="features-row section-bg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <img
                    className="advanced-feature-img-right"
                    src="/assets/img/screenshot-desktop-mobile.png"
                  />
                  <div className="wow fadeInLeft">
                    <h2>Manage your payments in an easy to use interface.</h2>
                    <h3>Notai looks great on every platform from desktop to mobile.</h3>
                    <p>
                      Easily manage your payments through the interactive user interface. Create any
                      number of payments easily with useful presets and Notai will keep track of
                      them. Cancel any payments that has been expired.
                      <b>
                        Your payments assets are stored and executed on the blockchain without any
                        intervention. Your decision is final.
                      </b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="call-to-action">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-left">
                <h3 className="cta-title">Open Source</h3>
                <p className="cta-text">
                  Notai is completely open source to maintain the highest level of transparency -
                  and is part of our commitment to maintain trust and security.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a
                  className="cta-btn align-middle"
                  target="_blank"
                  href="https://github.com/jnlewis/notai-smart-contract"
                >
                  View Github
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-header">
                  <h3 className="section-title">Use Cases</h3>
                  <span className="section-divider"></span>
                  <p className="section-description">Here are some things you can do with Notai.</p>
                </div>
              </div>

              <div className="col-lg-10 offset-lg-1">
                <div className="row">
                  <div className="col-lg-6 col-md-6 box">
                    <div className="fa-icon">
                      <FontAwesomeIcon icon={faMoneyCheck} />
                    </div>
                    <h4 className="title">Scheduled Payouts</h4>
                    <p className="description">
                      Schedule payments that a recipient can claim at a specified date.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 box">
                    <div className="icon">
                      <div className="fa-icon">
                        <FontAwesomeIcon icon={faHandshake} />
                      </div>
                    </div>
                    <h4 className="title">Escrow Agreements</h4>
                    <p className="description">
                      Create escrow contracts that outlines the terms and conditions between two
                      parties.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 box">
                    <div className="icon">
                      <div className="fa-icon">
                        <FontAwesomeIcon icon={faUmbrellaBeach} />
                      </div>
                    </div>
                    <h4 className="title">Retirement Savings</h4>
                    <p className="description">
                      Build up a saving funds that can be unlocked at a future date.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 box">
                    <div className="icon">
                      <div className="fa-icon">
                        <FontAwesomeIcon icon={faTrophy} />
                      </div>
                    </div>
                    <h4 className="title">Lottery, Games &amp; Prizes</h4>
                    <p className="description">
                      Competition hosts and licensed betting firms can issue claimable prizes .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-lg-5 col-md-5">
                <div className="contact-about">
                  <h3>NOTAI</h3>
                  <p>
                    Notai aims to make payments payments self managable and trustless by utilizing
                    the programmable logic of smart contracts and immutability of blockchains.
                  </p>
                </div>
              </div>

              <div className="col-lg-7 col-md-7">
                <div className="info">
                  <div>
                    <h4>Contact</h4>
                    <p>
                      <a target="_blank" href="https://github.com/jnlewis/notai-web">
                        Find us on Github
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-lg-left text-center">
              <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>
        {styles}
      </style>
    </div>
  );
}
