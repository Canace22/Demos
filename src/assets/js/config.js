const config = [
  {
    name: '计算图形学',
    icon: './img/animation-2d.png',
    isActive: 0,
    contents: [
      {
        title: '调色板',
        name: 'ColorBoard',
        cover: './img/colorful.png',
      },
      {
        title: '球体',
        name: 'Ball',
        cover: './img/ball-cover.png',
      },
    ],
  },
  {
    name: '动画',
    icon: './img/animation-2d.png',
    isActive: -1,
    contents: [
      {
        title: '动态绳索',
        name: 'Easing',
        cover: './img/strokeAnimate.png',
      },
      {
        title: 'battary',
        name: 'Battary',
        cover: './img/countAnimation.png',
      },
    ],
  },
  {
    name: 'canvas绘图',
    icon: './img/draw-icon.png',
    isActive: -1,
    contents: [
      {
        title: 'pixi-container',
        name: 'Container',
        cover: './img/rotateCat.png',
      },
      {
        title: 'pixi-画动态图',
        name: 'DrawMoveShape',
        cover: './img/rotateRoly.png',
      },
      {
        title: '合成雪碧图',
        name: 'NewSprite',
        cover: './img/newSprite.png',
      },
      {
        title: 'canvas 拖动',
        name: 'PixiDemo',
        cover: './img/dragCat.png',
      },
    ],
  },
  {
    name: '媒体',
    icon: './img/meta-icon.png',
    isActive: -1,
    contents: [{ title: '视频播放器', name: 'Video', cover: './img/1.png' }],
  },
  {
    name: '拖动',
    icon: './img/drag-icon.png',
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
