// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./AccessNFT.sol";

contract AccessControl {

    AccessNFT accessNftContract;
    uint256 registrationFee = 1000;

    struct AccessRight {
        string name;
        address _address;
    }

    // Mapping of organizations to their access level NFTs contract address.
    mapping(address => AccessRight[]) private accessLevels;
    mapping(address => string) registeredEntity;

    // Events for logging
    event LogOrganizationRegistered(address indexed org, string name);
    event LogAccessLevelCreated(address indexed org, string indexed accessLevel);
    event LogAccessAssigned(address indexed org, address indexed user, string indexed accessLevel);
    event LogAccessRevoked(address indexed org, address indexed user, string indexed accessLevel);

    // Register an organization and their access levels
    function registerOrganization(string memory orgName) public payable  {
        require(!isOrganizationRegistered(msg.sender), "Organization already registered");
        require(msg.value >= registrationFee);
        registeredEntity[msg.sender] = orgName;
        emit LogOrganizationRegistered(msg.sender, orgName);
    }

    // Create an access level for an organization
    function createAccessLevel(string memory _accessLevel) public {
        require(isOrganizationRegistered(msg.sender), "Organization not registered");
        require(!accessRightExists(msg.sender, _accessLevel), "Level exists");
        require(accessLevels[msg.sender].length <= 10, "Max 10 access levels");
        AccessNFT _contract = new AccessNFT(_accessLevel, registeredEntity[msg.sender], "filAuth");
        address addr = address(_contract);
        AccessRight memory _access = AccessRight(_accessLevel, addr);
        accessLevels[msg.sender].push(_access);
        emit LogAccessLevelCreated(msg.sender, _accessLevel);
    }

    function accessRightExists(address org, string memory _accessLevel) internal view returns(bool){
        for (uint i = 0; i < 10; i++){
            if (bytes(accessLevels[org][i].name).length == bytes(_accessLevel).length){
                if (keccak256(abi.encodePacked(accessLevels[org][i].name)) == keccak256(abi.encodePacked(_accessLevel))){
                    return true;
                }
            }
        }
        return false;
    }

    function getAccessLevel(address org, string memory _accessLevel) internal view returns(AccessRight memory){
        for (uint i = 0; i < 10; i++){
            if (bytes(accessLevels[org][i].name).length == bytes(_accessLevel).length){
                if (keccak256(abi.encodePacked(accessLevels[org][i].name)) == keccak256(abi.encodePacked(_accessLevel))){
                    return accessLevels[org][i];
                }
            }
        }
        return accessLevels[address(0)][0];
    }

    // Assign an access level to a user
    function assignAccess(address[] memory users, string memory accessLevel) public {
        require(isOrganizationRegistered(msg.sender), "Organization not registered");
        require(accessRightExists(msg.sender, accessLevel), "Access level does not exist");
        AccessRight memory _access = getAccessLevel(msg.sender, accessLevel); 
        AccessNFT _accessContract = AccessNFT(_access._address);
        for (uint i = 0; i < users.length; i++) {
            if (_accessContract.balanceOf(users[i]) == 0) {
                _accessContract._mint(users[i]);
                emit LogAccessAssigned(msg.sender, users[i], accessLevel);
            }  
        }
    }

        // Assign an access level to a user
    function removeAccess(uint256[] memory tokenIds, string memory accessLevel) public {
        require(isOrganizationRegistered(msg.sender), "Organization not registered");
        require(accessRightExists(msg.sender, accessLevel), "Access level does not exist");
        AccessRight memory _access = getAccessLevel(msg.sender, accessLevel);
        AccessNFT _accessContract = AccessNFT(_access._address);
        for (uint i = 0; i < tokenIds.length; i++) {
            if (_accessContract.ownerOf(tokenIds[i]) != address(0)) {
                emit LogAccessRevoked(msg.sender, _accessContract.ownerOf(tokenIds[i]), accessLevel);
                _accessContract._burn(tokenIds[i]);
            }  
        }
    }

    // Check if an organization is registered
    function isOrganizationRegistered(address org) public view returns (bool) {
        return bytes(registeredEntity[org]).length != 0;
    }

    function getAccessLevelsList() public view returns(AccessRight[] memory access){
        access = accessLevels[msg.sender];        
    }

    function getAccessUsersByContract(address _contract) public view returns(address[] memory owners){
        owners = AccessNFT(_contract).getOwnersList();
    }
}
