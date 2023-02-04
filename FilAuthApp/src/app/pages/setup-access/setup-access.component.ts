import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessRule, Link } from 'src/app/models/models';
import { AccessControlService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-setup-access',
  templateUrl: './setup-access.component.html',
  styleUrls: ['./setup-access.component.css']
})
export class SetupAccessComponent {
  accessRules: string[] = [];
  accessRule: AccessRule = new AccessRule();
  link: Link = new Link();

  provider: any;
  address: string = "";

  currentRuleUUID: string = "";

  displayCreateRule: boolean = false;
  displayUpdateRule: boolean = false;
  displayRemoveRule: boolean = false;

  constructor(private router: Router, private contractService: AccessControlService) {
    this.getAddress();
  }

  getAddress() {
    this.address = "dummy";
  }

  getAccessRules = async () => {
    await this.contractService.getAccessLevels().then((data => this.accessRules = data));
  }

  createAccessRule = async () => {
    await this.contractService.createAccessLevel(this.accessRule.description).then(() => {
      this.getAccessRules();
    }).catch((e:any) => {
      console.log(e.message);
    });
    this.accessRules.push(this.accessRule.description);
    this.closeCreateRuleDialog();
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

  navigateToUsers(rule: string) {
    this.router.navigate(["main/assign"], { state: { accessRuleName: rule }});
  }

  openCreateRuleDialog() {
    this.accessRule = new AccessRule();
    this.link = new Link();
    this.displayCreateRule = true;
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
