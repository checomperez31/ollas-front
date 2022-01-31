import { Component, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { HttpResponse } from '@angular/common/http';
import { MessageService } from '../../utils/message.service';
import { FileInlineSelectorComponent } from "src/app/components/file/file-inline/file-inline-selector.component";
import { Tipo } from './tipo.model';
import { TipoService } from './tipo.service';

@Component({
    selector: 'app-tipo-form',
    templateUrl: 'tipo-form.component.html'
})
export class TipoFormComponent {

    entity: Tipo = new Tipo();
    saving = false;
    @ViewChild('file') file?: FileInlineSelectorComponent;

    constructor(
        private dialog: MatDialogRef<TipoFormComponent>,
        private entityService: TipoService,
        private messageService: MessageService
    ) {}

    loadEntity(id: number) {
        this.entityService.queryOne( id ).subscribe( this.successLoadEntity.bind(this) );
    }

    successLoadEntity(res: HttpResponse<Tipo>): void {
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
        this.messageService.emit('tipo');
        this.close();
    }
}