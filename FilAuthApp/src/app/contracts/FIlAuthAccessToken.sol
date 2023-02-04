// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IFilAuthAccessToken{
    function registerOrganization(string memory _orgName)external;
    function createAccessLevel(string memory _accessLevelName)external;
    function assignAccessToUser(address _addr, string memory _accessLevel)external;
    function isAccessApproved(address _userAddr)external returns(bool);
}

contract FilAuthAccessToken{

    uint256 orgIndex = 1;

    uint256 Fee = 10000;

    struct AccessRule{
        string Name;
        uint256 UserIndex;
        address[] Users;
        mapping (address => bool) hasAccess;
    }

    struct Organization{
        string Name;
        bool isRegistered;
        uint256 AccessRulesIndex;
        uint256 numberOfLinks;
        uint256 NumberOfUsers;
        string[] AccessLevelsList;
        mapping ( string => AccessRule) AccessRulesMapping;
    }

    mapping (address => Organization) OrgMapping;

    event OrgCreated(address indexed creator, string OrgName);

    constructor(){}

    function registerOrganization(string memory _orgName)external payable{
        require(!isOrgRegistered(msg.sender), "Already registered!");
        require(msg.value>=Fee, "Not enough gas!");
        Organization storage newOrg = OrgMapping[msg.sender];
        newOrg.Name = _orgName;
        newOrg.isRegistered = true;
    }

    function createAccessLevel(string memory _accessLevelName)external {
        require(isOrgRegistered(msg.sender), "Not registered!");
        Organization storage org = OrgMapping[msg.sender];
        org.AccessRulesIndex++;
        org.AccessRulesMapping[_accessLevelName].Name = _accessLevelName;
        org.AccessLevelsList.push(_accessLevelName);
    }

    function assignAccessToUser(address _addr, string memory _accessLevel)external {
        Organization storage org = OrgMapping[msg.sender];
        org.AccessRulesMapping[_accessLevel].UserIndex++;
        org.AccessRulesMapping[_accessLevel].hasAccess[_addr] = true;
        org.NumberOfUsers++;
    }

    function removeAccessFromUser(address _addr, string memory _accessLevel)external {
        Organization storage org = OrgMapping[msg.sender];
        org.AccessRulesMapping[_accessLevel].UserIndex--;
        org.AccessRulesMapping[_accessLevel].hasAccess[_addr] = false;
        org.NumberOfUsers--;
    }

    function isAccessApproved(address _orgAddr, address _userAddr, string memory _accessLevel)external view returns(bool){
        Organization storage org = OrgMapping[_orgAddr];
        return org.AccessRulesMapping[_accessLevel].hasAccess[_userAddr];
    }
    
    function isOrgRegistered(address _sender)public view returns(bool){
        return OrgMapping[_sender].isRegistered;
    }

    function returnNumberOfUsers()external view returns(uint256){
        return OrgMapping[msg.sender].NumberOfUsers;
    }

    function returnNumberOfAccessRules()external view returns(uint256){
        return OrgMapping[msg.sender].AccessRulesIndex;
    }

    function getUsers(string memory _accessLevelName)external view returns(address[] memory){
        return OrgMapping[msg.sender].AccessRulesMapping[_accessLevelName].Users;
    }

    function getAccessLevels()external view returns(string[] memory){
        return OrgMapping[msg.sender].AccessLevelsList;
    }
}