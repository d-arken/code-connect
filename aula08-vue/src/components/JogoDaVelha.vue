<template>
  <div class="container">
    <h1 class="titulo">Jogo da velha</h1>
    <h3>Jogador {{ this.turno % 2 == 0 ? 1 : 2 }}</h3>

    {{ ganhador }}
    <div class="jogo">
      <div class="linha">
        <div
          class="coluna"
          @click="jogada(0, 0)"
          v-html="icone(tabuleiro[0][0])"
        ></div>
        <div
          class="coluna"
          @click="jogada(0, 1)"
          v-html="icone(tabuleiro[0][1])"
        ></div>
        <div
          class="coluna"
          @click="jogada(0, 2)"
          v-html="icone(tabuleiro[0][2])"
        ></div>
      </div>
      <div class="linha">
        <div
          class="coluna"
          @click="jogada(1, 0)"
          v-html="icone(tabuleiro[1][0])"
        ></div>
        <div
          class="coluna"
          @click="jogada(1, 1)"
          v-html="icone(tabuleiro[1][1])"
        ></div>
        <div
          class="coluna"
          @click="jogada(1, 2)"
          v-html="icone(tabuleiro[1][2])"
        ></div>
      </div>
      <div class="linha">
        <div
          class="coluna"
          @click="jogada(2, 0)"
          v-html="icone(tabuleiro[2][0])"
        ></div>
        <div
          class="coluna"
          @click="jogada(2, 1)"
          v-html="icone(tabuleiro[2][1])"
        ></div>
        <div
          class="coluna"
          @click="jogada(2, 2)"
          v-html="icone(tabuleiro[2][2])"
        ></div>
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
  methods: {
    jogada(x, y) {
      // Checa se tem valor
      if (this.tabuleiro[x][y] !== undefined) {
        return;
      }

      this.turno++;
      this.tabuleiro[x][y] = this.turno % 2 == 0 ? 0 : 1;
      this.ganhador = this.resolve();

      console.log(this.resolve());
    },
    icone(jogador) {
      if (jogador == 0) {
        return `<svg class="jogador" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 96a160 160 0 1 0 0 320 160 160 0 1 0 0-320zM448 256A224 224 0 1 1 0 256a224 224 0 1 1 448 0z"/></svg>`;
      }

      if (jogador == 1) {
        return `<svg class="jogador" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"/></svg>`;
      }
    },
    limpar() {
      this.tabuleiro = [[], [], []];
    },
    resolve() {
      // Resolve linha
      let l = this.tabuleiro;

      if (
        l[0][0] === l[0][1] &&
        l[0][1] === l[0][2] &&
        l[0][0] === l[0][2] &&
        l[0][2] !== undefined
      ) {
        return l[0][0];
      }

      if (
        l[1][0] === l[1][1] &&
        l[1][1] === l[1][2] &&
        l[1][0] === l[1][2] &&
        [1][2] !== undefined
      ) {
        return l[1][0];
      }

      if (
        l[2][0] === l[2][1] &&
        l[2][1] === l[2][2] &&
        l[2][0] === l[2][2] &&
        l[2][2] !== undefined
      ) {
        return l[2][0];
      }

      // Resolve coluna
      if (
        l[0][0] === l[1][0] &&
        l[1][0] === l[2][0] &&
        l[0][0] === l[2][0] &&
        l[2][0] !== undefined
      ) {
        return l[0][0];
      }

      if (
        l[0][1] === l[1][1] &&
        l[1][1] === l[2][1] &&
        l[0][1] === l[2][1] &&
        l[2][1] !== undefined
      ) {
        return l[0][1];
      }

      if (
        l[0][0] === l[1][1] &&
        l[0][0] === l[2][2] &&
        l[1][1] === l[2][2] &&
        l[2][2] !== undefined
      ) {
        return l[0][0];
      }

      // Resolve diagonal
      if (
        l[0][2] === l[1][2] &&
        l[1][2] === l[2][2] &&
        l[0][2] === l[2][2] &&
        l[2][2] !== undefined
      ) {
        return l[0][2];
      }

      if (
        l[2][0] === l[1][1] &&
        l[2][0] === l[0][2] &&
        l[1][1] === l[0][2] &&
        l[0][2] !== undefined
      ) {
        return l[2][0];
      }

      return " velha";
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.jogo {
  border: 2px solid black;
  box-shadow: 6px 6px 16px 2px rgba(0, 0, 0, 0.2);
}

.coluna {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 100%;
  border-right: 2px solid black;

  &:hover {
    background-color: rgba(0, 245, 228, 0.2);
    cursor: pointer;
  }
}

.linha {
  width: 100%;
  display: flex;
  border-bottom: 2px solid black;
}

.limpar {
  margin-top: 32px;
  padding: 8px 10px;
}
</style>

<style>
.jogador {
  height: 64px;
}
</style>
