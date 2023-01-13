<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Rick and Morty</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hubballi&family=Syne+Mono&display=swap");

.navbar {
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.4);
}

.navbar-brand {
  font-family: "Syne Mono", monospace;
  font-size: 28px;
  margin-right: 26px;
}

ul {
  font-family: "Hubballi", cursive;
  font-size: 22px;
}
.navbar li a.router-link-exact-active {
  color: rgb(12, 12, 12) !important;
  font-weight: bold;
}
</style>
