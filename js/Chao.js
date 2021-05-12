import { Constantes } from "./Constantes.js";

export default class Chao {
    constructor(contexto) {
        this.contexto = contexto;
        this.imgChao = new Image();
        this.imgChao.src = `${Constantes.CONTEXT_PATH}/assets/chao.png`;
        this.posicaoYchao = 500;
    }
    draw() {
        this.contexto.drawImage(this.imgChao, 0, this.posicaoYchao);
    }
}
