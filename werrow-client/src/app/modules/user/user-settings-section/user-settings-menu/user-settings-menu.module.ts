import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSettingsProfileComponent } from './user-settings-profile/user-settings-profile.component';
import { UserSettingsMenuComponent } from './user-settings-menu.component';

const routes: Routes = [
    {
        path: 'menu',
        component: UserSettingsMenuComponent,
        children: [
            {
                path: 'profile',
                component: UserSettingsProfileComponent,
                outlet: 'settings-menu'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        UserSettingsMenuComponent,
        UserSettingsProfileComponent
    ],
    providers: [],
})
export class UserSettingsMenuModule { }
