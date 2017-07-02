import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginModule } from './user-login/user-login.module';
import { UserSignupModule } from './user-signup/user-signup.module';
import { UserProfileSectionModule } from './user-profile-section/user-profile-section.module';

const routes: Routes = [
  { path: 'login', loadChildren: './user-login/user-login.module#UserLoginModule'},
  { path: 'signup', loadChildren: './user-signup/user-signup.module#UserSignupModule'},
  { path: 'profile', loadChildren: './user-profile-section/user-profile-section.module#UserProfileSectionModule'}
];

@NgModule({
    imports: [
        UserLoginModule,
        UserSignupModule,
        UserProfileSectionModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class UserModule { }
