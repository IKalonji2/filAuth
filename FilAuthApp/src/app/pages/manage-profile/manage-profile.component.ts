import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from 'src/app/models/models';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {

  organization: Organization;

  profileConnected: boolean = false;
  displayConnectWalletDialog: boolean = false;
  walletConnected: boolean = false;
  connectWalletMessage: string = "Please make sure you are connected to your wallet before you continue...";

  displayCreateProfileDialog: boolean = false;
  displayUpdateProfileDialog: boolean = false;
  displayRemoveProfileDialog: boolean = false;

  disableEdit: boolean = true;

  constructor(private router: Router) {
    this.organization = this.getOrganizationDetails();
  }

  ngOnInit() {
    this.connectToWallet();

    if(!this.walletConnected) {
      this.showConnectWalletDialog();
    } else {
      this.connectToProfile();
    }
  }

  getOrganizationDetails() {
    return {
      address: "HJF84FJHV5RKJV8RH4654E",
      name : "Fil Auth Company Pty Ltd.",
      country : "South Africa",
      province : "Gauteng",
      city : "Johannesburg",
      zip : "2092",
      statistics : this.getOrganizationStatistics()
    };
  }

  getOrganizationStatistics() {
    return {
      systems : 26,
      rules : 79,
      users : 1188
    };
  }

  connectToWallet() {
    this.walletConnected = true;
  }

  navigateToAccess() {
    if(this.walletConnected) {
      this.router.navigate(['/access'], { state: { profileId: this.organization.address }});
    } else {
      this.showConnectWalletDialog();
    }
  }

  connectToProfile() {
    if(this.organization?.address) {
      this.profileConnected = true;
    } else {
      this.organization = new Organization();
      this.profileConnected = false;
    }
  }

  createOrganization() {
    this.organization.address = "HJF84FJHV5RKJV8RH4654E";
    this.closeCreateProfileDialog();
    this.connectToProfile();
  }

  updateOrganization() {
    this.closeUpdateProfileDialog();
    this.disableEdit = true;
  }

  removeOrganization() {
    if(this.organization) {
      this.organization = new Organization();
    }
    this.connectToProfile();
    this.closeRemoveProfileDialog();
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

  showConnectWalletDialog() {
    this.displayConnectWalletDialog = true;
  }

  closeConnectWalletDialog() {
    this.displayConnectWalletDialog = false;
  }
}
