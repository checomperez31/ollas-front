import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { TipoFormComponent } from "./tipo-form.component";

 @Injectable()
export class TipoDialogService {
    constructor(
        private modalService: MatDialog
    ) {}

    open(id?: number): MatDialogRef<TipoFormComponent> {
        const modal = this.modalService.open(TipoFormComponent);
        if ( id ) modal.componentInstance.loadEntity( id );
        return modal;
    }
}