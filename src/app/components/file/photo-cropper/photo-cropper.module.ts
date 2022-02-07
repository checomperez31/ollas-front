import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PhotoCropperDialogService } from "./photo-cropper-dialog.service";
import { PhotoCropperComponent } from "./photo-cropper.component";
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [ CommonModule, MatDialogModule, ImageCropperModule, MatButtonModule ],
    declarations: [ PhotoCropperComponent ],
    providers: [ PhotoCropperDialogService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PhotoCropperModule {}