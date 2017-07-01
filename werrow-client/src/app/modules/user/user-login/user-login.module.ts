import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginFormComponent } from '../../../components/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent},
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        LoginFormComponent,
        RouterModule
    ],
    declarations: [
        LoginFormComponent
    ],
    providers: [],
})
export class UserLoginModule { }
