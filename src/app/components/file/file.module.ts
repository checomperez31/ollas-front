import { NgModule } from "@angular/core";
import { FileInlineSelectorComponent } from './file-inline-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { FileService } from './file.service';

@NgModule({
    imports: [ HttpClientModule ],
    declarations: [ FileInlineSelectorComponent ],
    exports: [ FileInlineSelectorComponent ],
    providers: [ FileService ]
})
export class FileModule {}