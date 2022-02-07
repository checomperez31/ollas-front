import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioListComponent } from './inventario-list.component';
import { OllaService } from '../olla/olla.service';
import { DecoradoMultipleSelectorModule } from '../decorado/multiple-selector/decorado-multiple-selector.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PhotoViewerModule } from '../../components/file/photo-viewer/photo-viewer.module';
import { OllaCard } from './olla-card.component';
import { FileService } from '../../components/file/file.service';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    {
        path: '',
        component: InventarioListComponent
    }
];

@NgModule({
    imports: [ FormsModule, CommonModule, RouterModule.forChild( routes ), DecoradoMultipleSelectorModule, MatCardModule, MatButtonModule, PhotoViewerModule ],
    declarations: [ InventarioListComponent, OllaCard ],
    providers: [ OllaService, FileService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class InventarioModule {}