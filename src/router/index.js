import Vue from "vue";
import Router from "vue-router";
import index from "@/components/index";
import provinces from "@/components/provinces";
import provincedetail from "@/components/provincedetail";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/provinces",
      name: "provinces",
      component: provinces
    },
    {
      path: "/province/:province_id",
      name: "provincedetail",
      component: provincedetail,
      props: true
    }
  ]
});
