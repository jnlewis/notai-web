## NEO Frontier Hackathon

The document is part of the project plan submission for the Planathon (Part 1) of the NEO Frontier Blockchain Launchpad hackathon.

## Project Information

The project proposes the development of NOTAI, a decentralized application (dApp) with the aim to make self-manageable payment contracts possible.

The application introduces the ability for an individual on the blockchain to create an escrow account and transfer funds to it, which can be designated to a recipient account. The recipient can then “claim” these funds when a particular condition is met. The condition would be specified by sender or creator of the escrow account. If the condition is not met after a set period, the creator can then re-claim their funds.

The use case for such a service include payment contracts/conditional payments, scheduled payments, regular withdrawal, forced savings, and betting systems. Our plan is to develop around its core functionality of creating payment contracts through the interactive User Interface, but to design the underlying API to be flexible for third party developers to expose other use cases.

Target users are individuals and organizations who have a need to create fund accounts with monetary assets that can be claimed by a different party after a certain condition is met. Users would log in to NOTAI using either their blockchain wallet or secret key. Sensitive information will only be kept on users own device and never on the service.

The use of a blockchain provides resilience to downsides of centralized systems such as data loss, bankruptcy, takeovers, or product discontinuation. More importantly, your decision is executed exactly as you want it without possible interference. In other words, your decision is final.

## Features

- Create funds for other accounts to receive, with the ability to specify claim conditions and timeout period.

- Claim funds which is addressed to you.

- Accessible from a web browser.

- Designed for both desktop and mobile platforms.

- Log in using personal wallet key.

## Process Flow

1. User A (creator) access the NOTAI service using their wallet.
2. User A (creator) creates a claimable fund with the following options:
   a. The asset and amount.
   b. The designated address.
   c. The condition for the fund to be claimed.
   d. The timeout duration.
3. User B (recipient) access the NOTAI service using their wallet.
4. User B (recipient) enters their claim ID and if the condition of the claim is net (for example, a set future date) then the funds will be transferred to the account specified in Step 2.

In the event that timeout specified in Step 2 has elapsed, User A (creator) can claim the account, where the funds will be transferred back to the original address used in Step 1.

## Technologies

The smart contract will be developed on NEO blockchain using N3 features. The supporting frontend application will be developed in TypeScript with ReactJs and NextJs framework. This frontend application will provide an interactive UX for end users via a web browser on desktop or mobile, and a robust API for developers to integrate with NOTAI.

## Development Roadmap

The initial development will focus on the proof-of-concept where we will only build upon basic features of N3, in particular fund transfer between accounts and assessing elapsed time through block height.

The first month plan is to develop a proof-of-concept, a minimum viable application which consist of the smart contract, frontend web application with the ability to login via the blockchain wallet and to create and claim payment contracts. On the initial stage, the only available condition is to set a future date which the payment can be claimed.

The following month will potentially expand the team to onboard additional developers and to plan a more holistic roadmap. Shortly after to perform a soft launch or beta of the service. Future stages of development will include integration with other events on chain and with external API which is crucial for users to set flexible condition of payment claims.

## Team

In the short term and for the initial proof of concept stage, there will be only one developer in the team, with the view to onboard two additional highly experienced developers once heavy development work has started.

## Business Model

While we have not yet gone through the details of a business model, what we feel might not be the best approach is to have a percentage fee where large claims will incur high fees to the fund creator. With this in mind, we are looking at the option of having a small fixed fee for each claimable balance that is successfully claimed. In this case, profitability would mean having to build on volume.
