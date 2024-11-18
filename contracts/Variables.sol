// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


//uint (Unsigned Integers)
uint a = 10;
uint256 b = 1000; // uint256 is the most commonly used type
  

// int(Signed Integers)
int x = -5;

//bool 
bool isActive = true;

//address
address public owner:
owner = 0x1234567890abcdef1234567890abcdef12345678;

//arrays
uint[] public dynamicArray;
uint[5] public fixedArray; 

//structs 
struct Person {
    string name;
    uint age;
}

Person public person1 = Person("Alice, 30);

// mapping
mapping(address => uint) public balances;
balances[msg.sender] = 1000;