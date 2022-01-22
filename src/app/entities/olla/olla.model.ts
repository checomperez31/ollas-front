import { OllaDecorado } from "../olla-decorado/olla-decorado.model";
import { Tipo } from "../tipo/tipo.model";

export class Olla {
    constructor(
        public id?: string,
        public description?: string,
        public status?: string,
        public type?: Tipo,
        public decorados?: OllaDecorado[]
    ) {}
}