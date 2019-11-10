import { HomeComponent } from './home.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const route:Routes =[{
    path:'home',component:HomeComponent,
}]



@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule],
})




export class HomeRouterModule{

}