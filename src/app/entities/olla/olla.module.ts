import { HttpClientModule } from "@angular/common/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { OllaList } from "./olla-list.component";
import { OllaService } from "./olla.service";
import { MatTableModule } from "@angular/material/table";
import { AppSharedModule } from '../../app-shared.module';
import { OllaFormComponent } from './olla-form.component';
import { TipoSelectorModule } from '../tipo/selector/tipo-selector.module';
import { DecoradoMultipleSelectorModule } from '../decorado/multiple-selector/decorado-multiple-selector.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FileModule } from "src/app/components/file/file.module";

const routes: Routes = [
    {
        path: '',
        component: OllaList
    },
    {
        path: 'create',
        component: OllaFormComponent
    }
];

@NgModule({
    imports: [
        AppSharedModule,
        RouterModule.forChild( routes ),
        HttpClientModule,
        DecoradoMultipleSelectorModule,
        TipoSelectorModule,
        FileModule,
        MatTableModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatSortModule
    ],
    declarations: [ OllaList, OllaFormComponent ],
    providers: [ OllaService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OllaModule {}