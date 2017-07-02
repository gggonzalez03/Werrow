import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileRecordComponent } from './user-profile-record.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        UserProfileRecordComponent,
        RouterModule
    ],
    declarations: [
        UserProfileRecordComponent
    ],
    providers: [],
})
export class UserProfileRecordModule { }