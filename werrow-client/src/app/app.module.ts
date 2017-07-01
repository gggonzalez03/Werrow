import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './modules/core/core.module';
import { UserLoginModule } from './modules/user/user-login/user-login.module';
import { UserSignupModule } from './modules/user/user-signup/user-signup.module';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
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
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    HeaderComponent,
    FooterComponent,
    UserProfilePageComponent,
    FeedCardComponent,
    UserProfileHeaderComponent,
    UserProfileRecordComponent,
    SignUpComponent,
    LoginPageComponent,
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
    CoreModule,
    UserLoginModule,
    UserSignupModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
