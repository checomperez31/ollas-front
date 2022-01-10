import { Injectable } from "@angular/core";

@Injectable()
export class FileService {

    /* createMultipart(url: string, file: File, nombre: string): Observable<EntityResponseType> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('name', nombre);
        return this.http.post<FileModel>(`${this.resourceUrl}${url}/multipart`, formData, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertResponse(res)));
    } */
}