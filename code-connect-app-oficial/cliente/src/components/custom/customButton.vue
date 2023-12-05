<script setup>
import { defineProps } from "vue"

const props = defineProps(['valueButton', 'evento'])

</script>

<template>
  <button class="botao" @submit="props.evento">
    {{ props.valueButton }}
  </button>
</template>

<style scoped>
.botao {
  background: var(--bg-button);
  padding: 14px 24px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--white);
  margin-top: 40px;
  margin-bottom: 40px;
  cursor: pointer;
}
</style>
