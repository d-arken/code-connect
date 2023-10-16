<template>
  <div class="container">
    <h1 class="titulo">Jogo da Velha</h1>
    <h3>Jogador {{ currentPlayer }}</h3>
    {{ ganhador }}
    <div class="jogo">
      <div class="linha" v-for="(row, rowIndex) in tabuleiro" :key="rowIndex">
        <div class="coluna" v-for="(cell, colIndex) in row" :key="colIndex" @click="jogada(rowIndex, colIndex)"
          v-html="icone(cell)"></div>
      </div>
    </div>
    <button class="limpar" @click="limpar">Limpar</button>
  </div>
</template>

<script>
export default {
  name: "JogoDaVelha",
  data() {
    return {
      turno: 1,
      tabuleiro: [[], [], []],
      ganhador: " ",
    };
  },
  computed: {
    currentPlayer() {
      return this.turno % 2 === 0 ? 1 : 2;
    },
  },
  methods: {
    jogada(x, y) {
      if (this.tabuleiro[x][y] !== undefined) {
        return;
      }

      this.turno++;
      this.tabuleiro[x][y] = this.currentPlayer;
      this.ganhador = this.resolve();
      console.log(this.resolve());
    },
    icone(jogador) {
      if (jogador === 0) {
        return "";
      }
      if (jogador === 1) {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>`;
      }
    },
    limpar() {
      this.tabuleiro = [[], [], []];
    },
    resolve() {
      const l = this.tabuleiro;

      // Resolva linhas, colunas e diagonais (reduzi a repetição de código)
      for (let i = 0; i < 3; i++) {
        if (
          l[i][0] === l[i][1] &&
          l[i][1] === l[i][2] &&
          l[i][0] !== undefined
        ) {
          return l[i][0];
        }

        if (
          l[0][i] === l[1][i] &&
          l[1][i] === l[2][i] &&
          l[0][i] !== undefined
        ) {
          return l[0][i];
        }
      }

      if (
        l[0][0] === l[1][1] &&
        l[1][1] === l[2][2] &&
        l[0][0] !== undefined
      ) {
        return l[0][0];
      }

      if (
        l[0][2] === l[1][1] &&
        l[1][1] === l[2][0] &&
        l[0][2] !== undefined
      ) {
        return l[0][2];
      }

      return " velha";
    },
  },
};
</script>
