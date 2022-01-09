import { NgModule } from "@angular/core";
import { AppSharedModule } from '../../app-shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DecoradoListComponent } from './decorado-list.component';

const routes: Routes = [
    {
        path: '',
        component: DecoradoListComponent
    }
];

@NgModule({
    imports: [AppSharedModule, RouterModule.forChild( routes )],
    declarations: [ DecoradoListComponent ]
})
export class DecoradoModule {}