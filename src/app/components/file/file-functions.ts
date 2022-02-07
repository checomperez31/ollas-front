import { HttpResponse } from "@angular/common/http";
import { Component, ElementRef, Injectable, Input, OnDestroy, ViewChild } from "@angular/core";
import { AbstractControl, ControlValueAccessor, ValidationErrors, ValidatorFn } from "@angular/forms";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { FileData } from "./file-data.model";
import { imagesTypes } from "./file-types";
import { FileService } from "./file.service";

@Component({
    template: ''
})
export abstract class FileFunctions implements OnDestroy, ControlValueAccessor {
    @Input() endpoint = 'file';
    @ViewChild('fileInput') fileInput: ElementRef;
    fileTypes?: string[];
    file?: FileData;
    id?: string;
    lastIdSaved?: string;
    idsToDelete: string[] = [];
    disabled = false;
    loading = false;
    saved = false;

    constructor(
        protected service: FileService,
        protected sanitizer: DomSanitizer
    ) {}

    ngOnDestroy(): void {
        this.removeActualFile(true);
        const prom: Promise<any>[] = this.idsToDelete.map(id => this.service.delete(this.endpoint, id).toPromise());
        Promise.all(prom).then(() => {});
    }

    onChange = (_:any) => {}
    onTouch = () => {}

    writeValue(value: any): void {
        if (value && value !== '') {
            this.loading = true;
            this.onChange(this.id);
            this.service.findOne(this.endpoint, value).subscribe({
                next: (res) => {
                    if (res) {
                        this.file = res.body;
                        this.id = this.file.id;
                        this.saved = true;
                    }
                    this.loading = false;
                    this.onChange(this.id);
                },
                error: () => {
                    this.loading = false;
                    this.onChange(this.id);
                }
            });
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
        const element = value.target as HTMLInputElement;
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
        if ( !this.file ) this.file = new FileData(undefined, undefined, file.type, file.name);
        this.service.create( this.endpoint, file ).subscribe({
            next: this.successUploadData.bind( this ),
            error: () => {
                this.loading = false;
                this.onChange(undefined);
            }
        });
    }
    
    uploadFileData(data: FileData): void {
        this.loading = true;
        this.onChange(undefined);
        if ( !this.file ) this.file = data;
        this.service.createData( this.endpoint, data ).subscribe({
            next: this.successUploadData.bind( this ),
            error: () => {
                this.loading = false;
                this.onChange(undefined);
            }
        });
    }

    removeActualFile(destroy: boolean): void {
        if ( this.id && !this.idsToDelete.includes( this.id ) ) {
            if ( this.saved ) {
                if ( destroy ) {
                    if ( this.lastIdSaved ) this.idsToDelete.push( this.lastIdSaved );
                } else {
                    this.lastIdSaved = this.id;
                    this.saved = false;
                }
            } else {
                this.idsToDelete.push( this.id );
            }
        }
    }

    successUploadData(res: HttpResponse<FileData>): void {
        this.removeActualFile(false);
        if (res.body) {
            this.file = res.body;
            this.id = this.file.id;
        }
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
        if ( this.fileInput && !this.loading ) {
            this.onTouch();
            this.fileInput.nativeElement.click();
        }
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return this.loading ? {
            uploading: true
        } : null;
    }

    getImgSrc(): SafeUrl {
        if ( this.file && this.file.file ) return this.sanitizer.bypassSecurityTrustUrl(`data:${this.file.fileType};base64,${this.file.file}`);
        return null;
    }
}