import { Component, OnInit } from "@angular/core";
import { Olla } from "./olla.model";
import { OllaService } from './olla.service';
import { HttpResponse } from '@angular/common/http';
import { ListFunctions } from '../../utils/list-functions';

@Component({
    selector: 'app-olla-list',
    templateUrl: 'olla-list.component.html'
})
export class OllaList extends ListFunctions implements OnInit {
    entities: Olla[] = [];
    columnsToDisplay = ['description', 'type'];

    constructor(
        private entityService: OllaService
    ) {
        super();
    }

    ngOnInit(): void {
        this.loadAll();
    }

    loadAll(): void {
        this.loading = true;
        this.entityService.query( this.getRequestParams() ).subscribe({
            next: this.successLoadAll.bind( this ),
            error: () => this.loading = false
        });
    }

    successLoadAll(res: HttpResponse<Olla[]>): void {
        super.successLoadAll( res );
        this.entities = res.body || [];
        this.loading = false;
    }
}