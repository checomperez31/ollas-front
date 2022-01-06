import { Component } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-tipo-selector',
    templateUrl: 'tipo-selector.component.html'
})
export class TipoSelectorComponent {
    constructor(
        private dialog: MatDialogRef<TipoSelectorComponent>
    ) {}

    close(): void {
        this.dialog.close();
    }
}