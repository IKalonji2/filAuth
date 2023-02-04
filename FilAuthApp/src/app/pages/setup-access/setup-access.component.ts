import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessRule, Link } from 'src/app/models/models';

@Component({
  selector: 'app-setup-access',
  templateUrl: './setup-access.component.html',
  styleUrls: ['./setup-access.component.css']
})
export class SetupAccessComponent {
  accessRules: AccessRule[] = [];
  accessRule: AccessRule = new AccessRule();
  link: Link = new Link();

  address: string = "";

  currentRuleUUID: string = "";

  displayConnectWalletDialog: boolean = false;
  displayCreateRule: boolean = false;
  displayUpdateRule: boolean = false;
  displayRemoveRule: boolean = false;

  constructor(private router: Router) {
    this.getAddress();
  }

  getAddress() {
    this.address = "dummy";
  }

  getAccessRules() {

  }

  createAccessRule() {
    this.accessRules.push(this.accessRule);
    this.closeCreateRuleDialog();
    this.accessRule = new AccessRule();
  }

  removeAccessRule() {
    let index = this.accessRules.findIndex(ar => ar.uuid === this.currentRuleUUID);
    if(index > -1) {
      this.accessRules.splice(index, 1);
    }
    this.closeRemoveDialog();
  }

  updateAccessRule() {
    let index = this.accessRules.findIndex(ar => ar.uuid === this.currentRuleUUID);
    if(index > -1) {
      this.accessRules[index] = this.accessRule;
    }
    this.closeUpdateRuleDialog();
  }

  createLink() {
    this.accessRule.links.push(this.link);
    this.link = new Link();
  }

  discardLink(uuid: string) {
    let index = this.accessRule.links.findIndex(l => l.uuid === uuid);
    if(index > -1) {
      this.accessRule.links.splice(index, 1);
    }
  }

  navigateToUsers(uuid: string) {
    this.router.navigate(["main/assign"], { state: { accessRuleId: uuid }});
  }

  openCreateRuleDialog() {
    this.accessRule = new AccessRule();
    this.link = new Link();
    this.displayCreateRule = true;
  }

  openUpdateRuleDialog(uuid: string) {
    this.displayUpdateRule = true;
    this.currentRuleUUID = uuid;
    let index = this.accessRules.findIndex(ar => ar.uuid === uuid);
    if(index > -1) {
      this.accessRule = this.accessRules[index];
    }
  }

  openRemoveDialog(uuid: string) {
    this.displayRemoveRule = true;
    this.currentRuleUUID = uuid;
  }

  closeCreateRuleDialog() {
    this.displayCreateRule = false;
    this.resetData();
  }

  closeUpdateRuleDialog() {
    this.displayUpdateRule = false;
    this.resetData();
  }

  closeRemoveDialog() {
    this.displayRemoveRule = false;
    this.resetData();
  }

  resetData() {
    this.accessRule = new AccessRule();
    this.link = new Link();
    this.currentRuleUUID = "";
  }
}
