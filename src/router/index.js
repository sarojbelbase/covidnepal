import Vue from "vue";
import Router from "vue-router";
import local from "@/components/local";
import global from "@/components/global";
import news from "@/components/news";
import provinces from "@/components/provinces";
import provincedetail from "@/components/provincedetail";
import districts from "@/components/districts";
import maps from "@/components/map";
import about from "@/components/about";


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "local",
      component: local
    },
    {
      path: "/provinces",
      name: "provinces",
      component: provinces
    },
    {
      path: "/districts",
      name: "districts",
      component: districts,
      props: true
    },
    {
      path: "/global",
      name: "global",
      component: global
    },
    {
      path: "/province/:province_id",
      name: "provincedetail",
      component: provincedetail,
      props: true
    },
    {
      path: "/news",
      name: "news",
      component: news
    },
    {
      path: "/maps",
      name: "maps",
      component: maps
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
  ]
});
