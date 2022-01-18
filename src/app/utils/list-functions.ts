import { Component } from "@angular/core";
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { PageEvent } from "@angular/material/paginator";

@Component({template: ''})
export class ListFunctions {
    elementsPerPage = 5;
    totalElements?: number;
    page = 0;

    getRequestParams(): any {
        return {
            page: this.page,
            size: this.elementsPerPage
        };
    }

    loadAll(): void {}

    successLoadAll(res: HttpResponse<any>): void {
        const h: HttpHeaders = res.headers;
        if ( h.get('X-Total-Count') ) this.totalElements = Number(h.get('X-Total-Count'));
    }

    loadPage(page: PageEvent): void {
        if (page.pageIndex != undefined && page.pageIndex != null) {
            this.page = page.pageIndex;
        }
        console.log( this.page );
        this.loadAll();
    }
}