export default class Player {
    constructor(contexto) {
        this.contexto = contexto;
        this.imgs = new Array(new Image(), new Image(), new Image());
        this.imgs[0].src = '/flappybird-js-canvas/assets/passaro1.png';
        this.imgs[1].src = '/flappybird-js-canvas/assets/passaro2.png';
        this.imgs[2].src = '/flappybird-js-canvas/assets/passaro3.png';
        this.variaImg = 0;
        this.liga = true;
        this.velocidadeQueda = 0;
        this.x = 50;
        this.y = 1;
        this.width = 30;
        this.height = 25;
        this.forcaPulo = 3;
    }

    draw() {

        if (this.variaImg >= 2) { this.liga = false; }
        if (this.variaImg <= 0) { this.liga = true; }

        if (this.variaImg == 0 || this.variaImg == 1 || this.variaImg == 2) {
            this.contexto.drawImage(this.imgs[this.variaImg], this.x, this.y, this.width, this.height);
        }

        if (this.variaImg <= 2 && this.liga) {
            this.variaImg += 1;
        }
        if (!this.liga) {
            this.variaImg -= 1;
        }

    }
    jump() {

        this.velocidadeQueda = (this.velocidadeQueda < -4) ? -4 : this.velocidadeQueda - this.forcaPulo;
    }
}
