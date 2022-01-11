import { Component } from "@angular/core";
import { FileService } from "./file.service";
import { HttpResponse } from '@angular/common/http';
import { FileData } from "./file-data.model";

@Component({
    selector: 'app-file-inline-selector',
    templateUrl: 'file-inline-selector.component.html'
})
export class FileInlineSelectorComponent {

    file?: FileData;

    constructor(
        private service: FileService
    ) {}

    selectFile(value: Event): void {
        console.log( value );
        const element = event.target as HTMLInputElement;
        let files: FileList | null = element.files;
        if( files ) {
            if (files.length > 1) {
                return
            }
            const fileArray: File[] = Array.from(files);
            fileArray.forEach(f => {
                this.uploadFile( f );
            });
        }
    }

    uploadFile(file: File): void {
        this.service.create( 'decorado-file', file, 'hola' ).subscribe( this.successUploadData.bind( this ) );
    }

    successUploadData(res: HttpResponse<FileData>): void {
        this.file = res.body || undefined;
        console.log(res);
    }
}