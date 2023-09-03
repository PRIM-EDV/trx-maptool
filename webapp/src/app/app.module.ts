import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PhElementsModule } from './ph-elements/ph-elements.module';
import { SquadComponent } from './dashboard-elements/squad/squad.component';

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
    PhElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
