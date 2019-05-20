import { Component } from '@angular/core';
import { HttpBackendService } from './map/backend/http-backend.service';

@Component({
  selector: 'app-root',
  template: `
    <map [_backend]= backend></map>
  `,
  styles: []
})
export class AppComponent {
  public title = 'rld-maptool';

  constructor(backend: HttpBackendService) {

  }
}
