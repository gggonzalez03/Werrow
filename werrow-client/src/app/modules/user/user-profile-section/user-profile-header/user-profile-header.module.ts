import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileHeaderComponent } from './user-profile-header.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        UserProfileHeaderComponent,
        RouterModule
    ],
    declarations: [
        UserProfileHeaderComponent
    ],
    providers: [],
})
export class UserProfileHeaderModule { }
