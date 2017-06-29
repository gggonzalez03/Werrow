import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

const routes: Routes = [
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'home',
        component: FeedPageComponent
    },
    {
        path: 'profile',
        component: UserProfilePageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }