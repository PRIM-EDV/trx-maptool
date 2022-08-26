import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { PhContextMenuComponent } from 'src/app/ph-elements/ph-context-menu/ph-context-menu.component';
import { PhWindowComponent } from 'src/app/ph-elements/ph-window/ph-window.component';

@Component({
  selector: 'situation-map',
  templateUrl: './situation-map.component.html',
  styleUrls: ['./situation-map.component.scss']
})
export class SituationMapComponent implements OnInit, AfterViewInit {

    @ViewChild("contextMenu") contextMenu!: PhContextMenuComponent;
    @ViewChild("createPopup") createPopup!: PhWindowComponent;
    @ViewChild("editPopup") editPopup!: PhWindowComponent;

    private position = {x: 0, y: 0};  

    constructor(private readonly backend: BackendService) { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.createPopup.hide();
        this.editPopup.hide();
        this.contextMenu.close();
    }

    public openContextMenu(ev: {x: number, y: number}) {
        this.position = ev;
        this.contextMenu.open(ev);
    }

    public openUnitCreateMenu() {
        this.createPopup.ref.nativeElement.style.top = `${this.position.y}px`;
        this.createPopup.ref.nativeElement.style.left = `${this.position.x}px`;
        this.contextMenu.close();
        this.createPopup.show();
    }

    public openUnitEditMenu() {
        
    }

}
