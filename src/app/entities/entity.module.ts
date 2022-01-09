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
            }
        ])
    ]
})
export class EntityModule {}