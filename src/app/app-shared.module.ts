import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatSortModule
    ],
    exports: [
        FormsModule,
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatTableModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatSortModule
    ]
})
export class AppSharedModule {}