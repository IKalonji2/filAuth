import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/models';

@Component({
  selector: 'app-assign-access',
  templateUrl: './assign-access.component.html',
  styleUrls: ['./assign-access.component.css']
})
export class AssignAccessComponent {

  displayAddUser: boolean = false;
  displayRemoveUser: boolean = false;

  users: User[] = [];
  user: User = new User();

  currentUserUUID: string = "";

  accessRuleId: any = "";

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state) {
      this.accessRuleId = state['accessRuleId'];
      if(this.accessRuleId){
        this.loadUsers(this.accessRuleId);
      }
    }
  }

  loadUsers(accessRuleId: string) {
    //Service call
  }

  addUser() {
    this.users.push(this.user);
    this.closeAddUserDialog();
  }

  removeUser() {
    let index = this.users.findIndex(u => u.uuid === this.currentUserUUID);
    if(index > -1) {
      this.users.splice(index, 1);
    }
    this.closeRemoveUserDialog();
  }

  openAddUserDialog() {
    this.displayAddUser = true;
    this.user = new User();
  }

  closeAddUserDialog() {
    this.displayAddUser = false;
    this.user = new User();
  }

  openRemoveUserDialog(uuid: string) {
    this.displayRemoveUser = true;
    this.currentUserUUID = uuid;
  }

  closeRemoveUserDialog() {
    this.displayRemoveUser = false;
    this.currentUserUUID = "";
  }

}
