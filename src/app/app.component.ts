import { Component } from '@angular/core';
import { HttpBackendService } from './map/backend/http-backend.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public title = 'rld-maptool';

  constructor(public backend: HttpBackendService) {
  }
}
