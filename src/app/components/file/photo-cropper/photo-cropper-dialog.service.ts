import { Injectable } from "@angular/core"
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FileData } from "../file-data.model";
import { PhotoCropperComponent } from './photo-cropper.component';

@Injectable()
export class PhotoCropperDialogService {
    constructor(
        private modalService: MatDialog
    ) {}

    open(file?: FileData): MatDialogRef<PhotoCropperComponent> {
        const modal = this.modalService.open(PhotoCropperComponent);
        if ( file ) modal.componentInstance.entity = file;
        return modal;
    }
}