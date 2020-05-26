<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark darker fixed-top">
      <router-link :to="{ name: 'index' }" class="navbar-brand">
        <img
          src="../assets/images/logo.svg"
          type="image/svg"
          alt="covidnepal"
          class="logo"
        />
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
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'provinces' }" class="nav-link"
              >Provinces</router-link
            >
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
