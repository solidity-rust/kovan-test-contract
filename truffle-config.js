const path = require("path");
require('dotenv').config();

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env["MNEMONIC"];
var INFURA_KEY = process.env["INFURA_KEY"];

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    kovan: {
      // networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(mnemonic,
           `https://kovan.infura.io/v3/${INFURA_KEY}`),
      network_id: 42,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "^0.7.0",
      settings: {
        optimizer: {
          enabled: false,
          runs: 20   // Optimize for how many times you intend to run the code
        }
      },
    },
  },
};