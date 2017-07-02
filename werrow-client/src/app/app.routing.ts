import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

const routes: Routes = [
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule'
    },
    {
        path: 'home',
        loadChildren: './modules/borrow-post/borrow-post-section/borrow-post-section.module#BorrowPostSectionModule'
    }
    // ,
    // {
    //     path: 'profile',
    //     component: UserProfilePageComponent
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }