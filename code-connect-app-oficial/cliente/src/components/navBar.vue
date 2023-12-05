<script setup>
import IconePerfil from "@/components/icones/IconePerfil.vue";
import IconeHome from "@/components/icones/IconeHome.vue";
import IconeLogout from "@/components/icones/IconeLogout.vue";

import { useRouter } from "vue-router";
const router = useRouter();

const rotas = {
  voltarHome: () => router.push("/chat"),
  entrarPerfil: () => router.push("/perfil"),
  fazerLogout: () => {
    localStorage.removeItem("token");
    location.reload();
  },
};
</script>

<template>
  <nav class="nav-bar">
    <div class="nav-container">
      <ul class="nav-list">
        <li class="nav-item" @click="rotas.voltarHome">
          <IconeHome />
          <h3 class="nav-title">Home</h3>
        </li>
        <li class="nav-item" @click="rotas.entrarPerfil">
          <IconePerfil />
          <h3 class="nav-title">Profile</h3>
        </li>
        <li class="nav-item" @click="rotas.fazerLogout">
          <IconeLogout />
          <h3 class="nav-title">Logout</h3>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  width: 15%;
  padding-top: 20px;
}
.nav-container {
  position: fixed;
}
.nav-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 12px;
  font-size: 1.3rem;
  color: white;
  cursor: pointer;
}
.nav-item:hover {
  background-color: gray;
  border-radius: 25px;
}
.nav-title {
  padding-left: 15px;
}

.hidden {
  display: none;
}

@media (max-width: 480px) {
  .nav-bar {
    width: 100%;
  }
  .nav-container {
    position: static;
  }
  .nav-list {
    display: flex;
  }

}
@media (max-width: 900px) {
  .nav-title {
    display: none;
  }
}
</style>
