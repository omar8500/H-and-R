import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';


// create routes for auth and pass into forROOT RouterMoule.forRoot(routes)
export const routes: Routes = [{

    path: 'auth',

    component: AuthComponent,
    // canActivate: [AuthGuard],

    children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        {
            path: 'login',
            loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
        }
        ,
        {
            path: 'about',
            loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule)

        }
        ,
        {
            path: 'contact',
            loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule)
        }
    ]



}];

@NgModule ({
    imports:[RouterModule], //create route over here
    exports:[RouterModule],
})



// No extra spaces
export class AuthRouterModule {

}