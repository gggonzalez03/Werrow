import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginFormComponent } from '../../../components/login-form/login-form.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        LoginFormComponent
    ],
    declarations: [
        LoginFormComponent
    ],
    providers: [],
})
export class UserLoginModule { }
