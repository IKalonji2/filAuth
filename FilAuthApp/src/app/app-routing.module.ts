import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SetupAccessComponent } from './pages/setup-access/setup-access.component';
import { ManageProfileComponent } from './pages/manage-profile/manage-profile.component';
import { AssignAccessComponent } from './pages/assign-access/assign-access.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ManageProfileComponent },
  { path: 'access', component: SetupAccessComponent },
  { path: 'users', component: AssignAccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }