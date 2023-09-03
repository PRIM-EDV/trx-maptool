import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public view: string = "TACOP";
  public tab: string = "MAP"

  constructor(private readonly backend: BackendService) { }

  ngOnInit(): void {
    this.backend.connect();
  }

}
