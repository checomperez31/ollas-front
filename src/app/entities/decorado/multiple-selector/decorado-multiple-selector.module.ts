import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppSharedModule } from '../../../app-shared.module';
import { DecoradoService } from '../decorado.service';
import { DecoradoMultipleSelectorComponent } from './decorado-multiple-selector.component';
import { PhotoViewerModule } from '../../../components/file/photo-viewer/photo-viewer.module';

@NgModule({
    imports: [ AppSharedModule, PhotoViewerModule ],
    declarations: [ DecoradoMultipleSelectorComponent ],
    exports: [ DecoradoMultipleSelectorComponent ],
    providers:[ DecoradoService ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DecoradoMultipleSelectorModule {}