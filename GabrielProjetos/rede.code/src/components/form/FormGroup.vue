<template> 
  <form @submit.prevent="submitForm" class="formulario">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: "FormGroup",
  }
</script>

<style scoped>
  .formulario {
    max-width: 600px;
    background: rgb(27, 27, 100);
    border-radius: 28px;
    margin: 0 auto;
    padding: 20px 30px 0 30px;
    text-align: center;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

</style>