import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileInlineSelectorComponent } from './file-inline-selector.component';
import { FileService } from '../file.service';

@NgModule({
    imports: [ FormsModule, CommonModule ],
    declarations: [ FileInlineSelectorComponent ],
    exports: [ FileInlineSelectorComponent ],
    providers: [ FileService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FileInlineSelectorModule {}