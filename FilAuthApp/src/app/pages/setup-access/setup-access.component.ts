import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup-access',
  templateUrl: './setup-access.component.html',
  styleUrls: ['./setup-access.component.css']
})
export class SetupAccessComponent {
  constructor(private router: Router) {}

  navigateToUsers() {
    this.router.navigate(["/users"]);
  }
}
