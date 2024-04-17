// const {expect} = require('chai'); // js library import
import {expect} from 'chai';

describe("Token contract",function(){
    it("deployment should assign the total supply of the tokens to owner",async function(){ // it block is used for the test each function
        // ether.js part starts here
        const [owner]= await ethers.getSigners() //getSigners: its a object to access the accounts in a contract
        // console.log("Signers object:",owner);
        const Token=await ethers.getContractFactory("Token");
        const hardhatToken=await Token.deploy(); // (deployment)create a instance of a contract means we can use all the function of the contracts using this instance
        console.log(owner.address);
        const ownerTokens= await hardhatToken.checkBalance(owner.address); // 
        console.log("Total Tokens:", (await hardhatToken.totalTokens()).toNumber());
        console.log("Owner Tokens:", ownerTokens.toNumber());
        expect((await hardhatToken.totalTokens()).toNumber()).to.equal(ownerTokens.toNumber()); //check whether the all the tokens is equal to owner tokens 
    });
});