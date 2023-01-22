import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: MenuItem[] = [];
  displayConnectWalletDialog: boolean = false;
  walletConnected: boolean = true;
  connectWalletMessage: string = "Please make sure you are connected to your wallet before you continue..."
  
  constructor(private router: Router) {}

  navigateToProfile() {
    if(this.walletConnected) {
      this.router.navigate(['/profile']);
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
