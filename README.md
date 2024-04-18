# Hardhat Tutorial

This tutorial will guide you through the steps to set up a Hardhat project and start developing smart contracts.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Steps](#steps)
- [Testing](#testing)
- [Deployment](#deployment)

## Prerequisites

- Node.js >= 18.0
- npm 7 or later

## Steps

1. **Initialize a package.json file**: Run `npm init --yes` to initialize a package.json file.

2. **Install Hardhat**: Use the command `npm install --save-dev hardhat` to install Hardhat.

3. **Create an empty hardhat.config.js file**: Run `npx hardhat` and select the option to create an empty hardhat.config.js file.

4. **Configure the solidity version**: In the hardhat.config.js file, add the following code to configure the solidity version to "0.8.9":

```javascript
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
};

Create the necessary folders:

Create a folder named "contracts" to store your smart contract files.
Create a folder named "test" to write tests for your smart contracts.
Create a folder named "scripts" to write deployment scripts for your smart contracts.
Install testing dependencies: Use the command npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai to install the necessary testing dependencies.

Debugging the contract: To debug the contract in the Solidity file using JavaScript, import "hardhat/console.sol" in your contract file.


Testing

To run the tests for your smart contracts, use the command npx hardhat test.


Deployment

To deploy your smart contracts, write deployment scripts in the "scripts" folder and use the command npx hardhat run scripts/deploy.js.


Happy coding!

