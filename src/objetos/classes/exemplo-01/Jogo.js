export class Posicao {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  ehIgual(outraPosicao) {
    return this.x === outraPosicao.x && this.y === outraPosicao.y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

export class Jogador {
  constructor(nome, posicao) {
    this.nome = nome;
    this.posicao = posicao;
  }

  mover(novaPosicao) {
    this.posicao = novaPosicao;
  }

  iraColidirCom(inimigo) {
    return this.posicao.ehIgual(inimigo.posicao);
  }

  toString() {
    return `${this.nome} ${this.posicao.toString()}`;
  }
}

export class Inimigo {
  constructor(nome, posicao) {
    this.nome = nome;
    this.posicao = posicao;
  }

  toString() {
    return `${this.nome} ${this.posicao.toString()}`;
  }
}

export class Jogo {
  constructor() {
    this.jogadores = [];
    this.inimigos = [];
  }

  adicionarJogador(jogador) {
    this.jogadores.push(jogador);
  }

  adicionarInimigo(inimigo) {
    this.inimigos.push(inimigo);
  }

  iraColidirComAlgumInimigo(jogador) {
    for (const inimigo of this.inimigos) {
      if (jogador.iraColidirCom(inimigo)) {
        return true;
      }
    }
    return false;
  }

  _imprimirMapa() {
    console.log("Jogadores:");
    for (const jogador of this.jogadores) {
      console.log("\t", jogador.toString());
    }
    console.log();
    console.log("Inimigos:");
    for (const inimigo of this.inimigos) {
      console.log("\t", inimigo.toString());
    }
  }

  iniciar() {
    console.log("Inicializando jogo. Mapa:");
    this._imprimirMapa();

    console.log();
    console.log("Iniciando movimentacoes");

    const primeiroJogador = this.jogadores[0];
    const segundoJogador = this.jogadores[1];

    primeiroJogador.mover(new Posicao(1, 1));
    segundoJogador.mover(new Posicao(2, 2));

    if (this.iraColidirComAlgumInimigo(primeiroJogador)) {
      console.log(`\t Ops, jogador ${primeiroJogador.nome} colidiu com inimigo!`);
    }

    if (this.iraColidirComAlgumInimigo(segundoJogador)) {
      console.log(`\t Ops, jogador ${segundoJogador.nome} colidiu com inimigo!`);
    }

    console.log();
    this._imprimirMapa();
  }
}
