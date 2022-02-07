import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SERVER_URL } from "src/app/app.constants";
import { FileData } from "./file-data.model";

@Injectable()
export class FileService {

    constructor(
        private client: HttpClient
    ) {}

    create(url: string, file: File, size?: number): Observable<HttpResponse<FileData>> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        return this.client.post<FileData>(`${SERVER_URL}/api/${url}`, formData, { observe: 'response', params: this.getParams( size ) })
            .pipe(map((res: HttpResponse<FileData>) => this.entityFromServer(res)));
    }
    
    createData(url: string, file: FileData, size?: number): Observable<HttpResponse<FileData>> {
        return this.client.post<FileData>(`${SERVER_URL}/api/${url}/data`, file, { observe: 'response', params: this.getParams( size ) })
            .pipe(map((res: HttpResponse<FileData>) => this.entityFromServer(res)));
    }

    findOne(url: string, id: any): Observable<HttpResponse<FileData>> {
        return this.client.get<FileData>(`${SERVER_URL}/api/${url}/${id}`, {observe: 'response'})
            .pipe(map((res: HttpResponse<FileData>) => this.entityFromServer(res)));
    }
    
    findOneLight(url: string, id: any, size?: number): Observable<HttpResponse<FileData>> {
        return this.client.get<FileData>(`${SERVER_URL}/api/${url}/light/${id}`, {observe: 'response', params: this.getParams( size )})
            .pipe(map((res: HttpResponse<FileData>) => this.entityFromServer(res)));
    }

    delete(url: string, id: any): Observable<HttpResponse<any>> {
        return this.client.delete(`${SERVER_URL}/api/${url}/${id}`, {observe: 'response'});
    }

    protected entityFromServer(res: HttpResponse<FileData>): HttpResponse<FileData> {
        let body: FileData | null = null;
        if (res.body) body = this.cloneEntityFromServer( res.body );
        return res.clone( {body} );
    }

    public cloneEntityFromServer(entity: any): FileData {
        return Object.assign( {}, entity );
    }

    getParams(size?: number): any {
        const value = {};
        if (size) value['size'] = Math.max((size * 2), (48 * 2));
        return value;
    }
}