import Vue from "vue";
import app from "./app.vue";
import router from "./router";
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './reg-service-worker'

Vue.config.productionTip = false;
Vue.config.ignoredElements = ['ion-icon'];

Vue.filter("padding", givenstat => {
  if (+givenstat >= 0 && givenstat < 10) {
    return "0" + givenstat;
  } else if (+givenstat > 9) {
    return givenstat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("#app");
