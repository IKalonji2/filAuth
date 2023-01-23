import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup-access',
  templateUrl: './setup-access.component.html',
  styleUrls: ['./setup-access.component.css']
})
export class SetupAccessComponent {
  displayCreateRule: boolean = false;
  displayUpdateRule: boolean = false;
  displayRemoveRule: boolean = false;

  constructor(private router: Router) {}

  navigateToUsers() {
    this.router.navigate(["/users"]);
  }

  openRemoveDialog() {
    this.displayRemoveRule = true;
  }

  closeRemoveDialog() {
    this.displayRemoveRule = false;
  }

  openCreateRuleDialog() {
    this.displayCreateRule = true;
  }

  closeCreateRuleDialog() {
    this.displayCreateRule = false;
  }

  openUpdateRuleDialog() {
    this.displayUpdateRule = true;
  }

  closeUpdateRuleDialog() {
    this.displayUpdateRule = false;
  }
}
