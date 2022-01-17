import { Component, forwardRef } from "@angular/core";
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from "@angular/forms";
import { FileFunctions } from './file-functions';
import { FileService } from "./file.service";
import { DomSanitizer } from '@angular/platform-browser';

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
        protected service: FileService,
        protected sanitizer: DomSanitizer
    ) {
        super(service, sanitizer);
    }
}