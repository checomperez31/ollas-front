import { Component, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Decorado } from './decorado.model';
import { DecoradoService } from './decorado.service';
import { HttpResponse } from '@angular/common/http';
import { MessageService } from '../../utils/message.service';
import { FileInlineSelectorComponent } from "src/app/components/file/file-inline/file-inline-selector.component";

@Component({
    selector: 'app-decorado-form',
    templateUrl: 'decorado-form.component.html'
})
export class DecoradoFormComponent {

    entity: Decorado = new Decorado();
    saving = false;
    @ViewChild('file') file?: FileInlineSelectorComponent;

    constructor(
        private dialog: MatDialogRef<DecoradoFormComponent>,
        private entityService: DecoradoService,
        private messageService: MessageService
    ) {}

    loadEntity(id: number) {
        this.entityService.queryOne( id ).subscribe( this.successLoadEntity.bind(this) );
    }

    successLoadEntity(res: HttpResponse<Decorado>): void {
        if ( res.body ) this.entity = res.body;
    }

    close(): void {
        this.dialog.close();
    }

    save(): void {
        this.saving = true;
        if ( this.entity.id ) {
            this.entityService.update( this.entity ).subscribe({
                next: this.successSaving.bind(this),
                error: () => this.saving = false
            });
        } else {
            this.entityService.create( this.entity ).subscribe({
                next: this.successSaving.bind(this),
                error: () => this.saving = false
            });
        }
    }

    successSaving(): void {
        if ( this.file ) this.file.saved = true;
        this.saving = false;
        this.messageService.emit('decorado');
        this.close();
    }
}