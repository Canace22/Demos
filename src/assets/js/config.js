const config = [
  {
    name: 'canvas绘图',
    icon: './img/line.svg',
    isActive: 0,
    contents: [
      {
        title: 'pixi 使用数据渲染图片',
        name: 'PixiData',
        cover: './img/cover/hello.png',
      },
      {
        title: 'pixi 使用雪碧图',
        name: 'PixiSprite',
        cover: './img/cover/hello.png',
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
      {
        title: 'canvas 拖动',
        name: 'PixiDemo',
        cover: './img/cover/dragCat.png',
      },
    ],
  },
  {
    name: '计算图形学',
    icon: './img/3D.svg',
    isActive: -1,
    contents: [
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
    name: '动画',
    icon: './img/2d.svg',
    isActive: -1,
    contents: [
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
    ],
  },
];

export default config;
