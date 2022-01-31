import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppSharedModule } from '../../app-shared.module';
import { Routes, RouterModule } from '@angular/router';
import { TipoListComponent } from './tipo-list.component';
import { TipoService } from './tipo.service';
import { TipoFormComponent } from './tipo-form.component';
import { TipoDialogService } from './tipo-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FileInlineSelectorModule } from 'src/app/components/file/file-inline/file-inline.module';

const routes: Routes = [
    {
        path: '',
        component: TipoListComponent
    }
];

@NgModule({
    imports: [ AppSharedModule, RouterModule.forChild( routes ), FileInlineSelectorModule, MatDialogModule ],
    declarations: [ TipoListComponent, TipoFormComponent ],
    providers: [ TipoService, TipoDialogService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TipoModule {}