import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BackendService } from './backend/backend.service';
import { PhElementsModule } from 'lib/ph-elements/ph-elements.module';
import { OverlayComponent } from "./overlay/overlay.component";


declare global {
  interface Window {
    __env: {
      maptoolServerHostname: string,
      maptoolServerPort: string
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    PhElementsModule,
    OverlayComponent
],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
