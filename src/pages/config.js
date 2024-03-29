/* eslint-disable global-require */
const covers = {
  strokeAnimate: require('@/assets/images/cover/strokeAnimate.png'),
  countAnimation: require('@/assets/images/cover/countAnimation.png'),
  'cover-sphere': require('@/assets/images/cover/cover-sphere.png'),
  colorful: require('@/assets/images/cover/colorful.png'),
  'ball-cover': require('@/assets/images/cover/ball-cover.png'),
  'primary-color': require('@/assets/images/cover/primary-color.png'),
  'math-function': require('@/assets/images/cover/math-function.png'),
  'sprite-create-remove': require('@/assets/images/cover/sprite-create-remove.png'),
  'leaf-volume': require('@/assets/images/cover/leaf-volume.png'),
  resize: require('@/assets/images/cover/resize.png'),
  'pixi-data': require('@/assets/images/cover/pixi-data.png'),
  'pixi-sprite': require('@/assets/images/cover/pixi-sprite.png'),
  hello: require('@/assets/images/cover/hello.png'),
  newSprite: require('@/assets/images/cover/newSprite.png'),
  rotateCat: require('@/assets/images/cover/rotateCat.png'),
  rotateRoly: require('@/assets/images/cover/rotateRoly.png'),
  default: require('@/assets/images/cover/cover.png'),

};
const config = {
  others: {
    name: '其他',
    icon: require('@/assets/images/other-icon.png'),
    isActive: 0,
    contents: [
      {
        title: 'codemirror',
        name: 'CodeMirror',
        path: 'codemirror',
        cover: covers.default,
      },
      {
        title: 'div 模拟 input placeholder',
        name: 'PlaceHolder',
        path: 'placeHolder',
        cover: covers.default,
      },
      {
        title: '列表控件',
        name: 'FormEl',
        path: 'form-el',
        cover: covers.default,
      },
      {
        title: '时钟', name: 'Clock', path: 'clock', cover: covers.default,
      },
      {
        title: '自由拖动', name: 'Move', path: 'move', cover: covers.default,
      },
      {
        title: '列表拖拽', name: 'DragList', path: 'drag-move', cover: covers.default,
      },
    ],
  },
  webgl: {
    name: 'webGL',
    icon: require('@/assets/images/line.svg'),
    isActive: -1,
    contents: [
      // {
      //   title: '魔方',
      //   name: 'Cube',
      //   cover: './img/cover/cover-sphere.png',
      // },
      {
        title: 'babylonjs 画球体',
        path: 'sphere',
        name: 'Sphere',
        cover: covers['cover-sphere'],
      },
      {
        title: '调色板',
        path: 'color-board',
        name: 'ColorBoard',
        cover: covers.colorful,
      },
      {
        title: '球体',
        path: 'ball',
        name: 'Ball',
        cover: covers['ball-cover'],
      },
      {
        title: '画叶片轮廓',
        path: 'poly',
        name: 'Poly',
        cover: covers.default,
      },
      {
        title: '自由伸缩的矩形',
        path: 'free-rect',
        name: 'FreeRect',
        cover: covers.resize,
      },
      {
        title: '光的三原色',
        path: 'three-primary-color',
        name: 'ThreePrimaryColor',
        cover: covers['primary-color'],
      },
      {
        title: '数学函数',
        path: 'function-math',
        name: 'FunctionMath',
        cover: covers['math-function'],
      },
      {
        title: 'canvas 精灵创建移除以及拖动操作',
        path: 'pixi-demo',
        name: 'PixiDemo',
        cover: covers['sprite-create-remove'],
      },
      {
        title: '果实的体积',
        path: 'leaf-volumn',
        name: 'LeafVolumn',
        cover: covers['leaf-volume'],
      },
      {
        title: 'pixi 使用数据渲染图片',
        path: 'pixi-data',
        name: 'PixiData',
        cover: covers['pixi-data'],
      },
      {
        title: '移动的火箭',
        path: 'pixi-sprite',
        name: 'PixiSprite',
        cover: covers['pixi-sprite'],
      },
      {
        title: 'pixi hello world',
        path: 'pixi-init',
        name: 'PixiInit',
        cover: covers.hello,
      },
      {
        title: '合成雪碧图',
        path: 'new-sprite',
        name: 'NewSprite',
        cover: covers.newSprite,
      },
      {
        title: 'pixi-container',
        path: 'pixi-container',
        name: 'Container',
        cover: covers.rotateCat,
      },
      {
        title: 'pixi-画动态图',
        path: 'draw-move-shape',
        name: 'DrawMoveShape',
        cover: covers.rotateRoly,
      },
      // {
      //   title: 'canvas 拖动',
      //   name: 'PixiDemo',
      //   cover: './img/cover/dragCat.png',
      // },
    ],
  },
  animation: {
    name: '动画',
    icon: require('@/assets/images/an-icon.svg'),
    isActive: -1,
    contents: [
      {
        title: '轮播图——卡片',
        path: 'carousels-card',
        name: 'CarouselsCard',
        cover: covers.default,
      },
      {
        title: '轮播图',
        path: 'carousels',
        name: 'Carousels',
        cover: covers.default,
      },
      {
        title: '动态绳索',
        path: 'easing',
        name: 'Easing',
        cover: covers.strokeAnimate,
      },
      {
        title: 'battary',
        path: 'battary',
        name: 'Battary',
        cover: covers.countAnimation,
      },
    ],
  },
  media: {
    name: '媒体',
    path: 'video',
    icon: require('@/assets/images/media.svg'),
    isActive: -1,
    contents: [{ title: '视频播放器', name: 'Video', cover: covers.default }],
  },
};

export default config;
