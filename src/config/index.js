require('dotenv').config();

const web3Provider = process.env.REACT_APP_NETWORK_ID === '56'
  ? process.env.REACT_APP_BSC_WEB3_PROVIDER
  : process.env.REACT_APP_BSC_TEST_WEB3_PROVIDER

// console.log(process.env.REACT_APP_NETWORK_ID)

export const config = {
  web3Provider: web3Provider,
  networkId: process.env.REACT_APP_NETWORK_ID,
  contractAddress: {
    crssToken: {
      56: '0x0999ba9aEA33DcA5B615fFc9F8f88D260eAB74F1',
      97: '0xA98D21C3D61A7EB9Dd3BE9C9a1132Abb7c7Be2Dd'
    },
    presale: {
      56: '0xAd3f5A4526fbEd82A865d1BaeF14153488f86487',
      97: '0xB824C16fcbDc74f98691E67644f492780e1BDB61'
    },
    busd: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      97: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee'
    }
  },
};

export const BASE_BSC_SCAN_URL = {
  56: 'https://bscscan.com',
  97: 'https://testnet.bscscan.com',
};

export const connectorNames = {
  Injected: 'Injected',
  BSC: 'bsc',
  WalletConnect: 'WalletConnect',
}

export const REACT_APP_CHAIN_ID = 56;

export const POLLING_INTERVAL = 12000

export const REACT_APP_NODE_1 = "https://bsc-dataseed1.ninicoin.io"

export const REACT_APP_NODE_2 = "https://bsc-dataseed1.defibit.io"

export const REACT_APP_NODE_3 = "https://bsc-dataseed.binance.org"

