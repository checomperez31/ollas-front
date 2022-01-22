import { Component } from "@angular/core";
import { TipoSelectorDialogService } from '../tipo/selector/tipo-selector-dialog.service';
import { Tipo } from "../tipo/tipo.model";
import { Olla } from './olla.model';
import { OllaDecorado, OllaDecoradoId } from '../olla-decorado/olla-decorado.model';
import { OllaService } from './olla.service';

@Component({
    selector: 'app-olla-form',
    templateUrl: 'olla-form.component.html'
})
export class OllaFormComponent {

    entity: Olla = new Olla();
    decoradoIds: number[] = [];
    saving = false;

    constructor(
        private tipoSelectorDialogService: TipoSelectorDialogService,
        private entityService: OllaService
    ) {}

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
            this.entityService.update( this.entity );
        } else {
            this.entityService.create( this.entity ).subscribe({
                next: this.successSave.bind( this ),
                error: () => this.saving = false
            });
        }
    }

    successSave(): void {
        window.history.back();
    }
}