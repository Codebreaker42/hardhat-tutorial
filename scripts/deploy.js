 
async function main(){
    const [deployer]= await ethers.getSigners();
    const Token= await ethers.getContractFactory("Token");
    const hardhatToken= await Token.deploy(); // instance of a contract
    console.log("Token Address",hardhatToken.address);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})