import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule } from './components/map/map.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const wsConfig: SocketIoConfig = { 
  "url": "http://192.168.178.59:3000", 
  "options": {} 
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MapModule,
    SocketIoModule.forRoot(wsConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

