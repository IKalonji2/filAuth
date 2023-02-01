import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageProfileComponent } from './pages/manage-profile/manage-profile.component';
import { SetupAccessComponent } from './pages/setup-access/setup-access.component';
import { AssignAccessComponent } from './pages/assign-access/assign-access.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageProfileComponent,
    SetupAccessComponent,
    AssignAccessComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
