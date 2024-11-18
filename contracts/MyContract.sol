// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    uint public number;

    function setNumber(uint _number) public {
        number = _number;
    }
}
