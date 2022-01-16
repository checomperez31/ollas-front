import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AppSharedModule } from '../../app-shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DecoradoListComponent } from './decorado-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DecoradoDialogService } from './decorado-dialog.service';
import { DecoradoFormComponent } from './decorado-form.component';
import { DecoradoService } from './decorado.service';
import { FormsModule } from "@angular/forms";
import { MatTableModule } from '@angular/material/table';
import { FileModule } from '../../components/file/file.module';

const routes: Routes = [
    {
        path: '',
        component: DecoradoListComponent
    }
];

@NgModule({
    imports: [
        FormsModule,
        AppSharedModule,
        RouterModule.forChild( routes ),
        MatDialogModule,
        MatTableModule,
        FileModule
    ],
    declarations: [ DecoradoListComponent, DecoradoFormComponent ],
    providers: [ DecoradoService, DecoradoDialogService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DecoradoModule {}