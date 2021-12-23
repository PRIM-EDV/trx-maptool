import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationModule } from './shared/navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { AppBarModule } from './shared/app-bar/app-bar.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppBarModule,
    AppRoutingModule,
    BrowserModule,
    LoginModule,
    HttpClientModule,
    NavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

