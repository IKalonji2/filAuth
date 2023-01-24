import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessRule } from 'src/app/models/models';

@Component({
  selector: 'app-setup-access',
  templateUrl: './setup-access.component.html',
  styleUrls: ['./setup-access.component.css']
})
export class SetupAccessComponent {
  accessRules: AccessRule[] = [];
  accessRule?: AccessRule;

  displayCreateRule: boolean = false;
  displayUpdateRule: boolean = false;
  displayRemoveRule: boolean = false;

  constructor(private router: Router) {}

  navigateToUsers() {
    this.router.navigate(["/users"]);
  }

  createAccessRule() {
    this.accessRules.push(new AccessRule());
    this.closeCreateRuleDialog();
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

  openRemoveDialog() {
    this.displayRemoveRule = true;
  }

  closeRemoveDialog() {
    this.displayRemoveRule = false;
  }
}
