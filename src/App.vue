<template>
  <div id="app">
    
    <NavBar/>
    <LandingPage/>
    
  </div>
</template>
<script>
import DonationComponent from "./components/DonationComponent.vue";
import NavBar from "./components/NavBar.vue";
import LandingPage from "./components/LandingPage.vue";
export default {
    name: "app",
    components: { DonationComponent, NavBar, LandingPage }
};
</script>