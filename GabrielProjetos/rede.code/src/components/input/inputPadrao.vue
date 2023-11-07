<template>
  <div>
    <input 
      class="inputEmail"
      :class="{'input-invalido': inputInvalido}"
      :type="inputType"
      :placeholder="placeholderInput"
      @blur="updateValue"
      required
    >
  </div>
</template>

<script>
import '../../assets/reset.css'

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

<style scoped>
  .inputEmail {
    background: white;
    padding: 13px 20px;
    height: 50px;
    width: 100%;
    max-width: 600px;
    border-radius: 30px;
    font-size: 16px;
    outline: none;
    margin-top: 20px;
  }
  .inputEmail::placeholder {
    color: var(--color-placehold);
  }
  .inputEmail:focus {
    border: 2px solid var(--outline-input);
  }
  .input-invalido {
    border: red 2px solid;
    background: rgb(233, 197, 197);
  }
</style>