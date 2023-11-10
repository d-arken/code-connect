<template> 
  <div class="formulario">
    <slot></slot>
  </div>
</template>

<script>
import '/assets/css/reset.css'
import '/assets/css/global.css'

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
  }

  @media(min-width: 768px) {
    .formulario {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

</style>