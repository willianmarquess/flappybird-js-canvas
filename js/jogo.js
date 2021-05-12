import Fase from './Fase.js';
import Player from "./Player.js";
import Cano from './Cano.js';
import Chao from './Chao.js';

var canvas;
var contexto;
var fase;
var player;
var cano;
var chao;
var gameStatus;
var pontos;
var podePontuar;

document.addEventListener("DOMContentLoaded", () => {
 Start();
});

function Start() {
    document.getElementsByTagName("body")[0].addEventListener("click", onClick);
    document.getElementsByTagName("body")[0].addEventListener("keydown", keyPress);
    canvas = document.getElementById("meujogo");
    contexto = canvas.getContext("2d");
    fase = new Fase(contexto);
    player = new Player(contexto);
    cano = new Cano(contexto);
    chao = new Chao(contexto);
    gameStatus = 1;
    pontos = 0;
    podePontuar = true;
    LoopGame();
}

function LoopGame() {
    setTimeout(() => {
        contexto.clearRect(0, 0, canvas.width, canvas.height);
        fase.draw();
        player.draw();
        if (gameStatus == 1) {
            cano.draw();
            cano.move();
            chao.draw();
            player.velocidadeQueda += 0.2;

            //detecta colisão
            if ((player.x + player.width - 5) >= (cano.posicaoRealCanoBaixoX) && cano.posicaoRealCanoTopoX >= 0 &&
                player.y <= (cano.posicaoRealCanoTopoY + cano.height) ||
                (player.x + player.width - 5) >= cano.posicaoRealCanoBaixoX && cano.posicaoRealCanoBaixoX >= 0 &&
                (player.y + player.height - 5) >= (cano.posicaoRealCanoBaixoY)) {
                gameStatus = 0;
            }
            if (player.y >= (500 - player.height)) {
                gameStatus = 0;
            }

            if (cano.posicaoRealCanoTopoX <= 0 && podePontuar) {
                pontos++;
                console.log(pontos);
                podePontuar = false;
            }

            if (cano.posicaoRealCanoTopoX >= 400) {
                podePontuar = true;
            }

            player.y = player.y + player.velocidadeQueda;

            contexto.font = "15px Arial";
            contexto.fillText("Pontos: " + pontos, 10, 20);

        } else if (gameStatus == 0) {
            Start();
        }
        requestAnimationFrame(LoopGame);
    }, 1000 / 50);
}

function keyPress(e) {
    if (e.code == "Space") {
        player.jump();
    }
    if (e.code == "Enter") {
        gameStatus = 1;
    }
}

function onClick() {
    player.jump();
}
