import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignAccessComponent } from '../assign-access/assign-access.component';
import { ManageProfileComponent } from '../manage-profile/manage-profile.component';
import { SetupAccessComponent } from '../setup-access/setup-access.component'
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'assign', component: AssignAccessComponent },
      { path: 'access', component: SetupAccessComponent },
      { path: 'profile', component: ManageProfileComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
