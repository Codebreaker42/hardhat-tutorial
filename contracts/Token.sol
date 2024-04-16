// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 <0.9.0;

contract Token{
    string public name="Hardhat";
    string public symbol="HHT"; //hht: hard har token
    uint public totalTokens=10000; // total supply of tokens
    mapping(address=>uint) balances; // mapping of the addrssess with no of tokens 
    address public owner; //owner of the contract
    
    constructor(){
        balances[msg.sender]=totalTokens; //all the tokens intitailly belongs to owner of contract
        owner=msg.sender; //defining our owner
    }
    // function to transfer the tokens into another addressess
    function transferTokens(address to,uint amount) external{
        require(balances[msg.sender]>=amount,"Not Enough Tokens");
        balances[msg.sender]=balances[msg.sender]-amount;
        balances[to]=balances[to]+amount;
    }
    // funtion to check the balance of the particular address
    function checkBalance(address account) external view returns(uint){
        return balances[account];
    }
}