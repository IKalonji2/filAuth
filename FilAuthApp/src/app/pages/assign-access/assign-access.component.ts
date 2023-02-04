import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/models';
import { AccessControlService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-assign-access',
  templateUrl: './assign-access.component.html',
  styleUrls: ['./assign-access.component.css']
})
export class AssignAccessComponent {

  displayAddUser: boolean = false;
  displayRemoveUser: boolean = false;
  displayConnectWalletDialog: boolean = false;

  users: string[] = [];
  user: User = new User();

  accessRuleName: any = "";

  constructor(private router: Router, private constractService: AccessControlService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state) {
      this.accessRuleName = state['accessRuleName'];
      if(this.accessRuleName){
        this.getUsers();
      }
    }
  }

  getUsers = async () => {
    await this.constractService.getUsers(this.accessRuleName).then((data: any) => this.users = data).catch((e: any) => console.log(e.message));
  }

  addUser = async () => {
    await this.constractService.assignAccess(this.user.address, this.accessRuleName).then(() => this.getUsers());
    this.closeAddUserDialog();
  }

  removeUser = async () => {
    await this.constractService.removeAccess(this.user.address, this.accessRuleName).then(() => this.getUsers()).catch((e: any) => console.log(e.message));
    this.closeRemoveUserDialog();
  }

  openAddUserDialog() {
    this.user = new User();
    this.displayAddUser = true;
  }

  closeAddUserDialog() {
    this.displayAddUser = false;
  }

  openRemoveUserDialog(address: string) {
    this.displayRemoveUser = true;
    this.user.address = address;
  }

  closeRemoveUserDialog() {
    this.displayRemoveUser = false;
  }

}
