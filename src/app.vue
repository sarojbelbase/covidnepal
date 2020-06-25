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

.neu {
  border-radius: 12px !important;
  background: -o-linear-gradient(225deg, #0a0a0a, #0d0d0e);
  background: linear-gradient(225deg, #0a0a0a, #0d0d0e);
  -webkit-box-shadow: -6px 6px 4px #0a0a0b, 6px -6px 3px #0e0e0f;
  box-shadow: -6px 6px 4px #0a0a0b, 6px -6px 3px #0e0e0f;
}

.neuify {
  background: -o-linear-gradient(225deg, #0a0a0a, #0d0d0e);
  background: linear-gradient(225deg, #0a0a0a, #0d0d0e);
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

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #0c0c0d;
}
::-webkit-scrollbar-thumb {
  background: #3d3d3d;
}
::-webkit-scrollbar-thumb:hover {
  background: #464646;
}

.bar-warning {
  background: -o-linear-gradient(225deg, #e9b61c, #8b751d);
  background: linear-gradient(225deg, #d4ac32, #8b751d);
}

.bar-info {
  background: -o-linear-gradient(225deg, #116e7c, #148c9e);
  background: linear-gradient(225deg, #116e7c, #148c9e);
}

.bar-success {
  background: -o-linear-gradient(225deg, #1fbb44, #357c45);
  background: linear-gradient(225deg, #1fbb44, #357c45);
}

.bar-danger {
  background: -o-linear-gradient(225deg, #e0505e, #c6303e);
  background: linear-gradient(225deg, #e0505e, #c6303e);
}

.bar-primary {
  background: -o-linear-gradient(225deg, #0464be, #29496b);
  background: linear-gradient(225deg, #0464be, #29496b);
}
</style>
