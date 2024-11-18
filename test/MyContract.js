const { expect } = require("chai");

describe("MyContract", function () {
  it("Should set and get the number", async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();
    await myContract.deployed();

    await myContract.setNumber(42);
    expect(await myContract.number()).to.equal(42);
  });
});
