const config = [
  {
    name: '动画',
    icon: './img/2d.svg',
    isActive: 0,
    contents: [
      {
        title: '轮播图——卡片',
        name: 'CarouselsCard',
        cover: './img/cover/strokeAnimate.png',
      },
      {
        title: '轮播图',
        name: 'Carousels',
        cover: './img/cover/strokeAnimate.png',
      },
      {
        title: '动态绳索',
        name: 'Easing',
        cover: './img/cover/strokeAnimate.png',
      },
      {
        title: 'battary',
        name: 'Battary',
        cover: './img/cover/countAnimation.png',
      },
    ],
  },
  {
    name: 'canvas绘图',
    icon: './img/line.svg',
    isActive: -1,
    contents: [
      {
        title: '画叶片轮廓',
        name: 'Poly',
        cover: './img/cover/primary-color.png',
      },
      {
        title: '自由伸缩的矩形',
        name: 'FreeRect',
        cover: './img/cover/resize.png',
      },
      {
        title: '光的三原色',
        name: 'ThreePrimaryColor',
        cover: './img/cover/primary-color.png',
      },
      {
        title: '数学函数',
        name: 'FunctionMath',
        cover: './img/cover/math-function.png',
      },
      {
        title: 'canvas 精灵创建移除以及拖动操作',
        name: 'PixiDemo',
        cover: './img/cover/sprite-create-remove.png',
      },
      {
        title: '果实的体积',
        name: 'LeafVolumn',
        cover: './img/cover/leaf-volume.png',
      },
      {
        title: 'pixi 使用数据渲染图片',
        name: 'PixiData',
        cover: './img/cover/pixi-data.png',
      },
      {
        title: '移动的火箭',
        name: 'PixiSprite',
        cover: './img/cover/pixi-sprite.png',
      },
      {
        title: 'pixi hello world',
        name: 'PixiInit',
        cover: './img/cover/hello.png',
      },
      {
        title: '合成雪碧图',
        name: 'NewSprite',
        cover: './img/cover/newSprite.png',
      },
      {
        title: 'pixi-container',
        name: 'Container',
        cover: './img/cover/rotateCat.png',
      },
      {
        title: 'pixi-画动态图',
        name: 'DrawMoveShape',
        cover: './img/cover/rotateRoly.png',
      },
      // {
      //   title: 'canvas 拖动',
      //   name: 'PixiDemo',
      //   cover: './img/cover/dragCat.png',
      // },
    ],
  },
  {
    name: '3D',
    icon: './img/3D.svg',
    isActive: -1,
    contents: [
      {
        title: '魔方',
        name: 'Cube',
        cover: './img/cover/cover-sphere.png',
      },
      {
        title: '球体（1）',
        name: 'Sphere',
        cover: './img/cover/cover-sphere.png',
      },
      {
        title: '调色板',
        name: 'ColorBoard',
        cover: './img/cover/colorful.png',
      },
      {
        title: '球体',
        name: 'Ball',
        cover: './img/cover/ball-cover.png',
      },
    ],
  },
  {
    name: '媒体',
    icon: './img/media.svg',
    isActive: -1,
    contents: [{ title: '视频播放器', name: 'Video', cover: './img/1.png' }],
  },
  {
    name: '拖动',
    icon: './img/drag.svg',
    isActive: -1,
    contents: [{ title: '列表拖拽', name: 'DragList', cover: './img/3.png' }],
  },
  {
    name: '其他',
    icon: './img/other-icon.png',
    isActive: -1,
    contents: [
      {
        title: 'div 模拟 input placeholder',
        name: 'PlaceHolder',
        cover: './img/1.png',
      },
      {
        title: '列表控件',
        name: 'FormEl',
        cover: './img/2.png',
      },
      { title: '时钟', name: 'Clock', cover: './img/4.png' },
      { title: '自由拖动', name: 'Move', cover: './img/4.png' },
    ],
  },
];

export default config;
