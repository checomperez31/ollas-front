import { Component, forwardRef, OnInit } from '@angular/core';
import { DecoradoService } from '../decorado.service';
import { Decorado } from '../decorado.model';
import { HttpResponse } from '@angular/common/http';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
    selector: 'app-decorado-multiple-selector',
    templateUrl: 'decorado-multiple-selector.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => DecoradoMultipleSelectorComponent)
        }
    ]
})
export class DecoradoMultipleSelectorComponent implements OnInit, ControlValueAccessor {

    entities: Decorado[] = [];
    idsSelected: number[] = [];
    disabled = false;

    onChange = (_:any) => {}
    onTouch = () => {}

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

    selectEntity(entity: Decorado): void {
        const index = this.idsSelected.findIndex(e => e === entity.id);
        if( index >= 0 ) this.idsSelected.splice(index, 1);
        else this.idsSelected.push( entity.id );
        this.onChange(this.idsSelected);
    }

    writeValue(obj: any): void {
        if (obj) {
            this.idsSelected = obj;
            this.onChange(this.idsSelected);
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}