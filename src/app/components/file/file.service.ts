import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpResponse, HttpClient } from '@angular/common/http';
import { FileData } from "./file-data.model";
import { SERVER_URL } from "src/app/app.constants";
import { map } from "rxjs/operators";

@Injectable()
export class FileService {

    constructor(
        private client: HttpClient
    ) {}

    create(url: string, file: File, nombre: string): Observable<HttpResponse<FileData>> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        // formData.append('name', nombre);
        return this.client.post<FileData>(`${SERVER_URL}/api/${url}`, formData, { observe: 'response' })
            .pipe(map((res: HttpResponse<FileData>) => this.entityFromServer(res)));
    }

    protected entityFromServer(res: HttpResponse<FileData>): HttpResponse<FileData> {
        let body: FileData | null = null;
        if (res.body) body = this.cloneEntityFromServer( res.body );
        return res.clone( {body} );
    }

    public cloneEntityFromServer(entity: any): FileData {
        return Object.assign( {}, entity );
    }
}