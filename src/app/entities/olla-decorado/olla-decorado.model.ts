import { Olla } from '../olla/olla.model';

export class OllaDecorado {
    constructor(
        public id?: OllaDecoradoId,
        public olla?: Olla
    ) {}
}

export class OllaDecoradoId {
    constructor(
        public ollaId?: string,
        public decoradoId?: number,
    ) {}
}