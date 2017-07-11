import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserSettingsMenuModule } from './user-settings-menu/user-settings-menu.module';
import { UserSettingsSectionComponent } from './user-settings-section.component';

const routes: Routes = [
  { path: '', component: UserSettingsSectionComponent},
];

@NgModule({
    imports: [
        UserSettingsMenuModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        UserSettingsSectionComponent
    ],
    providers: [],
})
export class UserSettingsSectionModule { }
