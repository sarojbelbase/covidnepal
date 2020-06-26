<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark darker fixed-top">
      <div class="container-fluid">
        <router-link :to="{ name: 'local' }" class="navbar-brand">
          <img src="../assets/images/logo.svg" type="image/svg" alt="covidnepal" class="logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navdown-bar"
          aria-controls="navdown-bar"
          aria-expanded="false"
          aria-label="See Navigation Contents"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navdown-bar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'provinces' }" class="nav-link">Province</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'local' }" class="nav-link">Nepal</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'global' }" class="nav-link">Global</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
};
</script>

<style>
.logo {
  height: 32px;
}
</style>
