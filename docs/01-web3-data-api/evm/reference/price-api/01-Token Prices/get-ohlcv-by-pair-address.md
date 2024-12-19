---
sidebar_position: 1
sidebar_label: Get OHLCV by Pair Address
slug: /web3-data-api/evm/reference/price/get-ohlcv-by-pair-address
---

import ApiReference from "@site/src/components/ApiReference";
import config from "../../../../../configs/api-reference/configs.json";
import SolanaApiBanner from "@site/src/components/SolBanner/SolApiBanner.tsx";

# Get OHLCV by Pair Address

import ChartWidgetBanner from "@site/src/components/ChartWidgetBanner/ChartWidgetBanner.tsx";

<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch", // Ensures both banners have the same width
  }}
>
  <div style={{ width: "100%" }}>
    <ChartWidgetBanner />
  </div>
  <div style={{ width: "100%" }}>
    <SolanaApiBanner
      customTitle="Looking for OHLCV data on Solana?"
      customText="Access OHLCV data by pair address on Solana using our API."
      customButtonText="Explore Solana API"
      customButtonLink="/web3-data-api/solana/reference/get-ohlcv-by-pair-address"
    />
  </div>
</div>

<ApiReference {...config.token.getPairCandlesticks} />