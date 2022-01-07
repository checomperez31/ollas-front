import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule
    ]
})
export class AppSharedModule {}