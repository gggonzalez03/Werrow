import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { UserService } from './pages/user/user.service';
import { SignUpService } from './pages/sign-up-page/sign-up-page.service';
import { LoginPageService } from './pages/login-page/login-page.service';
import { BorrowRequestService } from './pages/borrow-request/borrow-request.service';
import { GoogleMapService } from './google-map/google-map.service';
import { HeaderService } from './header/header.service';
import { UserProfileService } from './pages/user-profile/user-profile.service'
import { CreatePostService } from './pages/borrow-request/create-post/create-post.service';
import { ShowPostService } from './pages/borrow-request/show-post/show-post.service';
import { BorrowRequestComponent } from './pages/borrow-request/borrow-request.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CreatePostComponent } from './pages/borrow-request/create-post/create-post.component';
import { ShowPostComponent } from './pages/borrow-request/show-post/show-post.component';
import { LogoutUserComponent } from './pages/user/logout-user/logout-user.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { UserProfileHeaderComponent } from './pages/user-profile/user-profile-header/user-profile-header.component';
import { UserProfileRecordComponent } from './pages/user-profile/user-profile-record/user-profile-record.component';
import { SignUpComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BorrowRequestComponent,
    SignUpFormComponent,
    CreatePostComponent,
    ShowPostComponent,
    LogoutUserComponent,
    GoogleMapComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    FeedCardComponent,
    UserProfileHeaderComponent,
    UserProfileRecordComponent,
    SignUpComponent,
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'signup',
        component: SignUpComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'logout',
        component: LogoutUserComponent
      },
      {
        path: 'home',
        component: BorrowRequestComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      }
    ])
  ],
  providers: [
    UserService,
    SignUpService,
    LoginPageService,
    BorrowRequestService,
    GoogleMapService,
    HeaderService,
    UserProfileService,
    CreatePostService,
    ShowPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
