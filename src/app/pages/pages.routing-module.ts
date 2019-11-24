import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';


export const route:Routes =[{
    path:'pages',
    component:PagesComponent,


children :[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {
          path:'home',
          loadChildren:() =>  import('./home/home.module').then(mod => mod.HomeModule)
      },

      {
        path:'leaves',
          loadChildren:() => import('./leaves/leaves.module').then(mod => mod.LeavesModule)
        
      },

      {
        path:'userprofile',
         loadChildren:() => import ('./userprofile/userprofile.module') .then (mod => mod.UserprofileModule)
      }

]


}];





@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})



export class PagesRouterModule {
             
}