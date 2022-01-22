import { Olla } from '../olla/olla.model';

export class OllaDecorado {
    constructor(
        private id?: OllaDecoradoId,
        private olla?: Olla
    ) {}
}

export class OllaDecoradoId {
    constructor(
        private ollaId?: string,
        private decoradoId?: number,
    ) {}
}