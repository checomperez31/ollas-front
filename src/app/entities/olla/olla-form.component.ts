import { Component } from "@angular/core";
import { TipoSelectorDialogService } from '../tipo/selector/tipo-selector-dialog.service';

@Component({
    selector: 'app-olla-form',
    templateUrl: 'olla-form.component.html'
})
export class OllaFormComponent {
    constructor(
        private tipoSelectorDialogService: TipoSelectorDialogService
    ) {}

    openSelector(): void {
        this.tipoSelectorDialogService.open();
    }
}