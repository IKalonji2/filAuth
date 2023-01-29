import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { abi } from './../contracts/ABI/FilAuth';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {
  provider: ethers.providers.Web3Provider;
  contract: ethers.Contract;

  constructor() {
    // Connect to the MetaMask provider
    this.provider = new ethers.providers.Web3Provider(window.ethereum);

    // Connect to the contract using the ABI
    this.contract = new ethers.Contract(
      '<contractAddress>',
      abi,
      this.provider.getSigner()
    );
  }

  async registerOrganization(orgName: string) {
    const fee = ethers.BigNumber.from(1000);
    // Call the registerOrganization function
    return this.contract.registerOrganization(orgName, { value: fee });
  }

  async createAccessLevel(accessLevel: string) {
    // Call the createAccessLevel function
    return this.contract.createAccessLevel(accessLevel);
  }

  async assignAccess(users: string[], accessLevel: string) {
    // Call the assignAccess function
    return this.contract.assignAccess(users, accessLevel);
  }

  async removeAccess(tokenIds: number[], accessLevel: string) {
    // Call the removeAccess function
    return this.contract.removeAccess(tokenIds, accessLevel);
  }

  async getAccessUsers(accessLevel: string) {
    // Call the getAccessLevelsList function
    return this.contract.getAccessLevelsList(accessLevel);
  }

  async getAllAccessUsersByContract(contractAddr: string) {
    // Call the getAccessUsersByContract function
    return this.contract.getAccessUsersByContract(contractAddr);
  }

  // Listen to the LogOrganizationRegistered event
  listenToLogOrganizationRegistered() {
    return this.contract.on('LogOrganizationRegistered', (org, name) => {
      console.log(`Organization registered: ${org} - ${name}`);
    });
  }

  // Listen to the LogAccessLevelCreated event
  listenToLogAccessLevelCreated() {
    return this.contract.on('LogAccessLevelCreated', (org, accessLevel) => {
      console.log(`Access level created: ${org} - ${accessLevel}`);
    });
  }

  // Listen to the LogAccessAssigned event
  listenToLogAccessAssigned() {
    return this.contract.on('LogAccessAssigned', (org, user, accessLevel) => {
      console.log(`Access assigned: ${org} - ${user} - ${accessLevel}`);
    });
  }

  // Listen to the LogAccessRevoked event
  listenToLogAccessRevoked() {
    return this.contract.on('LogAccessRevoked', (org, user, accessLevel) => {
      console.log(`Access revoked: ${org} - ${user} - ${accessLevel}`);
    });
  }
}


