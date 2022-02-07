import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { FileData } from '../file-data.model';

@Component({
    selector: 'app-photo-cropper',
    templateUrl: 'photo-cropper.component.html'
})
export class PhotoCropperComponent {
    entity?: FileData;
    entityNew?: FileData;

    constructor(
        private dialog: MatDialogRef<PhotoCropperComponent>,
        private sanitizer: DomSanitizer
    ) {}

    getImgSrc(): /* SafeUrl */string {
        if ( this.entity && this.entity.file ) return /* this.sanitizer.bypassSecurityTrustUrl( */`data:${this.entity.fileType};base64,${this.entity.file}`/* ) */;
        return null;
    }

    croppedImage(event: ImageCroppedEvent): void {
        this.entityNew = Object.assign(new FileData(), this.entity);
        const array = event.base64.split('base64,');
        if (array.length > 1) this.entityNew.file = array[1]
        else this.entityNew.file = undefined;
    }

    close(): void {
        this.dialog.close();
    }

    save(): void {
        if ( this.entityNew ) this.entityNew.fileType = 'image/jpeg';
        this.dialog.close( this.entityNew );
    }
}