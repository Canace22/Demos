import * as PIXI from 'pixi.js';

export default class CreateDragThing {
  constructor({ dom, bg }) {
    this.dom = dom;
    this.app = new PIXI.Application({
      backgroundColor: bg || 0x1099bb,
    });
  }

  initView() {
    this.dom.appendChild(this.app.view);
  }

  // eslint-disable-next-line class-methods-use-this
  removeBunny() {
    this.app.stage.children.pop();
    console.log(this.app.stage.children);
  }

  createSingleBunny({ img, pos, dragData }) {
    let bunny = null;
    let texture = null;
    texture = PIXI.Texture.from(img);
    bunny = new PIXI.Sprite(texture);
    bunny.interactive = true;
    bunny.buttonMode = true;

    bunny.anchor.set(0.5);
    bunny.x = pos.x || this.app.screen.width / 2;
    bunny.y = pos.y || this.app.screen.height / 2;
    if (dragData === -1) {
      bunny
        .on('pointerdown', this.onDragStart)
        .on('pointerup', this.onDragEnd)
        .on('pointerupoutside', this.onDragEnd)
        .on('pointermove', this.onDragMove);
    }
    bunny.romove = () => {
      bunny.visible = false;
    };
    this.app.stage.addChild(bunny);
    return new Promise(resolve => resolve(bunny));
  }

  createBunny({ img, pos, dragData }) {
    const bunny = [];
    const texture = [];
    img.forEach((element, index) => {
      texture.push(PIXI.Texture.from(element));
      bunny.push(new PIXI.Sprite(texture[index]));
    });

    bunny.forEach((element, index) => {
      bunny[index].interactive = true;
      bunny[index].buttonMode = true;

      bunny[index].anchor.set(0.5);
      if (dragData.indexOf(index) === -1) {
        bunny[index]
          .on('pointerdown', this.onDragStart)
          .on('pointerup', this.onDragEnd)
          .on('pointerupoutside', this.onDragEnd)
          .on('pointermove', this.onDragMove);
      }

      bunny[index].x = pos[index].x || this.app.screen.width / 2;
      bunny[index].y = pos[index].y || this.app.screen.height / 2;

      this.app.stage.addChild(bunny[index]);
    });
    return new Promise(resolve => resolve(bunny));
  }

  onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
  }

  onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
  }

  onDragMove() {
    if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
  }
}
