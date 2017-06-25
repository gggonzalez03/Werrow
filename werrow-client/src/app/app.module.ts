import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpService } from './pages/sign-up-page/sign-up-page.service';
import { LoginPageService } from './pages/login-page/login-page.service';
import { GoogleMapService } from './components/google-map/google-map.service';
import { UserProfilePageService } from './pages/user-profile-page/user-profile-page.service';
import { CreatePostFormService } from './components/create-post-form/create-post-form.service';
import { FeedPageService } from './pages/feed-page/feed-page.service';
import { UserService } from './services/user.service';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { UserProfileHeaderComponent } from './components/user-profile-header/user-profile-header.component';
import { UserProfileRecordComponent } from './components/user-profile-record/user-profile-record.component';
import { SignUpComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { CreatePostFormComponent } from './components/create-post-form/create-post-form.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { PostCommentCardComponent } from './components/post-comment-card/post-comment-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    GoogleMapComponent,
    HeaderComponent,
    FooterComponent,
    UserProfilePageComponent,
    FeedCardComponent,
    UserProfileHeaderComponent,
    UserProfileRecordComponent,
    SignUpComponent,
    LoginPageComponent,
    LoginFormComponent,
    LogoutButtonComponent,
    CreatePostFormComponent,
    FeedPageComponent,
    PostCommentCardComponent
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
        path: 'home',
        component: FeedPageComponent
      },
      {
        path: 'profile',
        component: UserProfilePageComponent
      }
    ])
  ],
  providers: [
    SignUpService,
    LoginPageService,
    GoogleMapService,
    UserProfilePageService,
    CreatePostFormService,
    FeedPageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
