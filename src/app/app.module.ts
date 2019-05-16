import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { MapComponent } from './map/map.component';
import { HttpBackendService } from './map/backend/http-backend.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule
  ],
  providers: [HttpBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
