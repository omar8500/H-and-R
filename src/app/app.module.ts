import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './Pages/home/home.component';
import { LeavesComponent } from './Pages/leaves/leaves.component';
import { UserProfileComponent } from './Pages/user-profile/user-profile.component';
import { CoreComponent } from './core/core.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    PagesComponent,
    HomeComponent,
    LeavesComponent,
    UserProfileComponent,
    CoreComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
