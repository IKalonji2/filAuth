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
  user?: User;

  accessRuleId: any = "";

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state) {
      this.accessRuleId = state['accessRuleId'];
      if(this.accessRuleId){
        this.loadUsers(this.accessRuleId);
      }
    }
    console.log(this.accessRuleId)
  }

  loadUsers(accessRuleId: string) {
    //Service call
  }

  openAddUserDialog() {
    this.displayAddUser = true;
  }

  closeAddUserDialog() {
    this.displayAddUser = false;
  }

  openRemoveUserDialog(uuid: string) {
    this.displayRemoveUser = true;
  }

  closeRemoveUserDialog() {
    this.displayRemoveUser = false;
  }

}
