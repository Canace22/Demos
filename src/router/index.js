import Vue from "vue";
import VueRouter from "vue-router";
import components from "@/assets/js/getImport";

Vue.use(VueRouter);

const routes = [{ path: "/", component: () => import("@/pages/home") }];
const keys = Object.keys(components);
keys.forEach(el => {
  routes.push({
    path: '/' + el.toLowerCase(),
    component: components[el]
  });
});

const router = new VueRouter({
  routes
});

export default router;
