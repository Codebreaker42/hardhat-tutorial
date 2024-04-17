// const {expect} = require('chai'); // js library import
import {expect} from 'chai';

describe("Token contract",function(){
    //first test: checking the total tokens get into the owner accounts or not
    it("Test1:deployment should assign the total supply of the tokens to owner",async function(){ // it block is used for the test each function
        // ether.js part starts here
        const [owner]= await ethers.getSigners() //getSigners: its a object to access the accounts in a contract
        // console.log("Signers object:",owner);
        const Token=await ethers.getContractFactory("Token");
        const hardhatToken=await Token.deploy(); // (deployment)create a instance of a contract means we can use all the function of the contracts using this instance
        console.log(owner.address);
        const ownerTokens= await hardhatToken.checkBalance(owner.address); // 
        // console.log("Total Tokens:", (await hardhatToken.totalTokens()).toNumber());
        // console.log("Owner Tokens:", ownerTokens.toNumber());
        expect((await hardhatToken.totalTokens()).toNumber()).to.equal(ownerTokens.toNumber()); //check whether the all the tokens is equal to owner tokens 
    });
    //second test: checking the transfer function 
    it("Test2:Should transfer tokens between accounts",async function(){
        const [owner,address1,address2]= await ethers.getSigners();
        const Token= await ethers.getContractFactory("Token");
        const hardhatToken= await Token.deploy() // instance of a contract
        console.log(address1.address);
        // transfer 10 tokens owners to address1
        await hardhatToken.transferTokens(address1.address,10); // no need to connect() because its taking by default owner address
        expect((await hardhatToken.checkBalance(address1.address)).toNumber()).to.equal(10);

        // transfer 5 tokens to from address1 to address2
        await hardhatToken.connect(address1).transferTokens(address2.address,5); // connect the address 1 to contract : .connect()
        expect((await hardhatToken.checkBalance(address2.address)).toNumber()).to.equal(5);
    })
});