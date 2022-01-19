import { Component } from "@angular/core";
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { PageEvent } from "@angular/material/paginator";

@Component({template: ''})
export class ListFunctions {
    elementsPerPage = 5;
    totalElements?: number;
    page = 0;
    sorts: string[] = [];
    loading = false;

    getRequestParams(): any {
        return {
            page: this.page,
            size: this.elementsPerPage,
            sort: this.sorts
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
        this.loadAll();
    }

    sortElements(value: any) {
        if (value && value.active) {
            const index = this.sorts.findIndex(s => s.includes(value.active));
            this.sorts.splice(index, 1);
            if ( value.direction ) {
                const sortString = value.active + ',' + value.direction;
                this.sorts.push( sortString );
            }
            this.loadAll();
        }
    }
}