import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'ollas',
                loadChildren: () => import('./olla/olla.module').then(m => m.OllaModule)
            }
        ])
    ]
})
export class EntityModule {}