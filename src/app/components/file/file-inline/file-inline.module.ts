import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileInlineSelectorComponent } from './file-inline-selector.component';
import { FileService } from '../file.service';
import { PhotoCropperModule } from '../photo-cropper/photo-cropper.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [ FormsModule, CommonModule, PhotoCropperModule, MatIconModule, MatButtonModule ],
    declarations: [ FileInlineSelectorComponent ],
    exports: [ FileInlineSelectorComponent ],
    providers: [ FileService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FileInlineSelectorModule {}