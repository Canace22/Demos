import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const Clock = () => import(/* webpackChunkName: "clocks" */ './views/Clocks.vue');
const Drag = () => import(/* webpackChunkName: "drag" */ './views/Drag.vue');
const Video = () => import(/* webpackChunkName: "video" */ './views/Video.vue');

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  },
  {
    path: '/clock',
    name: 'clock',
    component: Clock,
  },
  {
    path: '/drag',
    name: 'drag',
    component: Drag,
  },
  {
    path: '/video',
    name: 'video',
    component: Video,
  },
  ],
});
