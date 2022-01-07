import { HttpService } from '../../utils/http-service';
import { Tipo } from './tipo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TipoService extends HttpService<Tipo>{
    constructor(protected http: HttpClient) {
        super(http, 'catalogos/tipo');
    }

    public cloneEntityFromServer(entity: any): Tipo {
        return Object.assign( new Tipo(), entity );
    }
}