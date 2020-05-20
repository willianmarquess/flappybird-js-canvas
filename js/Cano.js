export default class Cano {
    constructor(contexto) {
        this.contexto = contexto;
        this.imgCanoTopo = new Image();
        this.imgCanoTopo.src = '../assets/cano_topo.png';
        this.imgCanoBaixo = new Image();
        this.imgCanoBaixo.src = '../assets/cano_baixo.png';
        this.distanciaCanos = 75;
        this.width = 50;
        this.height = 300;
        this.posicaoX = 400;
        this.posicaoYCanoBaixo = 300;
        this.velocidade = 3;
        this.posicaoAleatoria = 0;
        this.posicaoRealCanoTopoX = 0;
        this.posicaoRealCanoTopoY = 0;
        this.posicaoRealCanoBaixoX = 0;
        this.posicaoRealCanoBaixoY = 0;
    }
    draw() {
        this.posicaoRealCanoTopoY = (0 - (this.distanciaCanos / 2)) - (this.posicaoAleatoria / 2);
        this.posicaoRealCanoBaixoY = (this.posicaoYCanoBaixo + (this.distanciaCanos / 2)) - (this.posicaoAleatoria / 2);
        this.contexto.drawImage(this.imgCanoTopo, this.posicaoX, this.posicaoRealCanoTopoY, this.width, this.height);
        this.contexto.drawImage(this.imgCanoBaixo, this.posicaoX, this.posicaoRealCanoBaixoY, this.width, this.height);

    }
    move() {

        if (this.posicaoX <= -50) {
            this.posicaoAleatoria = Math.floor((250) * Math.random()) - 50;

            this.posicaoX = 400;
        } else {
            this.posicaoX -= this.velocidade;
        }

        this.posicaoRealCanoBaixoX = this.posicaoX;
        this.posicaoRealCanoTopoX = this.posicaoX;
    }
}