import { Injectable } from '@angular/core';
import { Decorado } from './decorado.model';
import { HttpService } from '../../utils/http-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DecoradoService extends HttpService<Decorado> {
    constructor(protected client: HttpClient) {
        super(client, 'catalogos/decorado');
    }
}