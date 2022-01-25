import { Component, OnDestroy, ViewChild } from '@angular/core';
import { TipoSelectorDialogService } from '../tipo/selector/tipo-selector-dialog.service';
import { Tipo } from "../tipo/tipo.model";
import { Olla } from './olla.model';
import { OllaDecorado, OllaDecoradoId } from '../olla-decorado/olla-decorado.model';
import { OllaService } from './olla.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { FileInlineSelectorComponent } from 'src/app/components/file/file-inline/file-inline-selector.component';

@Component({
    selector: 'app-olla-form',
    templateUrl: 'olla-form.component.html'
})
export class OllaFormComponent implements OnDestroy {

    entity: Olla = new Olla();
    decoradoIds: number[] = [];
    saving = false;
    routeSuscription: Subscription;
    @ViewChild('photo') photo?: FileInlineSelectorComponent;

    constructor(
        private tipoSelectorDialogService: TipoSelectorDialogService,
        private entityService: OllaService,
        private activatedRoute: ActivatedRoute
    ) {
        this.routeSuscription = this.activatedRoute.params.subscribe(params => {
            if ( params.id ) this.loadEntity( params.id );
        });
    }

    ngOnDestroy(): void {
        if ( this.routeSuscription ) this.routeSuscription.unsubscribe();
    }

    loadEntity(id: string): void {
        this.entityService.queryOne( id ).subscribe(this.successLoadEntity.bind( this ));
    }

    successLoadEntity(res: HttpResponse<Olla>): void {
        if ( res.body ) {
            this.entity = res.body;
            if ( this.entity && this.entity.decorados ) {
                this.decoradoIds = this.entity.decorados.map(deco => deco.id.decoradoId);
            }
        }
    }

    openSelector(): void {
        console.log( this.decoradoIds );
        this.tipoSelectorDialogService.open().afterClosed().subscribe(value => {
            console.log(value instanceof Tipo);
            if (value && value instanceof Tipo) {
                this.entity.type = value;
            }
        });
    }

    save(): void {
        this.saving = true;
        if ( this.decoradoIds ) {
            this.entity.decorados = this.decoradoIds.map(id => new OllaDecorado(new OllaDecoradoId(undefined, id)));
        }
        if ( this.entity.id ) {
            this.entityService.update( this.entity ).subscribe({
                next: this.successSave.bind( this ),
                error: () => this.saving = false
            });
        } else {
            this.entityService.create( this.entity ).subscribe({
                next: this.successSave.bind( this ),
                error: () => this.saving = false
            });
        }
    }

    successSave(): void {
        if ( this.photo ) this.photo.saved = true;
        window.history.back();
    }
}