<p align="center">
    <img src="https://github.com/jnlewis/notai-web/raw/main/docs/images/logo.png" width="128" height="128" alt="Notai">
</p>

#### Related repositories

- Frontend Web (this): https://github.com/jnlewis/notai-web
- Blockchain Smart Contract: https://github.com/jnlewis/notai-smart-contract

# NOTAI

#### Send Payments With Condition

Notai lets you send payments to anyone with your own condition. Your payment is only released when certain criteria on the internet is fulfilled. Notai runs as a decentralized service on a blockchain, which means your payment is secured and resilient to data loss. More importantly, your decision is executed exactly the you want it without possible interference.

The service introduces the ability for an individual on the blockchain to create an escrow account and transfer funds to it, which can be designated to a recipient account. The recipient can then release these funds when a particular condition is met. The condition would be specified by the sender along with a payment expiry date. If the condition is not fulfiled by the time of expiry, the sender can cancel the payment whereby the funds will be transferred back to the sender account.

## Features

- Send payments with the ability to specify conditions that must be fulfilled in order for the payments to be released.
- Easily configure payment conditions with useful presets.
- Set expiry date on payment claims.
- Receive payments addressed to you.
- Interactive user interface accessible from any device with a web browser.
- Responsive User Interface which is designed for both desktop and mobile screen sizes.
- Log in using private key or create new wallets on the blockchain.
- Cancellation of expired payments.

## Payment Process

<p align="center">
    <img src="https://raw.githubusercontent.com/jnlewis/notai-web/main/docs/images/notai_payment_process.png" alt="Process">
</p>

1.  Sender would access Notai using their NEO blockchain Wallet.
2.  Sender can then create a payment and complete the following details:
    a. The asset and amount to transfer.
    b. The designated address.
    c. The public HTTP API condition that must match in order for the payment to release.
    d. The payment expiry date.
3.  When payment is created, assets from sender account is transferred to temporary escrow.
4.  Sender can send the payment URL to recipient.
5.  Recipient will access the payment URL to read the condition of release and to release the payment.
6.  Notai will verify that the payment can be released before forwarding the request to Smart Contract to perform the decentralized verification.
7.  When release condition is fulfilled, the assets in the temporary escrow is transferred to the recipient.
8.  In the event that payment expiry specified in Step 2 has elapsed, the sender can cancel the payment where the assets will be transferred back to the sender address.

**Service Fee**: A service fee of 0.5 GAS is applied for each payment created. This fee will be transferred to the Smart Contract. Part of this fee will be used to pay for the Oracle service used to verify the payment release condition when the recipient releases a payment.

## Technologies

**Frontend Application (UX)**

- The front end web application is developed in TypeScript with ReactJs and NextJs framework.

**Blockchain Smart Contract**

- The smart contract is developed in C# and deployed on <a href="https://www.neo.org/" target="_blank">NEO blockchain</a>.
- **Neo VM**: Used for decentralized storage and smart contract execution.
- **Neo Oracle Service**: Used to access any API on the internet from the blockchain
  (https://docs.neo.org/docs/en-us/advanced/oracle.html

## Architecture

<p align="center">
    <img src="https://raw.githubusercontent.com/jnlewis/notai-web/main/docs/images/notai_architecture.png" alt="Notai Architecture">
</p>

## Live Product Preview

The alpha preview of the application is available here and is connected to the NEO TestNet. Note that in this build the application will write trace logs to browser console.
<a href="https://notai.vercel.app" target="_blank">https://notai.vercel.app</a>

## Deployment

The frontend web application is hosted on Vercel and deployed through Vercel Github integration directly from the main branch.
Dashboard and pipeline: https://vercel.com/jnlewis/notai-web

## NEO Frontier Hackathon

The project will be submitted as a hackathon entry on the NEO Frontier Blockchain Launchpad. The project plan document submitted in the first part of the hackathon can be found <a href="https://github.com/jnlewis/notai/blob/master/docs/Planathon.md">here</a>

## Screenshots

<p align="center">
    <img src="https://raw.githubusercontent.com/jnlewis/notai-web/main/docs/images/screenshot_main.png" alt="Landing Page">
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/jnlewis/notai-web/main/docs/images/screenshot_howitworks.png" alt="How it works">
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/jnlewis/notai-web/main/docs/images/screenshot_desktop_mobile.png" alt="Desktop Mobile Screenshot">
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/jnlewis/notai-web/main/docs/images/screenshot_login.png" alt="Login Page">
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/jnlewis/notai-web/main/docs/images/screenshot_createpayment.png" alt="Create Payment">
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/jnlewis/notai-web/main/docs/images/screenshot_receive.png" alt="Receive Payment">
</p>

## License

- Open source <a href="https://github.com/jnlewis/notai/blob/master/LICENSE">Apache-2.0 License</a>
