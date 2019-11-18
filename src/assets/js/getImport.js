const components = {
  Clock: () => import("components/other/Clock.vue"),
  Video: () => import("components/media/Video.vue"),
  DragList: () => import("components/other/drag-list.vue"),
  FormEl: () => import("components/other/FormEl.vue"),
  Container: () => import("components/pixi/Container.vue"),
  DrawMoveShape: () => import("components/pixi/DrawMoveShape.vue"),
  PlaceHolder: () => import("components/other/placeholder.vue"),
  NewSprite: () => import("components/canvas/new-sprite.vue"),
  PixiDemo: () => import("components/pixi/pixi-demo.vue"),
  Battary: () => import("components/animate/Battary"),
  Easing: () => import("components/animate/Easing"),
  ColorBoard: () => import("components/cg/color-board"),
  Ball: () => import("components/cg/ball"),
  PixiInit: () => import("components/pixi/hello-world"),
  PixiSprite: () => import("components/pixi/sprite-from-tileset"),
  PixiData: () => import("components/pixi/sprite-from-data"),
  LeafVolumn: () => import("components/pixi/leaf-volumn"),
  Sphere: () => import("components/3d/sphere")
};

export default components;
