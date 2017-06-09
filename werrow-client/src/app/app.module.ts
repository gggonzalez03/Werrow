import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { BorrowRequestService } from './borrow-request/borrow-request.service';
import { GoogleMapService } from './google-map/google-map.service';
import { HeaderService } from './header/header.service';
import { UserProfileService } from './user-profile/user-profile.service'
import { BorrowRequestComponent } from './borrow-request/borrow-request.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreatePostComponent } from './borrow-request/create-post/create-post.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { ShowPostComponent } from './borrow-request/show-post/show-post.component';
import { LogoutUserComponent } from './user/logout-user/logout-user.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    BorrowRequestComponent,
    CreateUserComponent,
    CreatePostComponent,
    LoginUserComponent,
    ShowPostComponent,
    LogoutUserComponent,
    GoogleMapComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'signup',
        component: CreateUserComponent
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
      }
    ])
  ],
  providers: [
    UserService,
    BorrowRequestService,
    GoogleMapService,
    HeaderService,
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
