import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from 'src/app/models/models';
import { ethers } from 'ethers';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { AccessControlService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {

  organization?: Organization;
  organizationName: string = "";

  noAccessRules: number = 0;
  noUsers: number = 0;

  connected: boolean = true;

  displayCreateProfileDialog: boolean = false;
  displayUpdateProfileDialog: boolean = false;
  displayRemoveProfileDialog: boolean = false;

  disableEdit: boolean = true;

  provider: any;
  address: string = "";

  constructor(private router: Router, private contractService: AccessControlService) {
    this.provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  }

  ngOnInit() {
    this.connectToOrganization();
  }

  connectToOrganization = async () => {
    await this.provider.send("eth_requestAccounts", []).then(async (data: any) => {
      this.address = data[0];
      this.contractService.isOrgRegistered(this.address).then(async (data) => {
        this.connected = data
      });
      await this.getStatistics();
    }).catch((e: any) => {
      this.connected = false;
    });
  }

  getStatistics = async () => {
    await this.contractService.getAccessLevels().then((data) => this.noAccessRules = data).catch(() => this.noAccessRules = 0);
    await this.contractService.getAccessLevels().then((data) => this.noUsers = data).catch(() => this.noUsers = 0);
  }

  createOrganization = async () => {
    await this.contractService.registerOrganization(this.organizationName).then(() => {
      this.connectToOrganization();
    }).catch((e:any) => {
      console.log(e.message);
    });
    this.closeCreateProfileDialog();
    this.connected = true;
  }

  updateOrganization() {
    this.closeUpdateProfileDialog();
    this.disableEdit = true;
  }

  removeOrganization() {
    if(this.organization) {
      this.organization = new Organization("");
    }
    this.connectToOrganization();
    this.closeRemoveProfileDialog();
  }

  navigateToAccess() {
    this.router.navigate(['main/access']);
  }

  showCreateProfileDialog() {
    this.displayCreateProfileDialog = true;
  }

  closeCreateProfileDialog() {
    this.displayCreateProfileDialog = false;
  }

  showUpdateProfileDialog() {
    this.displayUpdateProfileDialog = true;
  }

  closeUpdateProfileDialog() {
    this.displayUpdateProfileDialog = false;
  }

  showRemoveProfileDialog() {
    this.displayRemoveProfileDialog = true;
  }

  closeRemoveProfileDialog() {
    this.displayRemoveProfileDialog = false;
  }
}
