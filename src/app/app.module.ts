import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { FormsModule } from '@angular/forms';
import { LogRegWrapperComponent } from './components/auth/log-reg-wrapper/log-reg-wrapper.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AuthorComponent } from './pages/author/author.component';
import { AlluserComponent } from './pages/alluser/alluser.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import {DatePipe} from '@angular/common';
import { CustomerViewComponent } from './pages/browse/customer-view/customer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    BrowseComponent,
    LogRegWrapperComponent,
    LoadingComponent,
    AuthorComponent,
    AlluserComponent,
    ProfileComponent,
    AddItemComponent,
    CustomerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
