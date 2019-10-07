import { HomeService } from './home/home.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
