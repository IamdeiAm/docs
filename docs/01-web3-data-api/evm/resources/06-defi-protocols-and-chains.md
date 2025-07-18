---
title: "Supported DeFi Protocols"
slug: "/web3-data-api/evm/defi-protocols-and-chains"
sidebar_position: 5
---

import ApiBanner from "@site/src/components/ApiBanner/ApiBanner.tsx";

This article provides a comprehensive and continually expanding list of supported DeFi protocols and chains for the following endpoints:

- [DeFi Protocols by Wallet](https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getDefiSummary)
- [DeFi Positions by Wallet](https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getDefiPositionsSummary)
- [Get Detailed DeFi Positions by Wallet and Protocol](https://deep-index.moralis.io/api-docs-2.2/#/Wallets/getDefiPositionsByProtocol)

## Supported Protocols & Chains

| Protocol              | Query Parameter  | Supported Chains                                                                                |
| --------------------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| Aave v2               | `aave-v2`        | - Ethereum <br/>- Polygon                                                                       |
| Aave v3               | `aave-v3`        | - Arbitrum <br/>- Base <br/>- Ethereum <br/>- Polygon                                                           |
| Eigenlayer            | `eigenlayer`     | - Ethereum                                                                                      |
| Etherfi\*             | `etherfi`        | - Arbitrum<br/>- Base<br/>- Binance<br/>- Ethereum<br/>- Linea<br/>- Optimism                   |
| FraxSwap v1           | `fraxswap-v1`    | - BSC<br/>- Ethereum<br/>- Polygon                                                              |
| FraxSwap v2           | `fraxswap-v2`    | - BSC<br/>- Ethereum<br/>- Polygon                                                              |
| Lido                  | `lido`           | - Ethereum                                                                                      |
| MakerDAO              | `makerdao`       | - Ethereum                                                                                      |
| Pancakeswap v2        | `pancakeswap-v2` | - Arbitrum <br/>- Base <br/>- BSC <br/>- Ethereum<br/>- Linea                                   |
| Pancakeswap v3        | `pancakeswap-v3` | - Arbitrum <br/>- Base <br/>- BSC <br/>- Ethereum<br/>- Linea                                   |
| Pendle                | `pendle`         | - Arbitrum <br/>- Ethereum                                                                                      |
| QuickSwap v2          | `quickswap-v2`   | - Polygon                                                                                       |
| QuickSwap v3          | `quickswap-v3`   | - Polygon                                                                                       |
| Rocket Pool           | `rocketpool`     | - Arbitrum<br/>- Ethereum<br/>- Base<br/>- Polygon<br/>- Optimism                               |
| Spark                 | `sparkfi`        | - Ethereum                                                                                      |
| SushiSwap v2          | `sushiswap-v2`   | - Arbitrum <br/>- Base <br/>- BSC <br/>- Ethereum <br/>- Polygon                                                |
| Uniswap v2\*\*        | `uniswap-v2`     | - Arbitrum<br/>- Base <br/>- BSC <br/>- Ethereum <br/>- Linea <br/>- Polygon        |
| Uniswap v3            | `uniswap-v3`     | - Arbitrum <br/>- Avalanche <br/>- Base <br/>- BSC<br/> - Ethereum<br/>- Optimism<br/>- Polygon |

_\*Etherfi currently only supports Staking positions. Yield positions are not yet supported._

_\*\*By default, we track all forked Uniswap v2 protocols. If a particular protocol has not yet been decoded, it will appear as `unknown` within the API responses. Please reach out to our support team, and we will prioritize decoding these protocols._

Many more protocols are on the way as we prioritize the top protocols and chains based on Total Value Locked (TVL).
