import { Constantes } from "./Constantes.js";

export default class Fase {

    constructor(contexto) {
        this.contexto = contexto;
        this.imgFundo = new Image();
        this.imgFundo.src = `${Constantes.CONTEXT_PATH}/assets/fundo.png`;

    }
    draw() {
        this.contexto.drawImage(this.imgFundo, 0, 0, 400, 600);
    }
}
