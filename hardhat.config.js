
/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle') //import the chai file

const ALCHEMY_API_KEY="ec_9Cn04gcXVPitK5huGeiTk0PhcHHvQ";
const SEPOLIA_PRIVATE_KEY="afb7cb1346d8e07d2aab5b4e9e90c113494b44395e44f8c0ba973b71e06d4f37";
module.exports = {
  solidity: "0.8.9",
  networks:{
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${SEPOLIA_PRIVATE_KEY}`],
    }
  }
};
