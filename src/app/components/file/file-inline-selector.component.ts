import { Component } from "@angular/core";

@Component({
    selector: 'app-file-inline-selector',
    templateUrl: 'file-inline-selector.component.html'
})
export class FileInlineSelectorComponent {

    selectFile(value: Event): void {
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
        
    }
}