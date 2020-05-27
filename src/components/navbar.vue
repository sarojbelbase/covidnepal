<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark darker fixed-top">
      <router-link :to="{ name: 'local' }" class="navbar-brand">
        <img src="../assets/images/logo.svg" type="image/svg" alt="covidnepal" class="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
