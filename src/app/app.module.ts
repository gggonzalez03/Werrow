import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { BorrowRequestService } from './borrow-request/borrow-request.service';
import { BorrowRequestComponent } from './borrow-request/borrow-request.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreatePostComponent } from './borrow-request/create-post/create-post.component';
import { LoginUserComponent } from './user/login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BorrowRequestComponent,
    CreateUserComponent,
    CreatePostComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, BorrowRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
