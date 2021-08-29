const others = {
  path: '/others',
  component: () => import('@/pages/layout.vue'),
  children: [
    {
      path: '/codemirror',
      component: () => import('components/other/code-mirror.vue'),
      media: { title: 'code-mirror' },
    },
    {
      path: '/placeHolder',
      component: () => import('components/other/placeholder.vue'),
      media: { title: 'div 模拟 input placeholder' },

    },
    {
      path: '/form-el',
      component: () => import('components/other/FormEl.vue'),
      media: { title: '列表控件' },

    },
    {
      path: '/clock',
      component: () => import('components/other/Clock.vue'),
      media: { title: '时钟' },

    },
    {
      path: '/move',
      component: () => import('components/other/move.vue'),
      media: { title: '自由拖动' },

    },
    {
      path: '/drag-move',
      component: () => import('pages/drag.vue'),
      media: { title: '列表拖拽' },

    },
  ],
};
export default others;
