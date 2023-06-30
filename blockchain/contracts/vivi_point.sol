// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

contract ViViPoint is ERC20("ViVi", "VIV"), ERC20Burnable, Ownable {
    using SafeMath for uint256;

    uint256 private _wei = 10 ** uint256(18);
    uint256 private _maxcap = 20_000_000_000 * _wei;

    address[] public addressRecord;

    constructor() {
        _mint(msg.sender, 1_000_000_000 * _wei);
        transferOwnership(msg.sender);
    }

    function _afterTokenTransfer(address from, address to, uint256 amount) internal virtual override{
        if(balanceOf(from) > 0){
            addressRecord.push(to);
        }
        super._afterTokenTransfer(from, to, amount);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(ERC20.totalSupply() + amount <= _maxcap, "Not enough tokens");
        _mint(to, amount);
    }
    
    function tranferInNetwork(address from, address to, uint256 amount) public onlyOwner{
        uint256 gasCost = calculateGasCost();
        require(msg.sender.balance >= gasCost, "Owner does not have enough Ether to cover gas cost.");
        require(balanceOf(from) >= amount, "Not enough balance to tranfer");
        _burn(from, amount);
        mint(to, amount);
    }

    function getAddressRecord() public view returns (address[] memory) {
        return addressRecord;
    }

    function calculateGasCost() internal view returns (uint256) {
        uint256 gasLimit = gasleft();
        uint256 gasPrice = tx.gasprice;
        return gasLimit.mul(gasPrice);
    }
}
