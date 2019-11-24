import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { LoginRouterModule } from './login.routing.module';

@NgModule({
    declarations:[LoginComponent],
    imports:[LoginRouterModule],
    exports: [LoginComponent],
})

export class LoginModule {

}