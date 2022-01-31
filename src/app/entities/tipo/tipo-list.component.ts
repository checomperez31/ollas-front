import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListFunctions } from '../../utils/list-functions';
import { MessageService } from '../../utils/message.service';
import { Tipo } from './tipo.model';
import { TipoService } from './tipo.service';
import { TipoDialogService } from './tipo-dialog.service';

@Component({
    selector: 'app-tipo-list',
    templateUrl: 'tipo-list.component.html'
})
export class TipoListComponent extends ListFunctions implements OnInit {

    entities: Tipo[] = [];
    columnsToDisplay = ['description', 'actions'];

    constructor(
        private entityService: TipoService,
        private entityDialogService: TipoDialogService,
        private messageService: MessageService
    ) {
        super();
    }

    ngOnInit(): void {
        this.loadAll();
        this.subscribeToChanges();
    }

    loadAll(): void {
        this.loading = true;
        this.entityService.query( this.getRequestParams() ).subscribe({
            next: this.successLoadAll.bind( this ),
            error: () => this.loading = false
        });
    }

    successLoadAll(res: HttpResponse<Tipo[]>): void {
        super.successLoadAll(res);
        this.entities = res.body || [];
        this.loading = false;
    }

    open(id?: number): void {
        this.entityDialogService.open(id);
    }

    subscribeToChanges(): void {
        this.messageService.subscribe('tipo', this.loadAll.bind( this ));
    }
}