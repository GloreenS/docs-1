---
id: welcome
title: Welcome
slug: /
---

# Welcome to the Casper Network

This article provides an overview of the Casper project.

## What is Casper? {#what-is-casper}

Casper is a new Turing-complete smart-contracting platform, backed by a Proof-of-Stake (PoS) consensus algorithm and WebAssembly (WASM). The network is a permissionless, decentralized, public blockchain.

The network's consensus protocol is called [Highway](https://arxiv.org/pdf/2101.02159.pdf), and it has several benefits over classic Byzantine Fault Tolerant (BFT) consensus protocols. First, Highway allows networks to reach higher thresholds of _finality_, meaning that more blocks are finalized, and validators agree to add them to the blockchain. Second, the protocol achieves flexibility by expressing block finality in ways not possible in BFT models. This protocol is built on Vlad Zamfir's [correct-by-construction (CBC) Casper](https://github.com/cbc-casper/cbc-casper-paper) research.

Additionally, the Casper Network is optimized for enterprise and developer adoption. While leveraging blockchain technology, the network seeks to accelerate business operations via unique features like predictable network fees, upgradeable contracts, on-chain governance, privacy flexibility, and developer-friendly languages.

Casper also solves the scalability trilemma. Notably, the network is optimized for security, decentralization, and high throughput. All this is achieved while evolving to provide leading solutions for open-source projects and enterprises.

## Why choose Casper? {#why-choose-casper}

Casper has core features and strengths that enable developers and enterprises to reap the benefits of blockchain technology.

### Upgradeable Contracts {#upgradeable-contracts}

Casper allows the direct upgrading of on-chain smart contracts, eliminating the need for complex migration processes and making it easy for developers to correct smart contract vulnerabilities.

### Developer-Friendly Language {#developer-friendly-language}

Casper Network's development ecosystem is designed to support WebAssembly, rather than being written in proprietary languages like Solidity. This feature simplifies the development path for enterprises and development teams that want to build on the Casper Network.

:::note

Note Rust is the primary programming language for smart contracts on the Casper blockchain because of its good support for compilation to wasm. However, the platform does not make assumptions about the source language and supports libraries facilitating contract development in other programming languages having wasm as a compile target.

:::

### Account Management {#account-management}

Other essential features include an account permissions model that allows the recovery of lost keys and a permissions model to securely share state between accounts and contracts (without expensive cryptographic checks).

### Predictable Network Fees {#predictable-network-fees}

Casper seeks to eliminate volatility and improve developer and enterprise experiences by establishing transparent, consistent, and predictable gas prices. This feature seeks to promote active and diverse network behaviour.

## How does Casper work? {#how-does-casper-work}

Casper relies on a group of validators to verify transactions and uphold the network. Unlike Proof-of-Work networks, which need to centralize validators for economies of scale, Casper allows for the geographical decentralization of validators. Casper validators verify transactions based on staked tokens and receive CSPR rewards for participating in the PoS consensus mechanism. CSPR is the native token on the Casper Network.

## Where can I learn more? {#where-can-i-learn-more}

Follow the links below to learn more about the Casper Network.

| Category | Content |
| --- | --- |
| [How To's](workflow/index.md) | Guides for interacting with the Casper Network |
| [Developers](dapp-dev-guide/index.md) | Get started with smart contract development on the Casper blockchain in AssemblyScript or Rust Node Operators Run node infrastructure on the Casper Network |
| [Design](design/index.md) | Understand the architecture of the Casper Network, including network communication, execution semantics, account management, block structure, global state, serialization, unforgeable references, and tokens |
| [Economics](economics/index.md) | Conceptualize Casper's economic activity by understanding consensus, runtime, ecosystem, and the macroeconomy |
| [Staking Guide](staking/index.md) | Participate in the protocol by staking CSPR tokens with a validator in the Casper Network |
| [Glossary](glossary/index.md) | Explore key definitions in the context of the Casper Network |
| [FAQ](faq/index.md) | Find answers regarding the Casper Network, CasperLabs, and the CSPR token sale Changelog Review past technical releases and changelogs for the Casper Network |

#### Disclaimer {#disclaimer}

By accepting this CasperLabs Tech Spec (this “Whitepaper”), each recipient hereof acknowledges and agrees that is not authorised to, and may not, forward or deliver this Whitepaper, electronically or otherwise, to any other person or reproduce this Whitepaper in any manner whatsoever. Any forwarding, distribution or reproduction of this Whitepaper in whole or in part is unauthorised. Failure to comply with this directive may result in a violation of applicable laws of any affected or involved jurisdiction.

Nothing in this Whitepaper constitutes an offer to sell, or a solicitation to purchase, the tokens native to the Casper blockchain (“CSPR”). In any event, were this Whitepaper to be deemed to be such an offer or solicitation, no such offer or solicitation is intended or conveyed by this Whitepaper in any jurisdiction where it is unlawful to do so, where such an offer or solicitation would require a license or registration, or where such an offer or solicitation is subject to restrictions. In particular, any CSPR to be issued have not been, and, as of the date of issuance of this Whitepaper, are not intended to be, registered under the securities or similar laws of any jurisdiction, whether or not such jurisdiction considers the CSPR to be a security or similar instrument, and specifically, have not been, and, as of the date of issuance of this Whitepaper are not intended to be, registered under the U.S. Securities Act of 1933, as amended, or the securities laws of any state of the United States of America or any other jurisdiction and may not be offered or sold in any jurisdiction where to do so would constitute a violation of the relevant laws of such jurisdiction.

This Whitepaper constitutes neither a prospectus according to Art. 652a of the Swiss Code of Obligations (the “CO”) or Art. 1156 CO nor a prospectus or basic information sheet according to the Swiss Financial Services Act (the “FinSA”) nor a listing prospectus nor a simplified prospectus according to Art. 5 of the Swiss Collective Investment Schemes Act (the “CISA”) nor any other prospectus according to CISA nor a prospectus under any other applicable laws.

The CSPR are not expected to be instruments in an offer and sale which are subject to the jurisdiction or oversight of the U.S. Securities Exchange Commission (the “SEC”). In any event, however, CSPR have not been approved or disapproved by, and are not expected to be approved or disapproved by, the SEC nor by the securities regulatory authority of any state of the United States of America or of any other jurisdiction, and neither the SEC nor any such securities regulatory authority has passed, or is expected to pass, upon the accuracy or adequacy of this Whitepaper.

The distribution of this Whitepaper and the purchase, holding, and/or disposal of CSPR may be restricted by law in certain jurisdictions. Persons reading this Whitepaper should inform themselves as to (i) the possible tax consequences, (ii) the legal and regulatory requirements, and (iii) any foreign exchange restrictions or exchange control requirements, which they might encounter under the laws of the countries of their citizenship, residence or domi-cile and which might be relevant to the purchase, holding or disposal of CSPR. No action has been taken to authorise the distribution of this Whitepaper in any jurisdiction in which such authorisation might be required.

No action has been or is intended to be taken by CasperLabs Networks AG and/or any of its affiliates in any jurisdiction that would or is intended to, permit a public sale or offering of any CSPR, or possession or distribution of this Whitepaper (in preliminary, proof or final form) or any other sale, offering or publicity material relating to the CSPR, in any country or jurisdiction where action for that purpose is required. Each recipient of this Whitepaper is reminded that it has received this Whitepaper on the basis that it is a person into whose possession this Whitepaper may be lawfully delivered in accordance with the laws of the jurisdiction in which it is located and/or bound and it may not nor is it authorised to deliver this document, electronically or otherwise, to any other person. If the recipient receives this document by e-mail, then its use of this e-mail is at its own risk and it is the recipient’s responsibility to take precautions to ensure that such e-mail is free from viruses and other items of a destructive nature.

#### Preliminary Nature of this Whitepaper {#preliminary-nature-of-this-whitepaper}

This Whitepaper is a draft and the information set out herein is of a preliminary nature. Consequently, neither CasperLabs Networks AG nor any of its affiliates assumes any responsibility that the information set out herein is final or correct and each of the foregoing disclaims, to the fullest extent permitted by applicable law, any and all liability whether arising in tort, contract or otherwise in respect of this Whitepaper. Neither this Whitepaper nor anything contained herein shall form the basis of or be relied on in connection with or act as an inducement to enter into any contract or commitment whatsoever. Recipients should note that the final structuring of CSPR and the Casper blockchain is subject to ongoing technical, legal, regulatory and tax considerations and each is, therefore, subject to material changes. In particular, neither the applicability nor the non-applicability of Swiss financial market regulations on the CSPR sale has not been confirmed by the Swiss Financial Market Supervisory Authority (“FINMA”). CasperLabs Networks AG and all its affiliates reserve the right to not assist in the completion of the software underlying CSPR and the CasperLabs blockchain, to not participate in the issuance or creation of CSPR or to change the structure of CSPR and/or the Casper blockchain for any reason, each at its sole discretion.

#### Forward-Looking Statements {#forward-looking-statements}

This Whitepaper includes “forward-looking statements”, which are all statements other than statements of historical facts included in this Whitepaper. Words like “believe”, “anticipate”, “expect”, “project”, “estimate”, “predict”, “intend”, “target”, “assume”, “may”, “might”, “could”, “should”, “will” and similar expressions are intended to identify such forward-looking statements. Such forward-looking statements involve known and unknown risks, uncertainties and other factors, which may cause the actual functionality, performance or features of the Casper blockchain and/or CSPR to be materially different from any future functionality, performance or features expressed or implied by such forward-looking statements. Such forward-looking statements are based on numerous assumptions regarding the CasperLabs Networks AG’s and/or any of its affiliates’ present and future expectations regarding the development of the Casper blockchain and the associated software.

These forward-looking statements speak only as of the date of this Whitepaper. CasperLabs Networks AG and its affiliates expressly disclaim any obligation or undertaking to release any updates of or revisions to any forward-looking statement contained herein to reflect any change in CasperLabs Networks AG’s and/or any of its affiliates’ expectations with regard thereto or any change in events, conditions or circumstances on which any such statement is based.

#### Risk Factors {#risk-factors}

-   Furthermore, by accepting this Whitepaper, the recipient of hereof (the “Recipient”) acknowledges and agrees that it understands the inherent risks associated with blockchain and distributed ledger technology, tokens and cryptocurrencies in general and the CSPR in particular, including, but not limited to, those outlined hereinafter.

-   Risks associated with CasperLabs Networks AG’s experience: the Recipient is aware that CasperLabs Networks AG and its affiliates constitute a start-up group of companies. Inability of such companies to manage their affairs, including any failure to attract and retain appropriate personnel, could affect the completion and functionality of the Casper blockchain.

-   Risks associated with CSPR relative value: the Recipient understands and accepts that a purchaser of CSPR may experience financial losses relative to other assets, including fiat currency and/or any other cryptocurrency (including any cryptocurrency used to acquire CSPR). Potential purchasers and holders of CSPR are urged to carefully review this Whitepaper and assess and understand the risk factors relating to the CSPR and the Casper blockchain before acquiring CSPR (when and if CSPR become available).

-   Risks associated with (intellectual) property rights: the Recipient understands and accepts that, due to a lack of originality of the software and to the immaterial character of the CSPR, there may be no title of ownership in and to the intellectual property rights relating to CSPR.

-   Risks associated with blockchain: the Recipient understands and accepts that the smart contract, the underlying software application and software platform (i.e. the Casper blockchain) is still in an early development stage and unproven. The Recipient understands and accepts that there is no warranty that the process for creating the CSPR and/or the Casper blockchain will be uninterrupted or error-free and acknowledges that there is an inherent risk that the software could contain weaknesses, vulnerabilities or bugs causing, inter alia, the complete loss of CSPR. The Recipient understands and accepts that, after launch of the Casper blockchain, the smart contract and/or underlying protocols and/or the Casper blockchain and/or any other software involved may either delay and/or not execute a contribution due to the overall contribution volume, mining attacks and/or similar events.

-   Risk of weaknesses in the field of cryptography: the Recipient understands and accepts that cryptography is a technology that evolves relatively fast over time. At the same time, methods and tools to decrypt, access and/or manipulate data stored on a distributed ledger or blockchain are highly likely to progress in parallel and in addition, new technological developments such as quantum computers may pose as of now unpredictable risks to the CSPR and the Casper blockchain that could increase the risk of theft or loss of CSPR (if and when CSPR are created and/or issued).

-   Regulatory risks: the Recipient understands and accepts that it is possible that certain jurisdictions will apply existing regulations on, or introduce new regulations addressing, distributed ledger technology and/or blockchain technology based applications, which may be contrary to the current setup of the smart contract or the CasperLabs Networks AG project and which may, inter alia, result in substantial modifications of the smart contract and/or the CasperLabs Networks AG project, including its termination and the loss of the CSPR, if and when created and/or issued, or entitlements to receive CSPR, for the Recipient.

-   Risks associated with abandonment / lack of success: the Recipient understands and accepts that the creation of the CSPR and the development of the Casper blockchain as well as the CasperLabs Networks AG project may be abandoned for a number of reasons, including lack of interest from the public, lack of funding, lack of prospects (e.g. caused by competing projects) and legal, tax or regulatory considerations. The Recipient therefore understands that there is no assurance that, even if the CSPR/CasperLabs blockchain project is partially or fully developed and launched, the Recipient will receive any benefits through the CSPR held by it (if and when created and/or issued).

-   Risks associated with a loss of private key: the Recipient understands and accepts that CSPR, if and when created and/or issued, will only be accessed by using a wallet technically compatible with CSPR and with a combination of the Recipient’s account information (address) and private key, seed or password. The Recipient understands and accepts that if its private key or password gets lost or stolen, the CSPR associated with the Recipient’s account (address) will be unrecoverable and will be permanently lost.

-   Risks associated with wallets: the Recipient understands and accepts that CasperLabs Networks AG or any of its affiliates, employees, partners or advisors are in no way responsible for the wallet to which any CSPR are transferred. The Recipient understands and agrees that it is solely responsible for the access and security of its wallet, for any security breach of its wallet and/or with any loss of CSPR resulting from its wallet service provider, including any termination of the service by the wallet provider and/or bankruptcy of the wallet provider.

-   Risks associated with theft/hacks: the Recipient understands and accepts that the smart contract, the website, the underlying software application and software platform (i.e. the Casper blockchain), during its development and after its launch, may be exposed to attacks by hackers or other individuals that could result in an inability to launch the Casper blockchain or the theft or loss of CSPR. Any such event could also result in the loss of financial and other support of the CasperLabs Networks AG project impacting the ability to develop the CasperLabs Networks AG project and Casper blockchain.

-   Risks associated with mining attacks: the Recipient understands and accepts that, as with other cryptocurrencies and tokens, if and when launched, the Casper blockchain is susceptible to attacks relating to validators. Any successful attack presents a risk to the smart contract, expected proper execution and sequencing of transactions, and expected proper execution and sequencing of contract computations.

-   Risks associated with a lack of consensus: the Recipient understands and accepts that the network of validators will be ultimately in control of the genesis block and future blocks and that there is no warranty or assurance that the network of validators will perform their functions and reach proper consensus and allocate the CSPR to the Recipient as proposed by any terms. The Recipient further understands that a majority of the validators could agree at any point to make changes to the software and/or smart contracts and to run the new version of the software and/or smart contracts. Such a scenario could lead to the CSPR losing intrinsic value.

-   Risks associated with liquidity of CSPR: the Recipient understands and accepts that with regard to the CSPR, if and when created and/or issued, no market liquidity may be guaranteed and that the value of CSPR relative to other assets, including fiat currency and/or any other cryptocurrency (including any cryptocurrency used to acquire CSPR) over time may experience extreme volatility or depreciate in full (including to zero) resulting in loss that will be borne exclusively by the Recipient.

-   Risks associated with forking: the Recipient understands and accepts that hard and soft forks as well as similar events may, inter alia, lead to the creation of new or competing tokens to the CSPR, adversely affect the functionality, convertibility or transferability or result in a full or partial loss of units or reduction (including reduction to zero) of value of the Recipient’s CSPR (if and when created and/or issued).
