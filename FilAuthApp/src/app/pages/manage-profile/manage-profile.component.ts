import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

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

  showConnectWalletDialog() {
    this.displayConnectWalletDialog = true;
  }

  closeConnectWalletDialog() {
    this.displayConnectWalletDialog = false;
  }
}
