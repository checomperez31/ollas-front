import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from '../../utils/http-service';
import { Olla } from './olla.model';

@Injectable()
export class OllaService extends HttpService<Olla> {
    constructor(
        protected client: HttpClient
    ) {
        super(client, 'olla');
    }
}