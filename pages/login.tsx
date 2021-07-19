import styles from '../styles/pages/login.style';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PageHead from '../components/Global/PageHead';
import HeaderLogin from '../components/HeaderLogin/HeaderLogin';
import walletService from '../core/services/walletService';
import { faExclamationTriangle, faKey, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login(): React.ReactElement {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [showLoginByKey, setShowLoginByKey] = useState(false);
  const [input, setInput] = useState('');
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [newAccountPrivateKey, setNewAccountPrivateKey] = useState('');
  const [newAccountAddress, setNewAccountAddress] = useState('');

  // Create new account
  const handleCloseCreateAccount = () => setShowCreateAccount(false);
  const handleShowCreateAccount = () => {
    setShowCreateAccount(true);
    const newWallet = walletService.createNewWallet();
    setNewAccountPrivateKey(newWallet.privateKey);
    setNewAccountAddress(newWallet.address);
  };

  // Login with key
  const handleCloseLoginByKey = () => setShowLoginByKey(false);
  const handleShowLoginByKey = () => setShowLoginByKey(true);
  const loginWithSecret = () => {
    // if (walletService.isValidPrivateKey(input)) {
    walletService.setLoggedInKey(input);
    setIsLoading(true);
    router.push('/account').then(() => window.scrollTo(0, 0));
    //} else {
    //  setInput('');
    //  alert('Unable to open wallet. Please ensure that the key is correct.');
    //}
  };

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
              <h3 className="section-title">Access Your Account</h3>
              <span className="section-divider"></span>
              <p className="section-description">
                Your NOTAI account is stored on the NEO blockchain and is linked to your NEO wallet.
                <br />
                You access your account by logging in using your wallet.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="file-input box">
                  <div style={{ padding: 40 + 'px' }}>
                    <div className="icon">
                      <div className="icon-large-2">
                        <FontAwesomeIcon icon={faKey} />
                      </div>
                    </div>
                    <h4 className="title">
                      <a onClick={handleShowLoginByKey}>Login with Private Key</a>
                    </h4>
                    <p className="description">
                      Your private key will only be kept on your device browser.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="file-input box">
                  <div style={{ padding: 40 + 'px' }}>
                    <div className="icon">
                      <div className="icon-large-2">
                        <FontAwesomeIcon icon={faWallet} />
                      </div>
                    </div>
                    <h4 className="title">
                      <a>Login with WalletConnect (Coming Soon)</a>
                    </h4>
                    <p className="description">Scan the QR code to login.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 section-header">
                <p className="description create-account">
                  <a className="create-account" onClick={handleShowCreateAccount}>
                    Don't have a wallet? Create one for free.
                  </a>
                </p>
              </div>
            </div>
            <div className="row" style={{ marginTop: 20 + 'px' }}>
              <div className="col-lg-12 section-header">
                <div className="warning-icon-2">
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>
                <p className="section-description" style={{ textAlign: 'left' }}>
                  Alpha Build: NOTAI is currently in development and will use the NEO Testnet for
                  all blockchain transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Modal show={showLoginByKey} onHide={handleCloseLoginByKey}>
          <Modal.Header closeButton>
            <Modal.Title>Login with Private Key</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={input}
                  onInput={(e) => setInput((e.target as HTMLInputElement).value)}
                  placeholder="Your NEO wallet key"
                />
                <small className="form-text text-muted">
                  Your private key is only kept on your local browser. We'll never store your
                  private key.
                </small>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {!isLoading && (
              <>
                <Button variant="secondary" onClick={handleCloseLoginByKey}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={loginWithSecret}>
                  Login
                </Button>
              </>
            )}
            {isLoading && (
              <div>
                <Button variant="primary">Logging in...</Button>
              </div>
            )}
          </Modal.Footer>
        </Modal>

        <Modal show={showCreateAccount} onHide={handleCloseCreateAccount}>
          <Modal.Header closeButton>
            <Modal.Title>Creating New Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isLoading && <div>Creating your account. Please wait...</div>}
            {!isLoading && newAccountPrivateKey && (
              <div>
                <p>
                  Your account is created with address <b>{newAccountAddress}</b>. Please take note
                  of your private key and keep it safely:
                </p>
                <textarea disabled className="key-textarea">
                  {newAccountPrivateKey}
                </textarea>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            {!isLoading && (
              <Button variant="secondary" onClick={handleCloseCreateAccount}>
                Close
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
