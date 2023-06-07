const { ethers } = require("hardhat");
const abi = require("../artifacts/contracts/Oath.sol/Oath.json");

require('dotenv').config();
const { API_END_POINT, PRIVATE_KEY, TRANSACTION_ADDRESS } = process.env; 

async function main() {
	// ethereumネットワークへの入り口を渡してproviderオブジェクトを作成
	const provider = new ethers.providers.JsonRpcProvider(API_END_POINT);

	// contractを実行するアカウントのwalletオブジェクトを作成
	const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

	// contractオブジェクトを作成
	const contract = new ethers.Contract(TRANSACTION_ADDRESS, abi.abi, wallet);

	// contract実行!
	const oath = await contract.getOath(wallet.address);
	console.log(oath);
}
main()
