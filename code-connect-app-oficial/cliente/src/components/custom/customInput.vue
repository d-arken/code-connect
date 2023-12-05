<script setup>
import { defineProps } from "vue"

const props = defineProps(['inputType', 'placeholderInput', 'inputInvalid', 'valueInput','customStyle', 'valueDefault'])

</script>

<template>
  <input
    class="input"
    :class="{ 'input-invalido': props.inputInvalid }"
    :type="props.inputType"
    :placeholder="props.placeholderInput"
    @blur="(e) => props.valueInput(e)"
    :style="props.customStyle"
    :value="props.valueDefault"
    required
  />
</template>

<style scoped>
.input {
  background: var(--bg-input);
  padding: 8px 16px;
  height: 50px;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  margin-top: 20px;
  width: 100%;
}
.input::placeholder {
  color: var(--color-placehold);
}
.input:focus {
  border: 2px solid var(--outline-input);
}
.input-invalido {
  border: var(--error) 2px solid;
}
.input-invalido::placeholder {
  color: var(--error);
}
</style>
