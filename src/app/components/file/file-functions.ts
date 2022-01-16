import { HttpResponse } from "@angular/common/http";
import { Component, ElementRef, Injectable, Input, ViewChild } from "@angular/core";
import { AbstractControl, ControlValueAccessor, ValidationErrors, ValidatorFn } from "@angular/forms";
import { FileData } from "./file-data.model";
import { imagesTypes } from "./file-types";
import { FileService } from "./file.service";

@Component({
    template: ''
})
export abstract class FileFunctions implements ControlValueAccessor {
    @ViewChild('fileInput') fileInput: ElementRef;
    fileTypes?: string[];
    file?: FileData;
    id?: string;
    disabled = false;
    loading = false;

    constructor(
        protected service: FileService
    ) {}

    onChange = (_:any) => {}
    onTouch = () => {}

    writeValue(value: any): void {
        if (value && value !== '') {
            console.log('Se van a cargar datos');
        }
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    handleFile(value: Event): void {
        console.log( value );
        const element = event.target as HTMLInputElement;
        let files: FileList | null = element.files;
        if( files ) {
            if (files.length > 1) {
                return
            }
            const fileArray: File[] = Array.from(files);
            fileArray.forEach(f => {
                this.uploadFile( f );
            });
        }
    }

    uploadFile(file: File): void {
        this.loading = true;
        this.onChange(undefined);
        this.file = new FileData(undefined, undefined, file.type, file.name);
        this.service.create( 'decorado-file', file, 'hola' ).subscribe({
            next: this.successUploadData.bind( this ),
            error: () => {
                this.loading = false;
                this.onChange(undefined);
            }
        });
    }

    successUploadData(res: HttpResponse<FileData>): void {
        this.file = res.body || undefined;
        this.id = this.file.id;
        this.loading = false;
        this.onChange(this.id);
    }

    getFileTypes(): string {
        if ( this.fileTypes ) {
            return this.fileTypes.reduce((a, type) => {
                return a + type;
            }, '');
        }
        return '';
    }

    @Input('images')
    set allowImages(value: any) {
        if ( this.validateInputBooleanValue( value ) ) {
            if ( !this.fileTypes ) this.fileTypes = [];
            this.fileTypes.push( ...imagesTypes );
        }
    }

    validateInputBooleanValue(value: any): boolean {
        return !(value === 'false');
    }

    selectFile(): void {
        console.log(this.fileInput);
        if ( this.fileInput ) {
            this.fileInput.nativeElement.click();
        }
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return this.loading ? {
            uploading: true
        } : null;
    }
}