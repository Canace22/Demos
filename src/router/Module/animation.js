const animation = {
  path: '/animation',
  component: () => import('@/pages/layout.vue'),
  children: [
    {
      path: '/carousels-card',
      component: () => import('components/animate/carousel-card.vue'),
      media: { title: '轮播图——卡片' },
    },
    {
      path: '/carousels',
      component: () => () => import('components/animate/carousels.vue'),
      media: { title: '轮播图' },

    },
    {
      path: '/easing',
      component: () => import('components/animate/Easing.vue'),
      media: { title: '动态绳索' },

    },
    {
      path: '/battary',
      component: () => import('components/animate/Battary.vue'),
      media: { title: 'battary' },

    },
  ],
};
export default animation;
