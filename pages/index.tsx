import React from 'react';
import styles from '../styles/pages/index.style';
import PageHead from '../components/Global/PageHead';

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
                    <a href="">Create Payment</a>
                  </h4>
                  <p className="description">
                    Send blockchain assets to anyone, set your own criteria for payment release, and
                    expiry date for the payment.
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
                    The funds are transfered to a temporary escrow account. A link will be provided
                    for you to share with the recipient.
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
                    The recipient visits the receive payment link to release the escrow. Notai will
                    verify the release condition on public APIs on the internet.
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
                    When the release criteria is fulfilled, the transaction will be made from the
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
                      You have full control over your funds. Create any number of claimable funds,
                      edit them at any time and on the go. Invalidate funds you no longer want
                      active.
                      <b>
                        Your claimable funds are stored and executed on the blockchain without any
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
                  href="https://github.com/jnlewis/notai"
                >
                  View Github
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*
        <section id="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-header">
                  <h3 className="section-title">Example Use Cases</h3>
                  <span className="section-divider"></span>
                  <p className="section-description">Here are some things you can do with Notai.</p>
                </div>
              </div>

              <div className="col-lg-10 offset-lg-1">
                <div className="row">
                  <div className="col-lg-6 col-md-6 box">
                    <div className="icon">
                      <i aria-hidden className="fas fa-money-check"></i>
                    </div>
                    <h4 className="title">Scheduled Payments</h4>
                    <p className="description">
                      Schedule payments that a recipient can claim at a specified date.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 box">
                    <div className="icon">
                      <i aria-hidden className="fas fa-umbrella-beach"></i>
                    </div>
                    <h4 className="title">Safe Purchase</h4>
                    <p className="description">
                      Safely purchase any assets verifiable on the internet.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 box">
                    <div className="icon">
                      <i aria-hidden className="fas fa-hand-holding-usd"></i>
                    </div>
                    <h4 className="title">Betting</h4>
                    <p className="description">
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 box">
                    <div className="icon">
                      <i aria-hidden className="fas fa-funnel-dollar"></i>
                    </div>
                    <h4 className="title">Regular Withdrawals</h4>
                    <p className="description">
                      Create steady withdrawals at specified intervals to make sure your money lasts
                      while giving you peace of mind.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

              */}

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
                    <i className="fas fa-envelope" style={{ float: 'left' }}></i>
                    <p>
                      <a target="_blank" href="https://github.com/jnlewis/notai">
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
