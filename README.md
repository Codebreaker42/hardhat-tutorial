# hardhat tutorial
 hardhat tutorial
 steps:
 -init package.json file using the (npm init --yes)
 - install hardhat using the (npm install --save-dev hardhat)
 - npx install hardhat then select (Create an empty hardhat.config.js).
 then 
      /** @type import('hardhat/config').HardhatUserConfig */
      module.exports = {
      solidity: "0.8.9",
      };
    now you can choose any solidity version by changing the version 
-create 3 folders by name
i- contract: smart contract file
ii- test: for testing purpose
iii- scripts: to write deployement scripts
 - install test using (npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai) command.
