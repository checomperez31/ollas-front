import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { TipoSelectorComponent } from './tipo-selector.component';
import { TipoSelectorDialogService } from './tipo-selector-dialog.service';
import { AppSharedModule } from '../../../app-shared.module';
import { TipoService } from '../tipo.service';
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [ AppSharedModule, MatDialogModule, MatListModule ],
    declarations: [ TipoSelectorComponent ],
    providers: [ TipoSelectorDialogService, TipoService ],
    schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TipoSelectorModule {}