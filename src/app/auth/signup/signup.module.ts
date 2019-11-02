import { SignupRouterModule } from './signup.routing.module';
import { SignupComponent } from './signup.component';
import { NgModule } from '@angular/core';

@NgModule ({
    declarations:[SignupComponent],
    imports:[SignupRouterModule],
})

export class SignupModule {

}