
// import { getDefaultConfig } from '@rainbow-me/rainbowkit';
// import {
//   arbitrum,
//   avalanche,
//   bsc,
//   fantom,
//   mainnet,
//   optimism,
//   polygon,
//   zksync,
//   Chain,
// } from 'wagmi/chains';
// import { WALLETCONNECT_PROJECT_ID } from './config/config';

// const chains: readonly [typeof mainnet, ...Chain[]] = [
//   mainnet,
//   polygon,
//   bsc,
//   arbitrum,
//   avalanche,
//   fantom,
//   optimism,
//   zksync,
// ];

// const config = getDefaultConfig({
//   appName: 'TSender',
//   projectId: WALLETCONNECT_PROJECT_ID,
//   chains,
//   ssr: false,
// });

// export default config;

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  polygon,
  bsc,
  arbitrum,
  avalanche,
  fantom,
  optimism,
  zksync,
  Chain,
} from 'wagmi/chains';
import { WALLETCONNECT_PROJECT_ID } from './config/config';

// Custom chain definitions
const palm: Chain = {
  id: 11297108109,
  name: 'Palm',
  // network: 'palm',
  nativeCurrency: {
    name: 'Palm',
    symbol: 'PALM',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://palm-mainnet.infura.io/v3/758874998f5bd0c393da094e1967a72b'] },
  },
  blockExplorers: {
    default: {
      name: 'Palm Explorer',
      url: 'https://explorer.palm.io',
    },
  },
};

const ronin: Chain = {
  id: 2020,
  name: 'Ronin',
  // network: 'ronin',
  nativeCurrency: {
    name: 'Ronin',
    symbol: 'RON',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://api.roninchain.com'] },
  },
  blockExplorers: {
    default: {
      name: 'Ronin Explorer',
      url: 'https://explorer.roninchain.com',
    },
  },
};

const xDai: Chain = {
  id: 100,
  name: 'Gnosis (xDai)',
  // network: 'gnosis',
  nativeCurrency: {
    name: 'xDAI',
    symbol: 'xDAI',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://rpc.xdaichain.com'] },
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://blockscout.com/xdai/mainnet',
    },
  },
};

const moonbeam: Chain = {
  id: 1284,
  name: 'Moonbeam',
  // network: 'moonbeam',
  nativeCurrency: {
    name: 'GLMR',
    symbol: 'GLMR',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.moonbeam.network'] },
  },
  blockExplorers: {
    default: {
      name: 'Moonbeam Explorer',
      url: 'https://moonbeam-explorer.netlify.app', // replace with main if needed
    },
  },
};

const klaytn: Chain = {
  id: 8217,
  name: 'Klaytn',
  // network: 'klaytn',
  nativeCurrency: {
    name: 'KLAY',
    symbol: 'KLAY',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://node-api.klaytn.com'] },
  },
  blockExplorers: {
    default: {
      name: 'KlaytnScope',
      url: 'https://scope.klaytn.com',
    },
  },
};

// Optional: Matic if different from polygon
const matic: Chain = {
  id: 137,
  name: 'Matic Mainnet',
  // network: 'matic-custom',
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://rpc-mainnet.maticvigil.com'] },
  },
  blockExplorers: {
    default: {
      name: 'PolygonScan',
      url: 'https://polygonscan.com',
    },
  },
};

// Add all chains together
const chains: readonly [typeof mainnet, ...Chain[]] = [
  mainnet,
  polygon,
  bsc,
  arbitrum,
  avalanche,
  fantom,
  optimism,
  zksync,
  palm,
  ronin,
  xDai,
  moonbeam,
  klaytn,
  matic,
];

const config = getDefaultConfig({
  appName: 'TSender',
  projectId: WALLETCONNECT_PROJECT_ID,
  chains,
  ssr: false,
});

export default config;
