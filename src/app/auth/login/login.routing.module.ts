import { LoginComponent } from './login.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const route: Routes =[
    { path: '', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule],
})

export class LoginRouterModule {

}