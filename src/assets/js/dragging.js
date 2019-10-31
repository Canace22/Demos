import * as PIXI from 'pixi.js';

export default class CreateDragThing {
  constructor({
    dom,
    img,
    pos,
    dragData,
    bg,
  }) {
    const texture = [];
    const bunny = [];
    this.dom = dom;
    this.app = new PIXI.Application({
      backgroundColor: bg || 0x1099bb,
    });
    this.pos = pos;
    this.dragData = dragData;
    img.forEach((element, index) => {
      texture.push(PIXI.Texture.from(element));
      bunny.push(new PIXI.Sprite(texture[index]));
    });
    this.bunny = bunny;
  }

  initDrag() {
    this.dom.appendChild(this.app.view);
    this.createBunny();
  }

  createBunny() {
    this.bunny.forEach((element, index) => {
      this.bunny[index].interactive = true;
      this.bunny[index].buttonMode = true;

      this.bunny[index].anchor.set(0.5);
      if (this.dragData.indexOf(index) === -1) {
        this.bunny[index]
          .on('pointerdown', this.onDragStart)
          .on('pointerup', this.onDragEnd)
          .on('pointerupoutside', this.onDragEnd)
          .on('pointermove', this.onDragMove);
      }

      this.bunny[index].x = this.pos[index].x || this.app.screen.width / 2;
      this.bunny[index].y = this.pos[index].y || this.app.screen.height / 2;

      this.app.stage.addChild(this.bunny[index]);
    });
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
