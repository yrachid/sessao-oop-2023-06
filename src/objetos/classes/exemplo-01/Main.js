import { Jogo, Jogador, Inimigo, Posicao } from "./Jogo.js";

function executar() {
  const jogo = new Jogo();

  jogo.adicionarInimigo(new Inimigo("Porco", new Posicao(1, 1)));
  jogo.adicionarInimigo(new Inimigo("Pneu", new Posicao(2, 3)));

  jogo.adicionarJogador(
    new Jogador("Shaolin Matador de Porco", new Posicao(5, 5))
  );

  jogo.adicionarJogador(new Jogador("Flavinho do Pneu", new Posicao(6, 6)));

  jogo.iniciar();
}

executar();
