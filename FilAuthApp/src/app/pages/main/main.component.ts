import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ethers } from 'ethers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  walletExist: boolean = false;

  displayConnectWalletDialog: boolean = false;

  messages: string[] = [
    "Please make sure you are connected to your wallet before you continue...",
    "No wallet browser extension found! Download Metamask?"
  ];

  message: string = "";

  provider: any;

  constructor(private router: Router) {
    this.provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  }

  ngOnInit() {
    this.openConnectWalletDialog();
    this.provider.on("chainChanged", (chainId: string) => this.handleConnectionChange());
    this.provider.on("accountsChanged", (accounts: Array<string>) => this.handleConnectionChange());
  }

  connectToWallet = async () => {
    this.displayConnectWalletDialog = await this.provider.send("eth_requestAccounts", []).then(() => {
      this.setOnConnectionChanged();
      return false;
    }).catch((e: any) => {
      return true;
    });
  }

  setOnConnectionChanged() {
    this.provider.on("chainChanged", (chainId: string) => this.handleConnectionChange());
    this.provider.on("accountsChanged", (accounts: Array<string>) => this.handleConnectionChange());
  }

  handleConnectionChange() {
    console.log("Hit")
    this.router.navigate(["main/profile"]);
  }

  downloadMetamask() {
    if(!window.ethereum) {
      window.open("https://metamask.io/download/", "_blank");
    } else {
      this.openConnectWalletDialog();
    }
  }

  openConnectWalletDialog() {
    if(!window.ethereum) {
      this.walletExist = false;
      this.message = this.messages[1];
    } else {
      this.walletExist = true;
      this.message = this.messages[0];
    }
    this.displayConnectWalletDialog = true;
  }

  handleAppDisconnected() {

  }
}
