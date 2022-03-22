pragma solidity ^0.8.0;


import './openZeppelin/MerkleProof.sol';

import './MerkleToken.sol';

contract Merkle {
    bytes32 public merkleRoot = 0x64c9155e66ab31df6abe0aa7a09e76ea55d308d29c048c4807d0d25c66e9a693;

    mapping(address => bool) public whitelistClaimed;

    function whitelistMint(bytes32[] calldata _merkleProof) public {
        require(!whitelistClaimed[msg.sender], "Address has already be claimed");

        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));

        require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), "Invalid proof.");

        whitelistClaimed[msg.sender] = true;
    }
}