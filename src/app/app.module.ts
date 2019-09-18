import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { MapModule } from './map/map.module';
import { WebsocketBackendService } from './map/backend/websocket-backend.service';

const wsConfig: SocketIoConfig = require('../config/webserver.config.json');

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MapModule,
    SocketIoModule.forRoot(wsConfig)
  ],
  providers: [WebsocketBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
