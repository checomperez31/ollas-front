import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ FormsModule, CommonModule, HttpClientModule ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileModule {}