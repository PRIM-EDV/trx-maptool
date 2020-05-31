import { Component } from '@angular/core';
import { WebsocketBackendService } from './components/map/backend/websocket-backend.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public title = 'rld-maptool';

  constructor(public backend: WebsocketBackendService) {
  }
}
