import { Component, Input, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { FileData } from 'src/app/components/file/file-data.model';
import { Olla } from '../olla/olla.model';
import { FileService } from '../../components/file/file.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-olla-card',
    templateUrl: 'olla-card.component.html'
})
export class OllaCard implements AfterViewInit {

    @Input() entity?: Olla;
    @ViewChild('container') image?: ElementRef;
    width?: number
    height?: number
    file?: FileData;

    constructor(
        private fileService: FileService,
        private sanitizer: DomSanitizer
    ) {}

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.resize();
            this.loadImage();
        });
    }

    loadImage(): void {
        if ( this.width && this.entity.photo ) {
            this.fileService.findOneLight('olla-file', this.entity.photo, this.width).subscribe({
                next: (res) => {
                    if (res) this.file = res.body;
                }
            });
        }
    }

    getImgSrc(): SafeUrl {
        if ( this.file && this.file.file ) return this.sanitizer.bypassSecurityTrustUrl(`data:${this.file.fileType};base64,${this.file.file}`);
        return null;
    }

    @HostListener('window:resize')
    resize(): void {
        if ( this.image ) {
            this.width = this.image.nativeElement.offsetWidth;
            this.height = (this.width * 9) / 16;
        }
    }
}