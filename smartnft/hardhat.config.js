 require("@nomiclabs/hardhat-waffle")
 const { CONTRACT_DEPLOYMENT_WALLET_PRIVATE_KEY, INFURA_API_KEY} = process.env;

module.exports = {
  solidity: {
    version : "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
  },
},

paths: {
  artifacts: './src/artifacts',
},
defaultNetwork: "hardhat",
networks: {
  hardhat: {
    chainId: 1337
  },

  rinkeby: {
    url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
    accounts: [`0x${CONTRACT_DEPLOYMENT_WALLET_PRIVATE_KEY}`],
    chainId: 4
  },
  bsctestnet: {
    url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
    accounts: [`0x${CONTRACT_DEPLOYMENT_WALLET_PRIVATE_KEY}`],
    chainId: 97
  },


};
