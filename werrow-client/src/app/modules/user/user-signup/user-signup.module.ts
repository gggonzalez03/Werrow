import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SignUpFormComponent } from '../../../components/sign-up-form/sign-up-form.component';

const routes: Routes = [
  { path: '', component: SignUpFormComponent},
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        SignUpFormComponent,
        RouterModule
    ],
    declarations: [
        SignUpFormComponent
    ],
    providers: [],
})
export class UserSignupModule { }