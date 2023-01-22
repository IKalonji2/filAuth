import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageProfileComponent } from './pages/manage-profile/manage-profile.component';
import { ManageAccessComponent } from './pages/manage-access/manage-access.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageProfileComponent,
    ManageAccessComponent,
    ManageUsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
