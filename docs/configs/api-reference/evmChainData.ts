const chainData = [
  {
    name: "Ethereum Mainnet",
    logo: "/img/content/eth.png",
    type: "Mainnet",
    chainID: "0x1 (1)",
    evmChain: "EvmChain.ETHEREUM",
    isNew: false,
    hasSpamDetection: true,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: true,
      entityApi: true,
      blockchainApi: true,
      pnlApi: true,
      tokenPrices: true,
      internalTxs: true,
      nftTrades: true,
      nftPrices: true,
      nftFloorPrices: true,
      queryParams: ["eth", "0x1"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "12",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/eth/",
        "https://site2.moralis-nodes.com/eth/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Ethereum Sepolia",
    logo: "/img/content/eth.png",
    type: "Testnet",
    chainID: "0xaa36a7 (11155111)",
    evmChain: "EvmChain.SEPOLIA",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["sepolia", "0xaa36a7"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "18",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/sepolia/",
        "https://site2.moralis-nodes.com/sepolia/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Ethereum Holesky",
    logo: "/img/content/eth.png",
    type: "Testnet",
    chainID: "0x4268 (17000)",
    evmChain: "EvmChain.HOLESKY",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["holesky", "0x4268"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "18",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/holesky/",
        "https://site2.moralis-nodes.com/holesky/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Polygon Mainnet",
    logo: "/img/content/polygon.png",
    chainID: "0x89 (137)",
    evmChain: "EvmChain.POLYGON",
    isNew: false,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: true,
      entityApi: true,
      blockchainApi: true,
      pnlApi: true,
      tokenPrices: true,
      internalTxs: true,
      nftTrades: true,
      nftPrices: true,
      nftFloorPrices: false,
      queryParams: ["polygon", "0x89"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/polygon/",
        "https://site2.moralis-nodes.com/polygon/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Polygon Amoy",
    logo: "/img/content/polygon.png",
    type: "Testnet",
    chainID: "0x13882 (80002)",
    evmChain: "EvmChain.POLYGON_AMOY",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["amoy", "0x13882"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/amoy/",
        "https://site2.moralis-nodes.com/amoy/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Binance Smart Chain Mainnet",
    logo: "/img/content/bsc.png",
    chainID: "0x38 (56)",
    evmChain: "EvmChain.BSC",
    isNew: false,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: true,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: true,
      internalTxs: true,
      nftTrades: true,
      nftPrices: true,
      nftFloorPrices: false,
      queryParams: ["bsc", "0x38"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "18",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/bsc/",
        "https://site2.moralis-nodes.com/bsc/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Binance Smart Chain Testnet",
    logo: "/img/content/bsc.png",
    chainID: "0x61 (97)",
    evmChain: "EvmChain.BSC_TESTNET",
    isNew: false,
    type: "Testnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["bsc testnet", "0x61"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "18",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/bsc-testnet/",
        "https://site2.moralis-nodes.com/bsc-testnet/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Arbitrum",
    logo: "/img/content/arbitrum.png",
    chainID: "0xa4b1 (42161)",
    evmChain: "EvmChain.ARBITRUM",
    isNew: false,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: true,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: true,
      internalTxs: true,
      nftTrades: true,
      nftPrices: true,
      nftFloorPrices: false,
      queryParams: ["arbitrum", "0xa4b1"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "18",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/arbitrum/",
        "https://site2.moralis-nodes.com/arbitrum/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Arbitrum Sepolia",
    logo: "/img/content/arbitrum.png",
    type: "Testnet",
    chainID: "0x66eee (421614)",
    evmChain: "EvmChain.ARBITRUM_SEPOLIA",
    isNew: false,
    evmApi: {
      supported: false,
      reason: "Unsupported",
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      queryParams: [],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "600",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/arbitrum-sepolia/",
        "https://site2.moralis-nodes.com/arbitrum-sepolia/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Unsupported",
    },
  },
  {
    name: "Base",
    logo: "/img/content/base.png",
    chainID: "0x2105 (8453)",
    evmChain: "EvmChain.BASE",
    isNew: false,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: true,
      entityApi: true,
      blockchainApi: true,
      pnlApi: true,
      tokenPrices: true,
      internalTxs: true,
      nftTrades: true,
      nftPrices: true,
      nftFloorPrices: true,
      queryParams: ["base", "0x2105"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/base/",
        "https://site2.moralis-nodes.com/base/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Base Sepolia",
    logo: "/img/content/base.png",
    type: "Testnet",
    chainID: "0x14a34 (84532)",
    evmChain: "EvmChain.BASE_SEPOLIA",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["base sepolia", "0x14a34"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/base-sepolia/",
        "https://site2.moralis-nodes.com/base-sepolia/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Optimism",
    logo: "/img/content/optimism.png",
    chainID: "0xa (10)",
    evmChain: "EvmChain.OPTIMISM",
    isNew: false,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: true,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: true,
      internalTxs: true,
      nftTrades: true,
      nftPrices: true,
      nftFloorPrices: false,
      queryParams: ["optimism", "0xa"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "500",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/optimism/",
        "https://site2.moralis-nodes.com/optimism/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Optimism Sepolia",
    logo: "/img/content/optimism.png",
    type: "Testnet",
    chainID: "0xaa37dc (11155420)",
    evmChain: "EvmChain.OPTIMISM_SEPOLIA",
    isNew: false,
    evmApi: {
      supported: false,
      reason: "Unsupported",
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      queryParams: [],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "600",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/optimism-sepolia/",
        "https://site2.moralis-nodes.com/optimism-sepolia/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Unsupported",
    },
  },
  {
    name: "Linea",
    logo: "/img/content/linea.png",
    chainID: "0xe708 (59144)",
    evmChain: "EvmChain.LINEA",
    isNew: false,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: true,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: true,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["linea", "0xe708"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/linea/",
        "https://site2.moralis-nodes.com/linea/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Linea Sepolia",
    logo: "/img/content/linea.png",
    type: "Testnet",
    chainID: "0xe705 (59141)",
    evmChain: "EvmChain.LINEA_SEPOLIA",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["linea sepolia", "0xe705"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/linea-sepolia/",
        "https://site2.moralis-nodes.com/linea-sepolia/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Avalanche",
    logo: "/img/content/avalanche.png",
    type: "Mainnet",
    chainID: "0xa86a (43114)",
    evmChain: "EvmChain.AVALANCHE",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: true,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: true,
      internalTxs: true,
      nftTrades: true,
      nftPrices: true,
      nftFloorPrices: false,
      queryParams: ["avalanche", "0xa86a"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/avalanche/",
        "https://site2.moralis-nodes.com/avalanche/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Fantom Mainnet",
    logo: "/img/content/fantom.png",
    type: "Mainnet",
    chainID: "0xfa (250)",
    evmChain: "EvmChain.FANTOM",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["fantom", "0xfa"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: false,
      reason: "Unsupported",
      urls: [],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Fantom Testnet",
    logo: "/img/content/fantom.png",
    type: "Testnet",
    chainID: "0xfa2 (4002)",
    evmChain: "EvmChain.FANTOM_TESTNET",
    isNew: false,
    evmApi: {
      supported: false,
      reason: "Unsupported",
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      queryParams: [],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: false,
      reason: "Unsupported",
      urls: [],
    },
    authApi: {
      supported: false,
      reason: "Unsupported",
    },
  },
  {
    name: "Cronos Mainnet",
    logo: "/img/content/cronos.png",
    chainID: "0x19 (25)",
    evmChain: "EvmChain.CRONOS",
    isNew: false,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: false,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["cronos", "0x19"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: false,
      reason: "Unsupported",
      erc20Swaps: true,
      nftTrades: false,
    },
    rpcNodes: {
      supported: false,
      reason: "Unsupported",
      urls: [],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Gnosis",
    logo: "/img/content/gnosis.png",
    chainID: "0x64 (100)",
    evmChain: "EvmChain.GNOSIS",
    isNew: false,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: false,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: true,
      internalTxs: false,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["gnosis", "0x64"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: false,
      reason: "Unsupported",
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/gnosis/",
        "https://site2.moralis-nodes.com/gnosis/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Gnosis Chiado",
    logo: "/img/content/gnosis.png",
    type: "Testnet",
    chainID: "0x27d8 (10200)",
    evmChain: "EvmChain.GNOSIS_TESTNET",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: false,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: false,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["gnosis testnet", "0x27d8"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: false,
      reason: "Unsupported",
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/gnosis-testnet/",
        "https://site2.moralis-nodes.com/gnosis-testnet/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Chiliz Mainnet",
    logo: "/img/content/chiliz.png",
    chainID: "0x15b38 (88888)",
    evmChain: "EvmChain.CHILIZ",
    isNew: false,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["chiliz", "0x15b38"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: false,
      reason: "Unsupported",
      urls: [],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Chiliz Testnet",
    logo: "/img/content/chiliz.png",
    type: "Testnet",
    chainID: "0x15b32 (88882)",
    evmChain: "EvmChain.CHILIZ_TESTNET",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["chiliz testnet", "0x15b32"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: false,
      reason: "Unsupported",
      urls: [],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Moonbeam",
    logo: "/img/content/moonbeam.png",
    chainID: "0x504 (1284)",
    evmChain: "EvmChain.MOONBEAM",
    isNew: false,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: true,
      internalTxs: false,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["moonbeam", "0x504"],
    },
    streamsApi: {
      supported: true,
      internalTxs: false,
      reason: "Unsupported",
      blockConfirmations: "100",
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/moonbeam/",
        "https://site2.moralis-nodes.com/moonbeam/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Moonriver",
    logo: "/img/content/moonbeam.png",
    type: "Testnet",
    chainID: "0x505 (1285)",
    evmChain: "EvmChain.MOONRIVER",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: false,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["moonriver", "0x505"],
    },
    streamsApi: {
      supported: true,
      internalTxs: false,
      reason: "Unsupported",
      blockConfirmations: "100",
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/moonriver/",
        "https://site2.moralis-nodes.com/moonriver/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Moonbase",
    logo: "/img/content/moonbeam.png",
    type: "Testnet",
    chainID: "0x507 (1287)",
    evmChain: "EvmChain.MOONBASE",
    isNew: false,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: false,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["moonbase", "0x507"],
    },
    streamsApi: {
      supported: true,
      internalTxs: false,
      reason: "Unsupported",
      blockConfirmations: "100",
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/moonbase/",
        "https://site2.moralis-nodes.com/moonbase/",
      ],
    },
    authApi: {
      supported: true,
    },
  },
  {
    name: "Blast",
    logo: "/img/content/blast.png",
    type: "Mainnet",
    chainID: "0x13e31 (81457)",
    evmChain: "EvmChain.BLAST",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/blast/",
        "https://site2.moralis-nodes.com/blast/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "Blast Sepolia",
    logo: "/img/content/blast.png",
    type: "Testnet",
    chainID: "0xa0c71fd (168587773)",
    evmChain: "EvmChain.BLAST_SEPOLIA",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/blast-sepolia/",
        "https://site2.moralis-nodes.com/blast-sepolia/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "zkSync",
    logo: "/img/content/zksync.png",
    type: "Mainnet",
    chainID: "0x144 (324)",
    evmChain: "EvmChain.ZKSYNC",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/zksync/",
        "https://site2.moralis-nodes.com/zksync/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "zkSync Sepolia",
    logo: "/img/content/zksync.png",
    type: "Testnet",
    chainID: "0x12c (300)",
    evmChain: "EvmChain.ZKSYNC_SEPOLIA",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/zksync-sepolia/",
        "https://site2.moralis-nodes.com/zksync-sepolia/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "Mantle",
    logo: "/img/content/mantle.png",
    type: "Mainnet",
    chainID: "0x1388 (5000)",
    evmChain: "EvmChain.MANTLE",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/mantle/",
        "https://site2.moralis-nodes.com/mantle/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "Mantle Sepolia",
    logo: "/img/content/mantle.png",
    type: "Testnet",
    chainID: "0x138b (5003)",
    evmChain: "EvmChain.MANTLE_SEPOLIA",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/mantle-sepolia/",
        "https://site2.moralis-nodes.com/mantle-sepolia/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "opBNB",
    logo: "/img/content/opbnb.png",
    type: "Mainnet",
    chainID: "0xcc (204)",
    evmChain: "EvmChain.opBNB",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/opbnb/",
        "https://site2.moralis-nodes.com/opbnb/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "Polygon zkEVM",
    logo: "/img/content/polygon-zkevm.png",
    type: "Mainnet",
    chainID: "0x44d (1101)",
    evmChain: "EvmChain.POLYGON_ZKEVM",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/polygon-zkevm/",
        "https://site2.moralis-nodes.com/polygon-zkevm/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "Polygon zkEVM Cardona",
    logo: "/img/content/polygon-zkevm.png",
    type: "Testnet",
    chainID: "0x98a (2442)",
    evmChain: "EvmChain.POLYGON_ZKEVM_CARDONA",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/polygon-zkevm-cardona/",
        "https://site2.moralis-nodes.com/polygon-zkevm-cardona/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "Zetachain",
    logo: "/img/content/zetachain.png",
    type: "Mainnet",
    chainID: "0x1b58 (7000)",
    evmChain: "EvmChain.ZETACHAIN",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/zetachain/",
        "https://site2.moralis-nodes.com/zetachain/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "Zetachain Testnet",
    logo: "/img/content/zetachain.png",
    type: "Testnet",
    chainID: "0x1b59 (7001)",
    evmChain: "EvmChain.ZETACHAIN_TESTNET",
    isNew: false,
    evmApi: {
      supported: false,
      internalTxs: false,
      erc20Swaps: false,
      nftTrades: false,
      reason: "Coming soon",
      queryParams: ["n/a"],
    },
    streamsApi: {
      supported: false,
      reason: "Coming soon",
      internalTxs: false,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/zetachain-testnet/",
        "https://site2.moralis-nodes.com/zetachain-testnet/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Coming soon",
    },
  },
  {
    name: "Flow",
    logo: "/img/content/flow.png",
    type: "Mainnet",
    chainID: "0x2eb (747)",
    evmChain: "EvmChain.FLOW",
    isNew: true,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: false,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["flow", "0x2eb"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/flow/",
        "https://site2.moralis-nodes.com/flow/",
      ],
    },
    authApi: {
      supported: false,
    },
  },
  {
    name: "Flow Testnet",
    logo: "/img/content/flow.png",
    type: "Testnet",
    chainID: "0x221 (545)",
    evmChain: "EvmChain.FLOW_TESTNET",
    isNew: true,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: false,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["flow-testnet", "0x221"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/flow-testnet/",
        "https://site2.moralis-nodes.com/flow-testnet/",
      ],
    },
    authApi: {
      supported: false,
    },
  },
  {
    name: "Ronin",
    logo: "/img/content/ronin.png",
    chainID: "0x7e4 (2020)",
    evmChain: "EvmChain.RONIN",
    isNew: true,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: true,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["ronin", "0x7e4"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/ronin/",
        "https://site2.moralis-nodes.com/ronin/",
      ],
    },
    authApi: {
      supported: false,
    },
  },
  {
    name: "Ronin Saigon Testnet",
    logo: "/img/content/ronin.png",
    chainID: "0x7e5 (2021)",
    evmChain: "EvmChain.RONIN_TESTNET",
    isNew: true,
    type: "Testnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["ronin-testnet", "2021"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/ronin-testnet/",
        "https://site2.moralis-nodes.com/ronin-testnet/",
      ],
    },
    authApi: {
      supported: false,
    },
  },
  {
    name: "Lisk",
    logo: "/img/content/lisk.png",
    chainID: "0x46f (1135)",
    evmChain: "EvmChain.LISK",
    isNew: true,
    type: "Mainnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["lisk", "0x46f"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/lisk/",
        "https://site2.moralis-nodes.com/lisk/",
      ],
    },
    authApi: {
      supported: false,
    },
  },
  {
    name: "Lisk Sepolia Testnet",
    logo: "/img/content/lisk.png",
    chainID: "0x106a (4202)",
    evmChain: "EvmChain.LISK_SEPOLIA",
    isNew: true,
    type: "Testnet",
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: true,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: false,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["lisk-sepolia", "0x106a"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: true,
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/lisk-sepolia/",
        "https://site2.moralis-nodes.com/lisk-sepolia/",
      ],
    },
    authApi: {
      supported: false,
    },
  },
  {
    name: "Pulsechain",
    logo: "/img/content/pulsechain.png",
    type: "Mainnet",
    chainID: "0x171 (369)",
    evmChain: "EvmChain.PULSECHAIN",
    isNew: true,
    evmApi: {
      supported: true,
      walletApi: true,
      nftApi: false,
      tokenApi: true,
      defiApi: false,
      entityApi: true,
      blockchainApi: true,
      pnlApi: false,
      tokenPrices: true,
      internalTxs: true,
      nftTrades: false,
      nftPrices: false,
      nftFloorPrices: false,
      queryParams: ["pulse", "0x171"],
    },
    streamsApi: {
      supported: true,
      blockConfirmations: "100",
      internalTxs: false,
      reason: "Unsupported",
    },
    rpcNodes: {
      supported: true,
      urls: [
        "https://site1.moralis-nodes.com/pulse/",
        "https://site2.moralis-nodes.com/pulse/",
      ],
    },
    authApi: {
      supported: false,
      reason: "Unsupported",
    },
  },
] as const;

export default chainData;
