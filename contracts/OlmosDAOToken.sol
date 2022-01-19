// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

abstract contract Context {
	function _msgSender() internal view virtual returns (address payable) {
		return payable(msg.sender); //TODO
	}

	function _msgData() internal view virtual returns (bytes memory) {
		return msg.data;
	}
}

interface IERC20 {
	function totalSupply() external view returns (uint256);

	function balanceOf(address account) external view returns (uint256);

	function transfer(address recipient, uint256 amount)
		external
		returns (bool);

	function allowance(address owner, address spender)
		external
		view
		returns (uint256);

	function approve(address spender, uint256 amount) external returns (bool);

	function name() external view returns (string memory);

	function symbol() external view returns (string memory);

	function decimals() external view returns (uint8);

	function transferFrom(
		address sender,
		address recipient,
		uint256 amount
	) external returns (bool);

	event Transfer(address indexed from, address indexed to, uint256 value);
	event Approval(
		address indexed owner,
		address indexed spender,
		uint256 value
	);
}

contract OlmosDAOToken is Context, IERC20 {
	mapping(address => uint256) public balances;
	mapping(address => mapping(address => uint256)) public allowances;
	uint256 public totalSupply = 21000000;
	string public name = "OlmosDAO";
	string public symbol = "Olm";
	uint8 public decimals = 18;

	constructor() {
		require(msg.sender != address(0), "ERC20: mint to the zero address");
		balances[msg.sender] = totalSupply;
		emit Transfer(address(0), msg.sender, totalSupply);
	}

	function balanceOf(address account) external view returns (uint256) {
		return balances[account];
	}

	function transfer(address recipient, uint256 amount)
		public
		virtual
		override
		returns (bool)
	{
		_transfer(_msgSender(), recipient, amount);
		return true;
	}

	function allowance(address owner, address spender)
		public
		view
		virtual
		override
		returns (uint256)
	{
		return allowances[owner][spender];
	}

	function approve(address spender, uint256 amount)
		public
		virtual
		override
		returns (bool)
	{
		_approve(_msgSender(), spender, amount);
		return true;
	}

	function transferFrom(
		address sender,
		address recipient,
		uint256 amount
	) public virtual override returns (bool) {
		_transfer(sender, recipient, amount);
		uint256 currentAllowance = allowances[sender][_msgSender()];
		require(
			currentAllowance >= amount,
			"ERC20: transfer amount exceeds allowance"
		);
		_approve(sender, _msgSender(), currentAllowance - amount);
		return true;
	}

	function _transfer(
		address sender,
		address recipient,
		uint256 amount
	) internal virtual {
		require(sender != address(0), "ERC20: transfer from the zero address");
		require(recipient != address(0), "ERC20: transfer to the zero address"); //TODO
		require(
			balances[sender] >= amount,
			"ERC20: transfer amount exceeds balance"
		);
		// _beforeTokenTransfer(sender, recipient, amount);
		balances[sender] = balances[sender] - amount;
		balances[recipient] += amount;
		emit Transfer(sender, recipient, amount);
		//afterTokenTransfer(sender, recipient, amount);
	}

	function _approve(
		address owner,
		address spender,
		uint256 amount
	) internal virtual {
		require(owner != address(0), "ERC20: approve from the zero address");
		require(spender != address(0), "ERC20: approve to the zero address");
		allowances[owner][spender] = amount;
		emit Approval(owner, spender, amount);
	}
}
