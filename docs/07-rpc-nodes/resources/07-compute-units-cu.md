---
title: "RPC Node Compute Units"
slug: "/rpc-nodes/reference/compute-units-cu"
sidebar_label: "Compute Units (CU)"
description: "Learn more about what Compute Units are and how they affect your pricing."
sidebar_position: 0
---

import NodeBanner from "@site/src/components/NodeBanner/NodeBanner.tsx";

# RPC Node Compute Units (CU)

All [Moralis plans](https://moralis.io/pricing) come with generous monthly limits on the number of requests you can make. The specific number of included requests depends on the plan you choose. Please check the [pricing page](https://moralis.io/pricing) for details on the different plans.

Some API requests are more computationally expensive than others. To ensure fair usage and pricing, heavier requests are assigned higher **Compute Unit (CU) weights**, meaning you only pay for what you use.

---

## What is a Compute Unit (CU)?

A **Compute Unit (CU)** is a measure of computational load assigned to different API requests. Each request is assigned a **CU Weight** and an optional **Archive CU Weight** (if you're querying historical data or archive nodes). The weight of the request will be deducted from your total available CUs.

---

## CU Pricing Overview

Each RPC method has a specific **CU Weight** that reflects the computational cost of the request. Heavier operations consume more CUs, and this affects the total number of requests you can make within your plan. Archive requests (queries made to archive nodes) are often more expensive, and thus, have a higher **Archive CU Weight**.

Here’s a detailed breakdown of the CU pricing for different standard RPC methods:

| RPC Method                                | CU Weight | Archive CU Weight (if applicable) |
| ----------------------------------------- | --------- | --------------------------------- |
| `eth_blockNumber`                         | 3         | 3                                 |
| `eth_call`                                | 3         | 12                                |
| `eth_chainId`                             | 3         | 3                                 |
| `eth_createAccessList`                    | 3         | 3                                 |
| `eth_estimateGas`                         | 5         | 5                                 |
| `eth_feeHistory`                          | 3         | 3                                 |
| `eth_gasPrice`                            | 3         | 3                                 |
| `eth_getBalance`                          | 3         | 12                                |
| `eth_getBlockByHash`                      | 12        | 12                                |
| `eth_getBlockByNumber`                    | 3         | 12                                |
| `eth_getBlockTransactionCountByHash`      | 12        | 12                                |
| `eth_getBlockTransactionCountByNumber`    | 3         | 12                                |
| `eth_getBlockReceipts`                    | 3         | 12                                |
| `eth_getCode`                             | 3         | 12                                |
| `eth_getLogs`                             | 12        | 12                                |
| `eth_getProof`                            | 3         | 12                                |
| `eth_getStorageAt`                        | 3         | 12                                |
| `eth_getTransactionByHash`                | 12        | 12                                |
| `eth_getTransactionByBlockHashAndIndex`   | 12        | 12                                |
| `eth_getTransactionByBlockNumberAndIndex` | 3         | 12                                |
| `eth_getTransactionCount`                 | 2         | 8                                 |
| `eth_getTransactionReceipt`               | 8         | 8                                 |
| `eth_getUncleByBlockHashAndIndex`         | 8         | 8                                 |
| `eth_getUncleByBlockNumberAndIndex`       | 2         | 8                                 |
| `eth_getUncleCountByBlockHash`            | 8         | 8                                 |
| `eth_getUncleCountByBlockNumber`          | 2         | 8                                 |
| `eth_maxPriorityFeePerGas`                | 2         | 2                                 |
| `eth_sendRawTransaction`                  | 3         | 3                                 |

---

## Extended RPC Methods and Compute Units

Moralis also provides **Extended RPC Methods** that offer more advanced data retrieval options. These methods are more computationally intensive, and therefore have higher CU weights associated with them. Below is a list of the available **Extended RPC Methods** and their corresponding CU weights:

| Custom Method                | Description                                | API Mapping                   | CU Weight |
| ---------------------------- | ------------------------------------------ | ----------------------------- | --------- |
| `eth_getTransactions`        | Get native transactions by wallet address. | `getWalletTransactions`       | 15        |
| `eth_getDecodedTransactions` | Get wallet history by wallet address.      | `getWalletHistory`            | 30        |
| `eth_getTokenBalances`       | Get ERC20 token balances by wallet.        | `getWalletTokenBalancesPrice` | 25        |
| `eth_getTokenPrice`          | Get ERC20 token price by token address.    | `getTokenPrice`               | 25        |
| `eth_getTokenMetadata`       | Get ERC20 token metadata by token address. | `getTokenMetadata`            | 8         |
| `eth_getNFTBalances`         | Get NFTs by wallet address.                | `getWalletNFTs`               | 20        |
| `eth_getNFTCollections`      | Get NFT collections by wallet address.     | `getWalletNFTCollections`     | 20        |

---

## Archive Nodes and CU Weight

**Archive Nodes** store historical blockchain data that extends far beyond the most recent blocks. Because of the additional computational and storage resources required to maintain archive nodes, querying these nodes comes with a higher **Archive CU Weight**. If your use case involves accessing deep historical data, be mindful of the increased CU cost.

---

## Optimize Your CU Usage

To maximize your CU allocation, you can:

- **Limit Block Range**: The default block range for queries is 100 blocks. Requesting larger block ranges or querying archive data will result in higher CU consumption.
- **Monitor Usage**: Regularly track your CU usage in the Moralis dashboard to avoid hitting your rate limits unexpectedly.

---

## Batch Requests

Batching allows you to combine multiple RPC requests into a single API call, improving efficiency and user experience by reducing the number of HTTP requests. Note that batching does not reduce the total CU cost, as each request within the batch consumes the same amount of CUs as individual requests. The maximum batch size is 20 requests per call.

### How It Works

Instead of sending separate requests, you can send an array of JSON-RPC request objects in a single HTTP request. The server processes each request in the batch and returns an array of responses, maintaining the same order as the requests. Each request in the batch must include the `method`, `params`, and `id` fields, as per the JSON-RPC 2.0 specification.

### Example

Below is an example of a batch request and its corresponding response:

**Batch Request:**

```
[
  {
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": ["0x1234567890abcdef1234567890abcdef12345678", "latest"],
    "id": 1
  },
  {
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045", "latest"],
    "id": 2
  },
  {
    "jsonrpc": "2.0",
    "method": "eth_getBlockByNumber",
    "params": ["0x1", true],
    "id": 3
  }
]
```

**Batch Response:**

```
[
  {
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x21e1b40ac49d98bdaee"
  },
  {
    "jsonrpc": "2.0",
    "id": 2,
    "result": "0xf1863477e42429b41b2"
  },
  {
    "jsonrpc": "2.0",
    "id": 3,
    "result": {
      "difficulty": "0x3ff800000",
      "extraData": "0x476574682f76312e302e302f6c696e75782f676f312e342e32",
      "gasLimit": "0x1388",
      "gasUsed": "0x0",
      "hash": "0x88e96d4537bea4d9c05d12549907b32561d3bf31f45aae734cdc119f13406cb6",
      "logsBloom": "0x000000000000000000000000000000000000000000000000000000000",
      "miner": "0x05a56e2d52c817161883f50c441c3228cfe54d9f",
      "mixHash": "0x969b900de27b6ac6a67742365dd65f55a0526c41fd18e1b16f1a1215c2e66f59",
      "nonce": "0x539bd4979fef1ec4",
      "number": "0x1",
      "parentHash": "0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3",
      "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
      "size": "0x219",
      "stateRoot": "0xd67e4d450343046425ae4271474353857ab860dbc0a1dde64b41b5cd3a532bf3",
      "timestamp": "0x55ba4224",
      "totalDifficulty": "0x7ff800000",
      "transactions": [],
      "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      "uncles": []
    }
  }
]
```

In this example:
- The first two requests fetch the balance of two different Ethereum addresses.
- The third request retrieves details of block number 1, excluding full transaction objects (`false` parameter).
- The response array contains the results for each request, identified by their respective id values.


## Need Higher Limits?

If you find that your use case requires more CUs than your current plan offers, consider upgrading to a higher plan or reaching out to our support team for custom solutions.

For more information on rate limits and usage caps, visit our [FAQ](/rpc-faqs).

---
