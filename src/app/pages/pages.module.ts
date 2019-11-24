import { PagesRouterModule } from './pages.routing-module';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';



@NgModule({
    imports:[PagesRouterModule],
    declarations:[PagesComponent],
    exports:[PagesComponent],
})







export class PagesModule {

}