const { ethers } = require("hardhat");
const abi = require("../artifacts/contracts/Oath.sol/Oath.json");

require('dotenv').config();
const { API_END_POINT, PRIVATE_KEY, TRANSACTION_ADDRESS } = process.env; 

async function main() {
	const provider = new ethers.providers.JsonRpcProvider(API_END_POINT);
	const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

	const contract = new ethers.Contract(TRANSACTION_ADDRESS, abi.abi, wallet);
	const oath = await contract.getOath(wallet.address);
	console.log(oath);
}
main()
