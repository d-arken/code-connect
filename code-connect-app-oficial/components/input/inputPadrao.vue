<template>
  <div>
    <input 
      class="input"
      :class = "{'input-invalido' : inputInvalido}"
      :type="inputType"
      :placeholder="placeholderInput"
      @blur="updateValue"
      required
      > 
  </div>
</template>

<script>
import '../../assets/css/reset.css'
import '../../assets/css/global.css'

  export default {
    name: "inputPadrao",
    props: {
      inputType: String,
      inputInvalido: Boolean,
      placeholderInput: String,
    },
    methods: {
      updateValue(event) {
        this.$emit('pegarValueInput', event.target.value)
      }
    }
  }

</script>

<style scoped>
.input {
    background: var(--bg-input);
    padding: 13px 20px;
    height: 50px;
    width: 100%;
    max-width: 600px;
    border-radius: 30px;
    font-size: 16px;
    outline: none;
    margin-top: 20px;
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
