import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { abi } from './../contracts/ABI/FilAuth';
import  * as abiJson from '../contracts/ABI/FilAuth';

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
      '0xb281CD762341eCeC4fd601439C0c3901B2a25a20',
      abi,
      this.provider.getSigner()
    );
  }

  async registerOrganization(orgName: string) {
    const fee = ethers.BigNumber.from(10000);
    // Call the registerOrganization function
    return await this.contract.registerOrganization(orgName, { value: fee });
  }

  async createAccessLevel(accessLevel: string) {
    // Call the createAccessLevel function
    return await this.contract.createAccessLevel(accessLevel);
  }

  async assignAccess(user: string, accessLevel: string) {
    // Call the assignAccess function
    return await this.contract.assignAccessToUser(user, accessLevel);
  }

  async removeAccess(user: string, accessLevel: string) {
    // Call the removeAccess function
    return await this.contract.removeAccess(user, accessLevel);
  }

  async isOrgRegistered(orgAddress: string) {
    return false;// await this.contract.isOrgRegistered(orgAddress);
  }

  async getNumberOfUsers() {
    return await this.contract.returnNumberOfUsers();
  }

  async getNumberOfAccessRules() {
    return await this.contract.returnNumberOfAccessRules();
  }

  async getUsers(accessLevelName: string) {
    // Call the getAccessLevelsList function
    return await this.contract.getUsers(accessLevelName);
  }

  async getAccessLevels() {
    // Call the getAccessLevelsList function
    return await this.contract.getAccessLevels();
  }

  /*/ Listen to the LogOrganizationRegistered event
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
  }*/
}


