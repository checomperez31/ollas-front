import { Component, OnInit } from '@angular/core';
import { DecoradoService } from '../decorado.service';
import { Decorado } from '../decorado.model';
import { HttpResponse } from '@angular/common/http';


@Component({
    selector: 'app-decorado-multiple-selector',
    templateUrl: 'decorado-multiple-selector.component.html'
})
export class DecoradoMultipleSelectorComponent implements OnInit {

    entities: Decorado[] = [];

    constructor(
        private entityService: DecoradoService
    ) {}

    ngOnInit(): void {
        this.loadAll();
    }

    loadAll(): void {
        this.entityService.queryActive().subscribe( this.successLoadAll.bind( this ) );
    }

    successLoadAll(res: HttpResponse<Decorado[]>): void {
        this.entities = res.body || [];
    }
}