import Vue from "vue";
import app from "./app.vue";
import router from "./router";
import moment from "moment";
import VueMeta from 'vue-meta'
import InfiniteLoading from 'vue-infinite-loading';
import SequentialEntrance from 'vue-sequential-entrance'
import './assets/css/animation.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './reg-service-worker'

Vue.use(VueMeta)
Vue.use(SequentialEntrance);
Vue.use(InfiniteLoading, {});
Vue.config.productionTip = false;
Vue.config.ignoredElements = ['ion-icon'];

Vue.filter("padding", givenstat => {
  if (+givenstat >= 0 && givenstat < 10) {
    return "0" + givenstat;
  } else if (+givenstat > 9) {
    return givenstat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});

Vue.filter("humanize", givendate => {
  return moment(givendate).fromNow()
});

Vue.filter("ordinalize", givennumber => {
  const suffix = ["th", "st", "nd", "rd"]
  let thenumber = givennumber % 100;
  return givennumber + (suffix[(thenumber - 20) % 10] || suffix[thenumber] || suffix[0]);
});


Vue.filter("dayify", givendate => {
  const date = moment(givendate)
  return (moment().diff(date, 'days') >= 2) ? date.fromNow() : date.calendar().split(' ')[0]
});

Vue.mixin({
  data: () => {
    return {
      lockdownday: moment().diff('2020-03-24', 'days')
    }
  }
})

new Vue({
  router,
  render: h => h(app)
}).$mount("#app");
