const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Taking oath contract", function () {
	it("Deployment should assign the total supply of tokens to the owner", async function() {
		const Oath = await ethers.getContractFactory("Oath");
		const [owner] = await ethers.getSigners();
		const contract = await Oath.deploy();
		let fetchedOath = await contract.getOath(owner.address);
		expect(fetchedOath).to.equal("");

		const oath =  "gorilla"
		await contract.setOath(owner.address, oath);
		fetchedOath = await contract.getOath(owner.address);
		expect(fetchedOath).to.equal(oath);
	});
});
