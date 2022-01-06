import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { TipoSelectorComponent } from './tipo-selector.component';

@Injectable()
export class TipoSelectorDialogService {

    constructor(
        private modalService: MatDialog
    ) {}

    open(): MatDialogRef<TipoSelectorComponent> {
        return this.modalService.open(TipoSelectorComponent);
    }
}