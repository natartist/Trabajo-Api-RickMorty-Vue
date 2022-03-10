<template>
<div class="fondo">
  <Navbar/>
  <router-view/>
  </div>
</template>

<style>
.fondo {
  background-image: url("./assets/rm.jpg");
  height: 100vh;

}
</style>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  }
}
</script>
