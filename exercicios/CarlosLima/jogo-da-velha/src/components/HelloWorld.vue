<template>
  <div id="app">
    <h1>Jogo da Velha</h1>
    <div class="board">
      <div class="cell" v-for="(cell, index) in cells" :key="index" @click="makeMove(index)">
        {{ cell }}
      </div>
    </div>
    <p v-if="vencedor">{{ vencedor }} venceu!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cells: Array(9).fill(null),
      xProximo: true,
      vencedor: null
    };
  },
  methods: {
    makeMove(index) {
      if (this.cells[index] || this.vencedor) return;

      this.$set(this.cells, index, this.xProximo ? 'X' : 'O');
      this.xProximo = !this.xProximo;
      this.verificarVencendor();
    },
    verificarVencendor() {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[a] === this.cells[c]) {
          this.vencedor = this.cells[a];
          return;
        }
      }
    }
  }
};
</script>

<style>
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 5px;
}

.cell {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border: 1px solid #ccc;
  cursor: pointer;
}

p {
  font-size: 24px;
}
</style>
