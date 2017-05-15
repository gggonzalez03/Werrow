import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { BorrowRequestService } from './borrow-request/borrow-request.service';
import { BorrowRequestComponent } from './borrow-request/borrow-request.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreatePostComponent } from './borrow-request/create-post/create-post.component';
import { LoginUserComponent } from './user/login-user/login-user.component';


@NgModule({
  declarations: [
    AppComponent,
    BorrowRequestComponent,
    CreateUserComponent,
    CreatePostComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
        path: 'home',
        component: BorrowRequestComponent
      }
    ])
  ],
  providers: [UserService, BorrowRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
