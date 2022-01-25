import { Component, Input } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { FileData } from '../file-data.model';
import { FileService } from '../file.service';

@Component({
    selector: 'app-photo-viewer',
    templateUrl: 'photo-viewer.component.html',
    styleUrls: ['../styles.scss'],
})
export class PhotoViewerComponent {

    private _id?: string;
    @Input() endpoint = 'file';
    @Input() size = 32;
    @Input('border-type') borderType: 'rounded' | 'circle' = 'rounded';
    file?: FileData;

    constructor(
        private service: FileService,
        private sanitizer: DomSanitizer
    ) {}

    getImgSrc(): SafeUrl {
        if ( this.file && this.file.file ) return this.sanitizer.bypassSecurityTrustUrl(`data:${this.file.fileType};base64,${this.file.file}`);
        return null;
    }

    loadEntity(): void {
        if (this._id) {
            this.service.findOne(this.endpoint, this._id).subscribe({
                next: (res) => {
                    if (res) this.file = res.body;
                },
                error: () => {}
            });
        } else {
            this.file = undefined;
        }
    }

    @Input()
    set id(value: string) {
        if ( this._id !== value ) {
            this._id = value;
            this.loadEntity();
        }
    }
}