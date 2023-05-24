require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { SEPOLIA_RPC_URL,PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
	networks: {
		sepolia: {
			url: SEPOLIA_RPC_URL,
			accounts: [PRIVATE_KEY],
		}
	},
};
