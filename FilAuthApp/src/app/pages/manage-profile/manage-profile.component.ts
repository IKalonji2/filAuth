import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from 'src/app/models/models';
import { ethers } from 'ethers';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {

  organization: Organization;

  profileConnected: boolean = false;

  displayCreateProfileDialog: boolean = false;
  displayUpdateProfileDialog: boolean = false;
  displayRemoveProfileDialog: boolean = false;

  disableEdit: boolean = true;

  constructor(private router: Router, private profileService: ProfileService) {
    this.organization = new Organization("");
  }

  ngOnInit() {
    this.connectToProfile();
  }

  connectToProfile() {
    this.getOrganization();
    if(this.organization?.address) {
      this.profileConnected = true;
    } else {
      this.organization = new Organization("");
      this.profileConnected = false;
    }
  }

  getOrganization = async () => {
    await this.profileService.get("dummy").then(data => this.organization = data.data)
  }

  createOrganization() {
    this.closeCreateProfileDialog();
    this.connectToProfile();
  }

  updateOrganization() {
    this.closeUpdateProfileDialog();
    this.disableEdit = true;
  }

  removeOrganization() {
    if(this.organization) {
      this.organization = new Organization("");
    }
    this.connectToProfile();
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
