import { Component, OnInit } from '@angular/core';
import { DecoradoDialogService } from './decorado-dialog.service';
import { DecoradoService } from './decorado.service';
import { HttpResponse } from '@angular/common/http';
import { Decorado } from "./decorado.model";
import { MessageService } from '../../utils/message.service';

@Component({
    selector: 'app-decorado-list',
    templateUrl: 'decorado-list.component.html'
})
export class DecoradoListComponent implements OnInit {

    entities: Decorado[] = [];
    columnsToDisplay = ['id', 'description', 'actions'];

    constructor(
        private entityService: DecoradoService,
        private dialogService: DecoradoDialogService,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.subscribeToChanges();
        this.loadAll();
    }

    loadAll(): void {
        this.entityService.query().subscribe( this.successLoadAll.bind( this ) );
    }

    successLoadAll(res: HttpResponse<Decorado[]>): void {
        this.entities = res.body || [];
    }

    open(id?: number): void {
        this.dialogService.open(id);
    }

    subscribeToChanges(): void {
        this.messageService.subscribe('decorado', this.loadAll.bind( this ));
    }
}