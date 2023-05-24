pragma solidity ^0.8.18;

contract Oath {
	string public name = "My Hardhat Token";
	string public symbol = "MHT";

	uint256 public totalSupply = 1000000;

	address public owner;

	mapping(address => uint256) balances;
	mapping(address => string) oaths;

	constructor() {
		// balances[msg.sender] = totalSupply;
		owner = msg.sender;
	}

	function takeAnOath(address account, string calldata oath) external {
		oaths[account] = oath;
	}

	/*
	function transfer(address to, uint256 amount) external {
		require(balances[msg.sender] >= amount, "Not enough tokens");
		balances[msg.sender] -= amount;
		balances[to] += amount;
	}
	*/

	function balanceOf(address account) external view returns (uint256) {
		return balances[account];
	}

	function getOath(address account) public view returns (string memory) {
		return oaths[account];
	}
}
