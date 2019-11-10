import { LeavesComponent } from './leaves.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';



const route:Routes =[{
    path:'leaves',component:LeavesComponent,
}]


@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule],
})



export class LeavesRouterModule{

}