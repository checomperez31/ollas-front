import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { FileFunctions } from "../file-functions";
import { FileService } from "../file.service";
import { PhotoCropperDialogService } from '../photo-cropper/photo-cropper-dialog.service';
import { FileData } from '../file-data.model';

@Component({
    selector: 'app-file-inline-selector',
    templateUrl: 'file-inline-selector.component.html',
    styleUrls: [ '../styles.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => FileInlineSelectorComponent)
        },
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: forwardRef(() => FileInlineSelectorComponent)
        }
    ]
})
export class FileInlineSelectorComponent extends FileFunctions {

    private _inline = true;

    constructor(
        protected service: FileService,
        protected sanitizer: DomSanitizer,
        private editorDialogService: PhotoCropperDialogService
    ) {
        super(service, sanitizer);
    }

    get inline(): boolean {
        return this._inline;
    }

    @Input()
    set inline(value: any) {
        this._inline = this.validateInputBooleanValue( value );
    }

    editImage(): void {
        this.editorDialogService.open( this.file ).afterClosed().subscribe({
            next: this.saveImage.bind( this )
        });;
    }

    saveImage(value?: FileData): void {
        if ( value?.file ) {
            value.id = undefined;
            this.uploadFileData( value );
        }
    }
}