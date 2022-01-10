import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        HttpClientModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        HttpClientModule
    ]
})
export class AppSharedModule {}