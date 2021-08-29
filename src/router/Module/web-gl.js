const webGL = {
  path: '/others',
  component: () => import('@/pages/layout.vue'),
  children: [
    {
      path: '/sphere',
      component: () => import('components/sphere.vue'),
      media: { title: 'babylonjs 画球体' },
    },
    {
      path: '/color-board',
      component: () => import('components/cg/color-board.vue'),
      media: { title: '调色板' },

    },
    {
      path: '/ball',
      component: () => import('components/cg/ball.vue'),
      media: { title: '球体' },

    },
    {
      path: '/poly',
      component: () => import('components/canvas/poly.vue'),
      media: { title: '画叶片轮廓' },

    },
    {
      path: '/free-rect',
      component: () => import('components/canvas/free-rect.vue'),
      media: { title: '自由伸缩的矩形' },
    },
    {
      path: '/three-primary-color',
      component: () => import('components/canvas/three-primary-colors.vue'),
      media: { title: '光的三原色' },
    },
    {
      path: '/function-math',
      component: () => import('components/cg/function-math.vue'),
      media: { title: '数学函数' },
    },
    {
      path: '/pixi-demo',
      component: () => import('components/pixi/pixi-demo.vue'),
      media: { title: 'canvas 精灵创建移除以及拖动操作' },
    },
    {
      path: '/leaf-volumn',
      component: () => import('components/pixi/leaf-volumn.vue'),
      media: { title: '果实的体积' },
    },
    {
      path: '/pixi-data',
      component: () => import('components/pixi/sprite-from-data.vue'),
      media: { title: 'pixi 使用数据渲染图片' },
    },
    {
      path: '/pixi-sprite',
      component: () => import('components/pixi/sprite-from-tileset.vue'),
      media: { title: '移动的火箭' },
    },
    {
      path: '/pixi-init',
      component: () => import('components/pixi/hello-world.vue'),
      media: { title: 'pixi hello world' },
    },
    {
      path: '/new-sprite',
      component: () => import('components/canvas/new-sprite.vue'),
      media: { title: '合成雪碧图' },
    },
    {
      path: '/pixi-container',
      component: () => import('components/pixi/Container.vue'),
      media: { title: 'pixi-container' },
    },
    {
      path: '/draw-move-shape',
      component: () => import('components/pixi/DrawMoveShape.vue'),
      media: { title: 'pixi-画动态图' },
    },
  ],
};
export default webGL;
