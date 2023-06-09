const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
	it("Deployment should assign the total supply of tokens to the owner", async function() {
		const Token = await ethers.getContractFactory("Token");
		const [owner] = await ethers.getSigners();
		const hardhatToken = await Token.deploy();
		const ownerBalance = await hardhatToken.balanceOf(owner.address);
		expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
	});
});
