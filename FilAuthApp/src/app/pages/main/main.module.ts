import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

import { MainRoutingModule } from './main-routing.module';
import { ManageProfileComponent } from '../manage-profile/manage-profile.component';
import { AssignAccessComponent } from '../assign-access/assign-access.component';
import { SetupAccessComponent } from '../setup-access/setup-access.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
    ManageProfileComponent,
    AssignAccessComponent,
    SetupAccessComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ButtonModule,
    MenubarModule,
    DialogModule,
    CardModule,
    StepsModule,
    TooltipModule,
    InputTextModule,
    AccordionModule,
    FormsModule,
    CheckboxModule
  ]
})
export class MainModule { }
