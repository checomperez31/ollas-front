import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OllaList } from "./olla-list.component";
import { OllaService } from "./olla.service";
import { MatTableModule } from "@angular/material/table";

const routes: Routes = [
    {
        path: '',
        component: OllaList
    }
];

@NgModule({
    imports: [
        RouterModule.forChild( routes ),
        HttpClientModule,
        MatTableModule
    ],
    declarations: [ OllaList ],
    providers: [ OllaService ]
})
export class OllaModule {}