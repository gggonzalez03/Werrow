import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './components/login-form/login-form.component';

// import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

const routes: Routes = [
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule'
    },
    {
        path: 'home',
        loadChildren: './modules/borrow-post/borrow-post-section/borrow-post-section.module#BorrowPostSectionModule'
    },
    {
        path: '**',
        redirectTo: 'user/login'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }