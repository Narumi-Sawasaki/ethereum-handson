pragma solidity ^0.8.18;

contract Oath {
	// アカウントのアドレスと文字列を紐付ける連想配列
	mapping(address => string) oaths;

	// アカウントのアドレスに文字列を紐付ける
	function setOath(address account, string calldata oath) external {
		oaths[account] = oath;
	}

	// アカウントのアドレスに紐付いている文字列を返す
	function getOath(address account) public view returns (string memory) {
		return oaths[account];
	}
}
