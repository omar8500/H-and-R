import { SignupComponent } from './signup.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from '../auth.component';

const route:Routes =[{
  path:'auth',component:SignupComponent,
}]





@NgModule({
    imports:[RouterModule.forChild(route)], 
    exports:[RouterModule],
})

export class SignupRouterModule {

}