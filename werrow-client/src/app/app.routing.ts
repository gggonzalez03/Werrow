import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

const routes: Routes = [
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule'
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