import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Decorado } from './decorado.model';
import { DecoradoService } from './decorado.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-decorado-form',
    templateUrl: 'decorado-form.component.html'
})
export class DecoradoFormComponent {

    entity: Decorado = new Decorado();
    fileId?: string;

    constructor(
        private dialog: MatDialogRef<DecoradoFormComponent>,
        private entityService: DecoradoService
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
        if ( this.entity.id ) {
            this.entityService.update( this.entity ).subscribe( this.successSaving.bind(this) );
        } else {
            this.entityService.create( this.entity ).subscribe( this.successSaving.bind(this) );
        }
    }

    successSaving(): void {
        this.close();
    }
}