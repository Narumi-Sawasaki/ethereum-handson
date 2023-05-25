require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { API_END_POINT, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
	networks: {
		sepolia: {
			url: API_END_POINT,
			accounts: [PRIVATE_KEY],
		}
	},
};
