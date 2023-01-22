import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent {
  constructor(private router: Router) {}

  navigateToAccess() {
    this.router.navigate(["/access"]);
  }
}
