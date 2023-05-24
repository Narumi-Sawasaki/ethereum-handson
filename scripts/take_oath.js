const { ethers } = require("hardhat");
const abi = require("../artifacts/contracts/Oath.sol/Oath.json");

require('dotenv').config();
const { API_END_POINT, PRIVATE_KEY } = process.env; 

async function main() {
	const provider = new ethers.providers.JsonRpcProvider(API_END_POINT);
	const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

	const transactionAddress = "0x5E4E1F2c7ee41830F8cdB0b47b805A574447f634";
	const contract = new ethers.Contract(transactionAddress, abi.abi, wallet);
	const oath = process.argv[2] ? process.argv[2] : "";
	await contract.takeAnOath(wallet.address, oath);
}
main();
