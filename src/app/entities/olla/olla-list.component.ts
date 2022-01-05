import { Component, OnInit } from "@angular/core";
import { Olla } from "./olla.model";
import { OllaService } from './olla.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-olla-list',
    templateUrl: 'olla-list.component.html'
})
export class OllaList implements OnInit {
    entities: Olla[] = [];
    columnsToDisplay = ['id'];

    constructor(
        private entityService: OllaService
    ) {}

    ngOnInit(): void {
        this.loadAll();
    }

    loadAll(): void {
        this.entityService.query().subscribe( this.successLoadAll.bind( this ) );
    }

    successLoadAll(res: HttpResponse<Olla[]>): void {
        this.entities = res.body || [];
    }
}