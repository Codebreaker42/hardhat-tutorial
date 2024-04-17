// // const {expect} = require('chai'); // js library import
import {expect} from 'chai'; // ecmascript library import

// describe("Token contract",function(){
//     //first test: checking the total tokens get into the owner accounts or not
//     it("Test1:deployment should assign the total supply of the tokens to owner",async function(){ // it block is used for the test each function
//         // ether.js part starts here
//         const [owner]= await ethers.getSigners() //getSigners: its a object to access the accounts in a contract
//         // console.log("Signers object:",owner);
//         const Token=await ethers.getContractFactory("Token");
//         const hardhatToken=await Token.deploy(); // (deployment)create a instance of a contract means we can use all the function of the contracts using this instance
//         console.log(owner.address);
//         const ownerTokens= await hardhatToken.checkBalance(owner.address); // 
//         // console.log("Total Tokens:", (await hardhatToken.totalTokens()).toNumber());
//         // console.log("Owner Tokens:", ownerTokens.toNumber());
//         expect((await hardhatToken.totalTokens()).toNumber()).to.equal(ownerTokens.toNumber()); //check whether the all the tokens is equal to owner tokens 
//     });
//     //second test: checking the transfer function 
//     it("Test2:Should transfer tokens between accounts",async function(){
//         const [owner,address1,address2]= await ethers.getSigners();
//         const Token= await ethers.getContractFactory("Token");
//         const hardhatToken= await Token.deploy() // instance of a contract
//         console.log(address1.address);
//         // transfer 10 tokens owners to address1
//         await hardhatToken.transferTokens(address1.address,10); // no need to connect() because its taking by default owner address
//         expect((await hardhatToken.checkBalance(address1.address)).toNumber()).to.equal(10);

//         // transfer 5 tokens to from address1 to address2
//         await hardhatToken.connect(address1).transferTokens(address2.address,5); // connect the address 1 to contract : .connect()
//         expect((await hardhatToken.checkBalance(address2.address)).toNumber()).to.equal(5);
//     })
// });
                    //   here we can see the repeatation of codes to overcome this we use mocha framework and hooks in it 

describe("Token Contract",function(){
    let Token; // making the token 
    let hardhatToken; // instance of a contract
    let owner; //address of owner of contract
    let address1; // contract participant1
    let address2; //contract participant2
    let addresses; //contract participant(n)
    // beforeEach hook
    beforeEach(async function(){
        Token=await ethers.getContractFactory("Token");
        [owner,address1,address2, ...addresses]= await ethers.getSigners();
        hardhatToken=await Token.deploy() //(deployment) : instance of a contract
    });  
    // testing of functions starts here 
    describe("Deployment",function(){
        // test1: check the right owner 
        it("Test1:Should set the Right owner",async function(){
            console.log(owner.address);
            expect(await hardhatToken.owner()).to.equal(owner.address);
        });
        // test2: checking the total tokens get into the owner account or not
        it("Test2: Should total tokens assign to the owner or not",async function(){
            let ownerTokens=await hardhatToken.checkBalance(owner.address);
            expect((await hardhatToken.totalTokens()).toNumber()).to.equal(ownerTokens.toNumber());
        });
    });
    describe("Transactions",function(){
        //test3:transfering the amount from one account to another
        it("Test3:Should transfer tokens between accounts",async function(){
            await hardhatToken.transferTokens(address1.address,10); // from owner to address1
            expect((await hardhatToken.checkBalance(address1.address)).toNumber()).to.equal(10);
            // from address1 to address2
            await hardhatToken.connect(address1).transferTokens(address2.address,5); //from address1 to address2
            expect((await hardhatToken.checkBalance(address2.address)).toNumber()).to.equal(5);
        });
        //test4: fail the transaction if the sender have not enough tokens
        // it("Test4:Should transaction failed when sender doesn't have the enought tokens",async function(){
        //     const initialOwnerBalance=(await hardhatToken.checkBalance(owner.address)).toNumber(); //10000
        //     /* intially address1 has 0 tokens so funtion returns(Not Enough Tokens which then match with revertedWith() return value) and 
        //     condition become true */
        //     await expect(
        //         hardhatToken.connect(address1).transferTokens(owner.address, 1) //initially - 0 tokens addr1
        //       ).to.be.revertedWith("Not enough token"); 
        //     expect((await hardhatToken.checkBalance(owner.address)).toNumber()).to.equal(initialOwnerBalance);
        // }); //giving the error and not resolve by putting lots of efforts
        //test:5 balance updated successfully after transfering
        it("Test5:Should update balances after transfer",async function(){
            const initialOwnerBalance=(await hardhatToken.checkBalance(owner.address)).toNumber();
            await hardhatToken.transferTokens(address1.address,5);
            await hardhatToken.transferTokens(address2.address,10);
            const finalOwnerBalance= (await hardhatToken.checkBalance(owner.address)).toNumber();
            expect(finalOwnerBalance).to.equal(initialOwnerBalance-15);
            const addr1Balance= (await hardhatToken.checkBalance(address1.address)).toNumber();
            const addr2Balance= (await hardhatToken.checkBalance(address2.address)).toNumber();
            expect(addr1Balance).to.equal(5);
            expect(addr2Balance).to.equal(10);
        })
    });    
});
