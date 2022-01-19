import { Component } from "@angular/core";
import { TipoSelectorDialogService } from '../tipo/selector/tipo-selector-dialog.service';
import { Tipo } from "../tipo/tipo.model";
import { Olla } from './olla.model';

@Component({
    selector: 'app-olla-form',
    templateUrl: 'olla-form.component.html'
})
export class OllaFormComponent {

    entity: Olla = new Olla();
    decoradoIds: number[] = [];

    constructor(
        private tipoSelectorDialogService: TipoSelectorDialogService
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
}