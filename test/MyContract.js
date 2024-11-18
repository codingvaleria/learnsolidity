const { expect } = require("chai");

describe("MyContract", function () {
  it("Should set and get the number", async function () {
    // Step 1: Deploy the contract
    const MyContract = await ethers.getContractFactory("MyContract"); // Loads the contract code and prepares it for deployment.
    const myContract = await MyContract.deploy(); //  Deploys the contract to a local test blockchain (provided by Hardhat).
    // await myContract.deployed(); // Waits for the contract to finish deploying.


    // Step 2: Call the `setNumber` function
    await myContract.setNumber(42);

    // Step 3: Verify the `number` variable is set correctly
    expect(await myContract.number()).to.equal(42);
  });
});
