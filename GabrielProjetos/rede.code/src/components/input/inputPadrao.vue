<template>
  <div>
    <input 
      :class="{'input-invalido': inputInvalido}"
      :type="inputType"
      :placeholder="placeholderInput"
      @blur="updateValue"
    >
  </div>
</template>

<script>
  export default {
    name: "inputPadrao",
    props: {
      inputType: String,
      inputInvalido: Boolean,
      placeholderInput: String,
    },
    methods: {
      updateValue(event) {
        this.$emit('validar', event.target.value)
      }
    }
  }
</script>

<style>
  .input-invalido {
    border: red 2px solid;
  }
</style>