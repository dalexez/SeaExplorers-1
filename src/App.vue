<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-white">
      <router-link to="/registryMember" class="navbar-brand"><DonationComponent/></router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/explorers" class="nav-link">Explorers</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Agregar Explorer</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/addmcx" class="nav-link">Agregar Mission Commander</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/mcx" class="nav-link">Lista de Mission Commanders</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
import DonationComponent from "./components/DonationComponent.vue";
export default {
    name: "app",
    components: { DonationComponent }
};
</script>