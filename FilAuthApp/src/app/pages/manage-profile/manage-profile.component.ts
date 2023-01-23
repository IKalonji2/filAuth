import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {
  profileConnected: boolean = false;
  displayConnectWalletDialog: boolean = false;
  walletConnected: boolean = false;
  connectWalletMessage: string = "Please make sure you are connected to your wallet before you continue...";

  displayCreateProfileDialog: boolean = false;
  displayUpdateProfileDialog: boolean = false;
  displayRemoveProfileDialog: boolean = false;

  disableEdit: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.connectToWallet();

    if(!this.walletConnected) {
      this.showConnectWalletDialog();
    }

    this.connectToProfile();
  }

  connectToWallet() {
    this.walletConnected = true;
  }

  connectToProfile() {
    this.profileConnected = true;
  }

  navigateToAccess() {
    if(this.walletConnected) {
      this.router.navigate(['/access']);
    } else {
      this.showConnectWalletDialog();
    }
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
