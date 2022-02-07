import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { ListFunctions } from '../../utils/list-functions';
import { OllaService } from '../olla/olla.service';
import { Olla } from '../olla/olla.model';

@Component({
    selector: 'app-inventario-list',
    templateUrl: 'inventario-list.component.html'
})
export class InventarioListComponent extends ListFunctions implements OnInit {

    entities: Olla[] = [];
    private _decoradoIds: number[] = [];

    constructor(
        private entityService: OllaService
    ) {
        super();
        this.elementsPerPage = 10;
    }

    ngOnInit(): void {
        this.loadAll();
    }

    filters(): void {
        this.page = 0;
        if ( this.decoradoIds.length > 0 ) {
            this.query['decorado.in'] = this.decoradoIds
        } else {
            delete this.query['decorado.in'];
        }
        this.loadAll();
    }

    loadAll(): void {
        this.entityService.query( this.getRequestParams() ).subscribe({
            next: this.successLoadAll.bind( this )
        });
    }
    
    successLoadAll(res: HttpResponse<Olla[]>): void {
        super.successLoadAll( res );
        this.entities = res.body || [];
    }

    
    get decoradoIds(): number[] {
        return this._decoradoIds;
    }
    
    set decoradoIds( value: number[] ) {
        this._decoradoIds = value;
        this.filters();
    }
    
}