// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "./PresaleERC20libs/IRC20.sol";

import "hardhat/console.sol";

contract PresaleERC20 is Ownable {
	//using SafeERC20 for IERC20;
	using SafeERC20 for IERC20;

	struct Buyer {
		uint256 amountDaiSpent;
		uint256 amountTokenPurchased;
	}
	mapping(address => Buyer) public buyers;

	IERC20 public dai;
	IERC20 public OlmosDAOToken;
	IERC20 public treasury = IERC20(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);

	uint256 public priceTokenPerDai = 105;
	uint256 public goal = 200000;

	constructor(address daiAddress, address token) {
		dai = IERC20(daiAddress);
		OlmosDAOToken = IERC20(token);
	}

	function calculateAmountExcedesTokensPurchased(uint256 _amountPaid)
		internal
		view
		returns (uint256)
	{
		uint256 _amountPaidExcedes = 0;
		uint256 TokenLeftToBuyPerDai = calculateNumberOfTokenLeft() /
			priceTokenPerDai;

		if (_amountPaid > TokenLeftToBuyPerDai) {
			_amountPaidExcedes = _amountPaid - TokenLeftToBuyPerDai;
		} else {
			_amountPaid = calculateAmountTokensPurchased(_amountPaid);
		}
		return _amountPaid - _amountPaidExcedes;
	}

	function calculateAmountTokensPurchased(uint256 _amountPaid)
		public
		view
		returns (uint256)
	{
		return _amountPaid * priceTokenPerDai;
	}

	function calculateNumberOfTokenLeft() public view returns (uint256) {
		return OlmosDAOToken.balanceOf(address(this));
	}

	function buyToken(uint256 amountDaiTokens) external returns (bool) {
		require(amountDaiTokens >= 1, "Min buy 1 Dai");
		uint256 _amountDaiTokens = calculateAmountExcedesTokensPurchased(
			amountDaiTokens
		);
		uint256 amountTokenPurchased = calculateAmountTokensPurchased(
			_amountDaiTokens
		);
		require(
			dai.allowance(msg.sender, address(this)) >= amountDaiTokens,
			"First grant allowance"
		);
		require(
			dai.balanceOf(msg.sender) >= amountDaiTokens,
			"Not enough tokens"
		);
		require(
			dai.balanceOf(msg.sender) >= amountDaiTokens,
			"Buyer does not have enough tokens"
		);
		require(
			calculateNumberOfTokenLeft() >= amountTokenPurchased,
			"Not enough tokens"
		);
		buyers[msg.sender].amountDaiSpent += _amountDaiTokens;
		buyers[msg.sender].amountTokenPurchased += amountTokenPurchased;

		dai.safeTransferFrom(msg.sender, address(this), _amountDaiTokens);
		OlmosDAOToken.transfer(msg.sender, amountTokenPurchased);

		return true;
	}

	function goalPresale() public view returns (bool) {
		return goal >= dai.balanceOf(address(this));
	}

	function mercy() external returns (bool) {
		require(buyers[msg.sender].amountDaiSpent > 0);
		require(buyers[msg.sender].amountTokenPurchased > 0);
		OlmosDAOToken.safeTransferFrom(
			msg.sender,
			address(this),
			buyers[msg.sender].amountTokenPurchased
		);
		dai.transfer(msg.sender, buyers[msg.sender].amountDaiSpent);
		delete buyers[msg.sender];
		return true;
	}

	function moveTokensToTreasury() external onlyOwner returns (bool) {
		require(goalPresale(), "Goal completed");
		uint256 amountTokenLeft = OlmosDAOToken.balanceOf(address(this));
		address addressTreasury = address(treasury);
		OlmosDAOToken.safeTransfer(addressTreasury, amountTokenLeft);
		return true;
	}
}
