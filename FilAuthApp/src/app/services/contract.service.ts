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
    let fee = ethers.BigNumber.from(10000);
    // Call the registerOrganization function
    let transactions = await this.contract.registerOrganization(orgName, { value: fee });
    transactions.wait()
    return transactions
  }

  async createAccessLevel(accessLevel: string) {
    // Call the createAccessLevel function
    let transactions = await this.contract.createAccessLevel(accessLevel);
    transactions.wait();
    return transactions;
  }

  async assignAccess(user: string, accessLevel: string) {
    // Call the assignAccess function
    let transactions = await this.contract.assignAccessToUser(user, accessLevel);
    transactions.wait();
    return transactions;
  }

  async removeAccess(user: string, accessLevel: string) {
    // Call the removeAccess function
    let transactions = await this.contract.removeAccess(user, accessLevel);
    transactions.wait();
    return transactions;
  }

  async isOrgRegistered(orgAddress: string) {
    let transactions = await this.contract.isOrgRegistered(orgAddress);
    console.log(transactions)
    //returns a bool value
    return transactions;
  }

  async getNumberOfUsers() {
    let transactions = await this.contract.returnNumberOfUsers();
    console.log(transactions)
    return transactions;
  }

  async getNumberOfAccessRules() {
    let transactions = await this.contract.returnNumberOfAccessRules();
    console.log(transactions)
    return transactions;
  }

  async getUsers(accessLevelName: string) {
    // Call the getAccessLevelsList function
    let transactions = await this.contract.getUsers(accessLevelName);
    console.log(transactions);
    return transactions;
  }

  async getAccessLevels() {
    // Call the getAccessLevelsList function
    let transactions = await this.contract.getAccessLevels();
    console.log(transactions)
    return transactions;
  }
}


