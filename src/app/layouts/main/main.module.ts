import { NgModule } from "@angular/core";
import { ToolbarModule } from "../toolbar/toolbar.module";
import { MainComponent } from "./main.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import { SideNavModule } from '../sidebar/sidenav.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule,
        ToolbarModule,
        MatSidenavModule,
        SideNavModule
    ],
    declarations: [ MainComponent ],
    exports: [ MainComponent ]
})
export class MainModule {}