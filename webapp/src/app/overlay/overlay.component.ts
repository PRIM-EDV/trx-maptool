import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {

    @HostBinding('style.display') public display: string = 'none';
    
    header: string = 'System Power Error';
    message: string = 'A critical power loss within the section has been detected. The system is shutting down to prevent data loss and hardware damage. Further information on the problem is collected and will be sent to the technical support section and system administrator. Please remain patient and wait for the problem beeing resolved. ';

    public open() {
        this.display = 'unset';
    }

    public close() {
        this.display = 'none';
    }
}
