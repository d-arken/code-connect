<template> 
  <div class="formulario">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "FormContainer",
  }
</script>

<style scoped>
  .formulario {
    max-width: 768px;
    background: var(--white);
    border-radius: 28px;
    padding: 20px 30px 0 30px;
    margin: -40px auto 0 auto;
    text-align: center;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

</style>