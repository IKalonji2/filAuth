import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ManageAccessComponent } from './pages/manage-access/manage-access.component';
import { ManageProfileComponent } from './pages/manage-profile/manage-profile.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ManageProfileComponent },
  { path: 'access', component: ManageAccessComponent },
  { path: 'users', component: ManageUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }