import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'ollas',
                loadChildren: () => import('./olla/olla.module').then(m => m.OllaModule)
            }, {
                path: 'decorado',
                loadChildren: () => import('./decorado/decorado.module').then(m => m.DecoradoModule)
            }, {
                path: 'tipo',
                loadChildren: () => import('./tipo/tipo.module').then(m => m.TipoModule)
            }
        ])
    ]
})
export class EntityModule {}