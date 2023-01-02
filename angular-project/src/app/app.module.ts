import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterCompComponent } from './components/footer-comp/footer-comp.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    LoginComponent,
    ErrorPageComponent,
    UserManagementComponent,
    MenuComponent,
    FooterCompComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
