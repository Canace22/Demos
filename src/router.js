import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  { path: "/", name: "root", redirect: "/demo" },
  { path: "/demo", component: () => import("@/pages/home") },
  { path: "/drag", component: () => import("@/pages/drag") }
];

export default new Router({
  routes
});
