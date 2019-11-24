import { LoginModule } from './login/login.module';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';




export const route:Routes =[{
    path:'auth',
    component:AuthComponent,
    children:[
     
        {
            path:'login',
            loadChildren:() =>import('./login/login.module').then (mod=>mod.LoginModule)
        },

        {
            path:'signup',
            loadChildren:() => import('./signup/signup.module').then (mod =>mod.SignupModule)
        }
    ]
}]


   






@NgModule ({
    imports:[RouterModule.forChild(route)], 
    exports:[RouterModule],
})


export class AuthRouterModule {

}