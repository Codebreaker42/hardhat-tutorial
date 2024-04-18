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
