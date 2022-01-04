import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OllaList } from "./olla-list.component";

const routes: Routes = [
    {
        path: '',
        component: OllaList
    }
];

@NgModule({
    imports: [RouterModule.forChild( routes )],
    declarations: [ OllaList ],
})
export class OllaModule {}