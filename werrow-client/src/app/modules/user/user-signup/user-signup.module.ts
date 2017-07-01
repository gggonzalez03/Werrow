import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SignUpFormComponent } from '../../../components/sign-up-form/sign-up-form.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        SignUpFormComponent
    ],
    declarations: [
        SignUpFormComponent
    ],
    providers: [],
})
export class UserSignupModule { }