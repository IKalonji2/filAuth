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
    { 
      step: "Profile", 
      instruction: "Create Your Organization Profile.",
      image: "../../../assets/createprofile.PNG"
    },
    { 
      step: "Access",
      instruction: "Create Your Organization Access Rules",
      image: "../../../assets/manageaccess.PNG"
    },
    { 
      step: "Assign",
      instruction: "Assign Access Rules To Users.",
      image: "../../../assets/assignaccess.PNG"
    },
  ]
  
  constructor(private router: Router, private walletService: WalletService) {}

  ngOnInit() {
    this.items = this.instructions.map((i:any) =>  { return { label: i.step };});
  }

  navigateToProfile() {
    this.router.navigate(['/main']);
  }

  nextInstructionStep() {
    this.activeIndex++;
  }

  previousInstructionStep() {
    this.activeIndex--;
  }
}
