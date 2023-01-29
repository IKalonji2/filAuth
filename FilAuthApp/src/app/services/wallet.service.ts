import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  metamaskWallet:string="";
  walletConnected:boolean=false;

  constructor() { }

  async connectWallet(){
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}).catch((err:any) => {
        if (err.code === 4001){
          alert("Metamask not connected");
        }
        alert("Metamask connection error");
      });
      this.metamaskWallet = accounts[0];
      console.log(this.metamaskWallet);
      this.walletConnected = true;
    }else {
      alert("Metamask not installed");
    }
  }
}
