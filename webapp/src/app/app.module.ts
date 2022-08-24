import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PhElementsModule } from './ph-elements/ph-elements.module';

declare global {
  interface Window {
    __env: {
      rldServerHostname: string,
      rldServerPort: string
    }
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PhElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
