import Vue from "vue";
import app from "./app.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

Vue.filter("padding", givenstat => {
  if (+givenstat >= 0 && givenstat < 10) {
    return "0" + givenstat;
  } else if (+givenstat > 9) {
    return givenstat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});

new Vue({
  router,
  render: h => h(app)
}).$mount("#app");
