import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FileInlineSelectorComponent } from './file-inline-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { FileService } from './file.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ FormsModule, CommonModule, HttpClientModule ],
    declarations: [ FileInlineSelectorComponent ],
    exports: [ FileInlineSelectorComponent ],
    providers: [ FileService ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileModule {}