import { Component, forwardRef } from "@angular/core";
import { FileService } from "./file.service";
import { HttpResponse } from '@angular/common/http';
import { FileData } from "./file-data.model";
import { FileFunctions } from './file-functions';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'app-file-inline-selector',
    templateUrl: 'file-inline-selector.component.html',
    styleUrls: [ 'styles.scss' ],
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

    constructor(
        protected service: FileService
    ) {
        super(service);
    }
}