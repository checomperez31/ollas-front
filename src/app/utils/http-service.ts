import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SERVER_URL } from '../app.constants';
export class HttpService<X> {

    protected baseUrl = SERVER_URL + '/api/';

    constructor(
        protected client: HttpClient,
        protected url: string
    ) {
        this.baseUrl = this.baseUrl + url;
    }

    public create(entity: X): Observable<HttpResponse<X>> {
        return this.client.post<X>(this.baseUrl, entity, { observe: 'response' })
        .pipe( map( this.entityFromServer.bind( this ) ) );
    }

    public update(entity: X): Observable<HttpResponse<X>> {
        return this.client.put<X>(this.baseUrl, entity, { observe: 'response' })
        .pipe( map( this.entityFromServer.bind( this ) ) );
    }

    public queryOne(id: any): Observable<HttpResponse<X>> {
        return this.client.get< X >(`${this.baseUrl}/${id}`, { observe: 'response' })
        .pipe( map( this.entityFromServer.bind( this ) ) );
    }

    public query(params?: any): Observable< HttpResponse< X[] > > {
        const copy = this.processParams( params );
        return this.client.get< X[] >(this.baseUrl, {params: copy, observe: 'response'})
        .pipe( map( this.arrayFromServer.bind(this) ) );
    }
    
    public queryActive(): Observable< HttpResponse< X[] > > {
        return this.client.get< X[] >(`${this.baseUrl}/active`, {observe: 'response'})
        .pipe( map( this.arrayFromServer.bind(this) ) );
    }

    public delete(id: string): Observable<HttpResponse<any>> {
        return this.client.delete<any>(`${this.baseUrl}/${id}`, {observe: 'response'});
    }

    protected arrayFromServer(res: HttpResponse<X[]>): HttpResponse<X[]> {
        let body: X[] = [];
        if ( res.body ) body = res.body.map( this.cloneEntityFromServer.bind( this ) );
        return res.clone( {body} );
    }

    protected entityFromServer(res: HttpResponse<X>): HttpResponse<X> {
        let body: X | null = null;
        if (res.body) body = this.cloneEntityFromServer( res.body );
        return res.clone( {body} );
    }

    public cloneEntityFromServer(entity: any): X {
        return Object.assign( {}, entity );
    }

    processParams(params?: any): HttpParams {
        let opts = new HttpParams();
        if ( !params ) params = {};
        if ( !params.size ) params.size = 5;
        Object.keys( params ).forEach(k => {
            opts = opts.set( k, params[ k ] );
        });
        return opts;
    }
}