const hre = require("hardhat");

async function main() {  
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello World");
  await greeter.deployed();

  console.log(
    `Greeter successfully deployed to ${greeter.address}`
  );

const Token = await hre.ethers.getContractFactory("LeeCoin")
const token = await Token.deploy("LeeCoin","LEE")
await token.deployed();
console.log("LeeCoin deployed to", token.address)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});