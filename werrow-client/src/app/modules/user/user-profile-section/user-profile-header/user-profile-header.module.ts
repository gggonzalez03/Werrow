import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserProfileHeaderComponent } from './user-profile-header.component';

const routes: Routes = [
    {path: "settings", redirectTo: "/user/settings/menu", pathMatch: 'full'}
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
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
