---
title: "All Web3 Data Endpoints - Aptos"
sidebar_label: "Overview"
slug: "/web3-data-api/aptos/reference"
description: "Get started on Moralis Enterprise-Grade Web3 API Reference for Aptos."
sidebar_class_name: "sidebar-api-reference"
sidebar_position: 1
---

import Admonition from "@theme/Admonition";

<Admonition type="info" icon="🚨" title="Aptos: Confirmed Deprecation (60 Days Notice)">
  <p>
    Aptos mainnet and testnet will be discontinued on <strong>November 22nd</strong>, in line with the network’s deprecation of their v1 Indexers. We recommend exploring alternative providers, which you can find at <a href="https://aptos.dev/en/build/apis">Aptos APIs</a>.
  </p>
</Admonition>

This section contains a full list of all methods within the Aptos Web3 data.

## Full List of APIs by Category

Find your favorite method by selecting one of the following categories:

- [NFT API](#nft-api)
- [Coin API](#coin-api)
- [Wallet API](#wallet-api)
- [Accounts API](#accounts-api)
- [Events API](#events-api)
- [Transactions API](#transactions-api)
- [Blocks API](#blocks-api)

## NFT API

### Get NFTs

- [Get NFTs by wallet(s)](/web3-data-api/aptos/reference/get-nft-by-wallet-addresses)
- [Get NFTs by token ID hashes](/web3-data-api/aptos/reference/get-nfts-by-ids)
- [Get NFTs by collection](/web3-data-api/aptos/reference/get-nfts-by-collection)
- [Get NFTs by creator(s)](/web3-data-api/aptos/reference/get-nfts-by-creators)

### Get NFT Collections

- [Get NFT Collections](/web3-data-api/aptos/reference/get-nft-collections)
- [Get NFT collections by collection ID hashes](/web3-data-api/aptos/reference/get-nft-collections-by-ids)
- [Get NFT Collections by creator](/web3-data-api/aptos/reference/get-nft-collections-by-creator)

### Get NFT Owners

- [Get NFT owners by token(s)](/web3-data-api/aptos/reference/get-nft-owners-by-tokens)
- [Get NFT transfers by collection](/web3-data-api/aptos/reference/get-nft-owners-by-collection)
- [Get NFT owners of collection](/web3-data-api/aptos/reference/get-nft-owners-of-collection)

### Get NFT Transfers

- [Get NFT transfers by token(s)](/web3-data-api/aptos/reference/get-nft-transfers-by-ids)
- [Get NFT transfers by collection](/web3-data-api/aptos/reference/get-nft-transfers-by-collection)
- [Get NFT Transfers by creators](/web3-data-api/aptos/reference/get-nft-transfers-by-creators)
- [Get NFT transfers by wallet(s)](/web3-data-api/aptos/reference/get-nft-transfers-by-wallets)

## Coin API

### Get Coins

- [Get latest deployed coins](/web3-data-api/aptos/reference/get-latest-coins)
- [Get Coins by coin type hash](/web3-data-api/aptos/reference/get-coin-info-by-coin-type-hashes)
- [Get Coins by name](/web3-data-api/aptos/reference/get-coins-by-name-range)
- [Get Coins by symbol](/web3-data-api/aptos/reference/get-coins-by-symbol-range)
- [Get Coins by creator](/web3-data-api/aptos/reference/get-coins-by-creators)

### Get Coin Transfers

- [Get Coin transfers by wallet(s)](/web3-data-api/aptos/reference/get-coin-transfers-by-owner-addresses)
- [Get Coin transfers by block height(s)](/web3-data-api/aptos/reference/get-coin-transfers-by-block-heights)
- [Get Coin transfers by coin type](/web3-data-api/aptos/reference/get-coin-transfers-by-coin-type)

### Get Coin Balances

- [Get Coin top holders](/web3-data-api/aptos/reference/get-top-holders-by-coin)

## Wallet API

- [Get Coin balances by wallet(s)](/web3-data-api/aptos/reference/get-coin-balances-by-wallets)
- [Get historical Coin balances by wallet(s)](/web3-data-api/aptos/reference/get-historical-coin-balances-by-wallets)
- [Get NFT transfers by wallet(s)](/web3-data-api/aptos/reference/get-wallets-nft-transfers)

## Accounts API

- [Get account](/web3-data-api/aptos/reference/get-account)
- [Get account resources](/web3-data-api/aptos/reference/get-account-resources)
- [Get account modules](/web3-data-api/aptos/reference/get-account-modules)
- [Get account resource](/web3-data-api/aptos/reference/get-account-resource)
- [Get account module](/web3-data-api/aptos/reference/get-account-module)

### Events API

- [Get events by creation number](/web3-data-api/aptos/reference/get-events-by-creation-number)
- [Get events by event handle](/web3-data-api/aptos/reference/get-events-by-event-handle)

## Transactions API

- [Get transactions](/web3-data-api/aptos/reference/get-transactions)
- [Submit transaction](/web3-data-api/aptos/reference/submit-transaction)
- [Get transaction by hash](/web3-data-api/aptos/reference/get-transaction-by-hash)
- [Get transaction by version](/web3-data-api/aptos/reference/get-transaction-by-version)
- [Get account transactions](/web3-data-api/aptos/reference/get-account-transactions)
- [Submit batch transactions](/web3-data-api/aptos/reference/submit-batch-transactions)
- [Simulate transaction](/web3-data-api/aptos/reference/simulate-transaction)
- [Encode submission](/web3-data-api/aptos/reference/encode-submission)
- [Estimate gas price](/web3-data-api/aptos/reference/estimate-gas-price)

## Blocks API

- [Get block by height](/web3-data-api/aptos/reference/get-block-by-height)
- [Get block by version](/web3-data-api/aptos/reference/get-block-by-version)
