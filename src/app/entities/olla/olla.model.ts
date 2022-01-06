import { Tipo } from "../tipo/tipo.model";

export class Olla {
    constructor(
        public id?: string,
        public description?: string,
        public status?: string,
        public type?: Tipo,
    ) {}
}