# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
## Solidity Notes

### Understanding Solidity Valriabls and Data Types

Solidity is a statically typed language: meaning each variable must be explicitly declared with a type.

#### Data Types
##### 1. Value Types
- uint(Unsigned Integers): A non- negative Integer
- int(Signed Integers): Can store both positive and negative values
- bool(Boolean Value): True or False
- address (Ethereum address type): Holdsthe Ethereum address

##### 2. Reference Types 
- arrays: Can be fixed or dynamic length
- structs: custom data types to group multiple variables
- mapping: A key value store -i.e object


