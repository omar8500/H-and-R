import { AuthRouterModule } from './auth.routing.module';
import { AuthComponent } from './../auth/auth.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations:[AuthComponent],
    imports:[AuthRouterModule],
})

export class AuthModule{

}