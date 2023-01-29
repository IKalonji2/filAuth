import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayConnectWalletDialog: boolean = false;
  walletConnected: boolean = true;
  connectWalletMessage: string = "Please make sure you are connected to your wallet before you continue...";

  activeIndex: number = 0;
  items: MenuItem[] = [];
  instructions: any = [
    { "step": "Profile", "instruction": "Create Your Organization Profile." },
    { "step": "Access", "instruction": "Create Your Organization Access Rules." },
    { "step": "Assign", "instruction": "Assign Access Rules To Users." },
  ]
  
  constructor(private router: Router, private walletService: WalletService) {}

  ngOnInit() {
    this.items = this.instructions.map((i:any) =>  { return { label: i.step };});
  }

  async navigateToProfile() {
    await this.walletService.connectWallet();
    if (this.walletService.walletConnected == true){
      console.log(this.walletService.walletConnected)
      this.router.navigate(['/profile']);
    } else {
      alert("Please connect a wallet!")
    }
    
  }

  nextInstructionStep() {
    this.activeIndex++;
  }

  previousInstructionStep() {
    this.activeIndex--;
  }
}
