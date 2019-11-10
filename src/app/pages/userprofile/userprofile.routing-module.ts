import { UserProfileComponent } from './userprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const route:Routes =[{
    path:'',component:UserProfileComponent,
}]



@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})





export class UserProfileRouterModule {

}