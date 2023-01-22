import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-access',
  templateUrl: './manage-access.component.html',
  styleUrls: ['./manage-access.component.css']
})
export class ManageAccessComponent {
  constructor(private router: Router) {}

  navigateToUsers() {
    this.router.navigate(["/users"]);
  }
}
