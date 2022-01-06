import { HttpService } from '../../utils/http-service';
import { Tipo } from './tipo.model';
import { HttpClient } from '@angular/common/http';
export class TipoService extends HttpService<Tipo>{
    constructor(protected http: HttpClient) {
        super(http, 'catalogos/tipo');
    }
}