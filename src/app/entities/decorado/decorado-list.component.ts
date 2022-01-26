import { Component, OnInit } from '@angular/core';
import { DecoradoDialogService } from './decorado-dialog.service';
import { DecoradoService } from './decorado.service';
import { HttpResponse } from '@angular/common/http';
import { Decorado } from "./decorado.model";
import { MessageService } from '../../utils/message.service';
import { ListFunctions } from '../../utils/list-functions';

@Component({
    selector: 'app-decorado-list',
    templateUrl: 'decorado-list.component.html'
})
export class DecoradoListComponent extends ListFunctions implements OnInit {

    entities: Decorado[] = [];
    columnsToDisplay = ['description', 'actions'];

    constructor(
        private entityService: DecoradoService,
        private dialogService: DecoradoDialogService,
        private messageService: MessageService
    ) {
        super();
    }

    ngOnInit(): void {
        this.subscribeToChanges();
        this.loadAll();
    }

    loadAll(): void {
        this.loading = true;
        this.entityService.query( this.getRequestParams() ).subscribe({
            next: this.successLoadAll.bind( this ),
            error: () => this.loading = false
        });
    }

    successLoadAll(res: HttpResponse<Decorado[]>): void {
        super.successLoadAll(res);
        this.entities = res.body || [];
        this.loading = false;
    }

    open(id?: number): void {
        this.dialogService.open(id);
    }

    subscribeToChanges(): void {
        this.messageService.subscribe('decorado', this.loadAll.bind( this ));
    }
}