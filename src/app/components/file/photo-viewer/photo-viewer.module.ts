import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoViewerComponent } from './photo-viewer.component';
import { FileService } from '../file.service';

@NgModule({
    imports: [CommonModule],
    declarations: [ PhotoViewerComponent ],
    exports: [ PhotoViewerComponent ],
    providers: [ FileService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PhotoViewerModule {}