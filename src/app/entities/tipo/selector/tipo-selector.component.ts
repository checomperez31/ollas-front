import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TipoService } from '../tipo.service';
import { Tipo } from '../tipo.model';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-tipo-selector',
    templateUrl: 'tipo-selector.component.html'
})
export class TipoSelectorComponent implements OnInit {
    entities: Tipo[] = [];

    constructor(
        private dialog: MatDialogRef<TipoSelectorComponent>,
        private entityService: TipoService
    ) {}

    ngOnInit(): void {
        this.loadAll();
    }

    loadAll(): void {
        this.entityService.queryActive().subscribe( this.successLoadAll.bind( this ) );
    }

    successLoadAll(res: HttpResponse<Tipo[]>): void {
        this.entities = res.body || [];
    }

    close(): void {
        this.dialog.close();
    }

    selectOption(value: Tipo): void {
        this.dialog.close( value );
    }
}