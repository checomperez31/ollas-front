import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { TipoSelectorComponent } from './tipo-selector.component';
import { TipoSelectorDialogService } from './tipo-selector-dialog.service';
import { AppSharedModule } from '../../../app-shared.module';

@NgModule({
    imports: [ MatDialogModule, AppSharedModule ],
    declarations: [ TipoSelectorComponent ],
    providers: [ TipoSelectorDialogService ]
})
export class TipoSelectorModule {}