import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppSharedModule } from '../../app-shared.module';
import { Routes, RouterModule } from '@angular/router';
import { TipoListComponent } from './tipo-list.component';
import { TipoService } from './tipo.service';

const routes: Routes = [
    {
        path: '',
        component: TipoListComponent
    }
];

@NgModule({
    imports: [ AppSharedModule, RouterModule.forChild( routes ) ],
    declarations: [ TipoListComponent ],
    providers: [ TipoService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TipoModule {}