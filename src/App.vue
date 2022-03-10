<template>
<div class="fondo">
  <Navbar/>
  <router-view/>
  </div>
</template>

<style>
body {
  background-image: url("./assets/rm.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

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
