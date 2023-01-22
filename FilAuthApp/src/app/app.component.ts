import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fil Auth App';

  constructor(private router: Router) {}

  navigateToProfile() {
    this.router.navigate(['/access']);
  }
}
