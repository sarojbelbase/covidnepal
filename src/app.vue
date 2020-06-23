<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  name: "app",
  components: {
    navbar
  }
};
</script>

<style>
body {
  font-family: "Source Sans Pro", sans-serif !important;
  background-color: #0c0c0d !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-align: center !important;
  margin-top: 60px !important;
}

.card {
  border-radius: 8px !important;
}

.darker {
  background-color: #141414;
}

.semi-darker {
  background-color: #1a1a1b !important;
}

.dark {
  background-color: #616161;
}

.covid-confirmed {
  color: #e8e3e3;
}

.covid-recovered {
  color: #f39c2a;
}

.covid-deceased {
  color: #dd4a4a;
}

.loader {
  position: absolute;
  top: 48%;
  right: 48%;
}

.covid-text {
  color: #bfcacf;
}

.covid-alt {
  color: #fd9001;
}
</style>
