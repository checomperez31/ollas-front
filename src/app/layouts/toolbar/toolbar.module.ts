import { NgModule } from "@angular/core";
import { ToolbarComponent } from "./toolbar.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [ ToolbarComponent ],
    exports: [ ToolbarComponent ],
})
export class ToolbarModule {}