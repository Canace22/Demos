import Vue from 'vue';
import VueRouter from 'vue-router';
import others from './Module/others';
import webGL from './Module/web-gl';
import animation from './Module/animation';
import media from './Module/media';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/layout.vue'),
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('@/pages/layout.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/pages/home.vue'),
        },
      ],
    },
    others,
    webGL,
    animation,
    media,
  ],
});

export default router;
