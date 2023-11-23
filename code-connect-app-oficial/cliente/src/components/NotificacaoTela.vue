<template>
  <div :class="['Notificacao', variacao]">
    <i :class="iconClass"></i>
    {{ mensagem }}
  </div>
</template>

<script>
export default {
  name: "NotificacaoTela",
  props: {
    variacao: String,
    mensagem: String,
  },
  computed: {
    iconClass() {
      return {
        'fa-check-circle': this.variacao === 'sucesso',
        'fa-exclamation-circle': this.variacao === 'erro',
        'fa-info-circle': this.variacao === 'info',
        'fa-exclamation-triangle': this.variacao === 'alerta',
      };
    },
  },
};
</script>

<style scoped>
.notification {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
}

.sucesso {
  background-color: #4CAF50;
  color: white;
}

.erro {
  background-color: #f44336;
  color: white;
}

.info {
  background-color: #2196F3;
  color: white;
}

.alerta {
  background-color: #FFC107;
  color: black;
}

i {
  margin-right: 10px;
}
</style>
