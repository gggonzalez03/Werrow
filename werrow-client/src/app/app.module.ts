import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { UserService } from './pages/user/user.service';
import { SignUpService } from './pages/sign-up/sign-up.service';
import { BorrowRequestService } from './pages/borrow-request/borrow-request.service';
import { GoogleMapService } from './google-map/google-map.service';
import { HeaderService } from './header/header.service';
import { UserProfileService } from './pages/user-profile/user-profile.service'
import { CreatePostService } from './pages/borrow-request/create-post/create-post.service';
import { ShowPostService } from './pages/borrow-request/show-post/show-post.service';
import { BorrowRequestComponent } from './pages/borrow-request/borrow-request.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { CreatePostComponent } from './pages/borrow-request/create-post/create-post.component';
import { LoginUserComponent } from './pages/user/login-user/login-user.component';
import { ShowPostComponent } from './pages/borrow-request/show-post/show-post.component';
import { LogoutUserComponent } from './pages/user/logout-user/logout-user.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { UserProfileHeaderComponent } from './pages/user-profile/user-profile-header/user-profile-header.component';
import { UserProfileRecordComponent } from './pages/user-profile/user-profile-record/user-profile-record.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    BorrowRequestComponent,
    SignUpFormComponent,
    CreatePostComponent,
    LoginUserComponent,
    ShowPostComponent,
    LogoutUserComponent,
    GoogleMapComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    FeedCardComponent,
    UserProfileHeaderComponent,
    UserProfileRecordComponent,
    SignUpComponent
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
        component: LoginUserComponent
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
