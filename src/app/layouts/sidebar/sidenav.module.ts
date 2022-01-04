import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { SideNav } from "./sidenav.component";
import { MatListModule } from '@angular/material/list';

@NgModule({
    imports: [RouterModule, MatListModule],
    declarations: [ SideNav ],
    exports: [ SideNav ],
})
export class SideNavModule {}