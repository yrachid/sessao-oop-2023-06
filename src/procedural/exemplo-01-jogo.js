const nomesJogadores = [];
const jogadoresX = [];
const jogadoresY = [];
let indiceJogadores = 0;

const nomesInimigos = [];
const inimigosX = [];
const inimigosY = [];
let inidiceInimigos = 0;

function moverJogador(novoX, novoY, indice) {
  jogadoresX[indice] = novoX;
  jogadoresY[indice] = novoY;
  verificarColisao(indice);
}

function toStringJogador(indice) {
  return `${nomesJogadores[indice]} (${jogadoresX[indice]}, ${jogadoresY[indice]})`;
}

function toStringInimigo(indice) {
  return `${nomesInimigos[indice]} (${inimigosX[indice]}, ${inimigosY[indice]})`;
}

function adicionarJogador(nome, x, y) {
  nomesJogadores.push(nome);
  jogadoresX.push(x);
  jogadoresY.push(y);
  indiceJogadores++;
}

function adicionarInimigo(nome, x, y) {
  nomesInimigos.push(nome);
  inimigosX.push(x);
  inimigosY.push(y);
  inidiceInimigos++;
}

function imprimirMapa() {
  console.log("Jogadores:");
  for (let i = 0; i < indiceJogadores; i++) {
    console.log(`\t${nomesJogadores[i]} (${jogadoresX[i]}, ${jogadoresY[i]})`);
  }
  console.log();
  console.log("Inimigos:");
  for (let i = 0; i < inidiceInimigos; i++) {
    console.log(`\t${nomesInimigos[i]} (${inimigosX[i]}, ${inimigosY[i]})`);
  }
}

function verificarColisao(indiceJogador) {
  const x = jogadoresX[indiceJogador];
  const y = jogadoresY[indiceJogador];
  const nome = nomesJogadores[indiceJogador];

  for (let i = 0; i < inidiceInimigos; i++) {
    const xInimigo = inimigosX[i];
    const yInimigo = inimigosY[i];

    if (xInimigo == x && yInimigo == y) {
      console.log(`\t Ops, jogador ${nome} colidiu com inimigo!`);
    }
  }
}

function executar() {
  adicionarInimigo("Porco", 1, 1);
  adicionarInimigo("Pneu", 2, 3);

  adicionarJogador("Shaolin Matador de Porco", 5, 5);
  adicionarJogador("Flavinho do Pneu", 6, 6);

  console.log("Inicializando jogo. Mapa:");
  imprimirMapa();

  console.log();
  console.log("Iniciando movimentacoes");

  moverJogador(1, 1, 0);
  moverJogador(2, 2, 1);

  console.log();
  imprimirMapa();
}

executar();
