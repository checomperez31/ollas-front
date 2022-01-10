import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DecoradoFormComponent } from './decorado-form.component';

 @Injectable()
export class DecoradoDialogService {
    constructor(
        private modalService: MatDialog
    ) {}

    open(id?: number): MatDialogRef<DecoradoFormComponent> {
        const modal = this.modalService.open(DecoradoFormComponent);
        if ( id ) modal.componentInstance.loadEntity( id );
        return modal;
    }
}