/* eslint-disable class-methods-use-this */
import * as PIXI from 'pixi.js';

export default class createColorCircle {
  constructor(dom) {
    this.dom = dom;
    this.app = new PIXI.Application({
      width: 1280,
      height: 800,
      transparent: true,
    });
    this.app.renderer.view.style.overflow = 'hidden';
  }

  initView() {
    this.dom.appendChild(this.app.view);
  }

  // 画三色片
  drawThreeColorPlane() {
    const pos = { x: this.app.renderer.width / 2, y: this.app.renderer.height / 2 };
    const arr = [
      {
        sprite: new PIXI.Graphics(),
        color: 0xd92f20,
        pos: { x: pos.x, y: pos.y },
      },
      {
        sprite: new PIXI.Graphics(),
        color: 0x0021f7,
        pos: { x: pos.x + 40, y: pos.y + 60 },
      },
      {
        sprite: new PIXI.Graphics(),
        color: 0x75fa4c,
        pos: { x: pos.x - 40, y: pos.y + 60 },
      },
    ];
    const blend = PIXI.BLEND_MODES.SCREEN;
    arr.forEach((ele, index) => {
      arr[index].sprite.interactive = true;
      arr[index].sprite.buttonMode = true;
      arr[index].sprite.type = 3;
      ele.sprite
        .on('pointerdown', this.onDragStart.bind(this))
        .on('pointerup', this.onDragEnd.bind(this))
        .on('pointerupoutside', this.onDragEnd.bind(this))
        .on('pointermove', this.onDragMove.bind(this));
      ele.sprite.beginFill(ele.color);
      ele.sprite.drawCircle(0, 0, 60);
      ele.sprite.endFill();
      ele.sprite.position.set(ele.pos.x, ele.pos.y);
      arr[index].sprite.blendMode = blend;

      this.app.stage.addChild(ele.sprite);
    });
  }

  onDragStart(event) {
    const { currentTarget } = event;
    currentTarget.alpha = 0.5;
    currentTarget.dragging = true;
    currentTarget.data = event.data;
  }

  onDragEnd(event) {
    const { currentTarget } = event;
    currentTarget.alpha = 1;
    currentTarget.dragging = false;
    currentTarget.data = null;
  }

  onDragMove(event) {
    const { currentTarget } = event;

    if (currentTarget.dragging) {
      const newPosition = currentTarget.data.getLocalPosition(currentTarget.parent);
      currentTarget.x = newPosition.x;
      currentTarget.y = newPosition.y;
    }
  }
}
