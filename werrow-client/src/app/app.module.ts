import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './modules/core/core.module';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileHeaderComponent } from './components/user-profile-header/user-profile-header.component';
import { UserProfileRecordComponent } from './components/user-profile-record/user-profile-record.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileHeaderComponent,
    UserProfileRecordComponent,
    LogoutButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
