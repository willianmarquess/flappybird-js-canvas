export default class Fase {

    constructor(contexto) {
        this.contexto = contexto;
        this.imgFundo = new Image();
        this.imgFundo.src = '/flappybird-js-canvas/assets/fundo.png';

    }
    draw() {
        this.contexto.drawImage(this.imgFundo, 0, 0, 400, 600);
    }
}
