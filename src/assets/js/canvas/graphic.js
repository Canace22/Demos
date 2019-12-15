/* eslint-disable class-methods-use-this */
import * as PIXI from 'pixi.js';

// 基础图形
export default class Graphics {
  // RoundedRect
  drawRectangle({
 x, y, w, h, color, alpha 
}) {
    const rectangle = new PIXI.Graphics();
    rectangle.beginFill(0x2f2f2f || color, alpha || 0.5);
    rectangle.drawRoundedRect(x, y, w, h, 10);
    rectangle.endFill();
    return rectangle;
  }

  // Rect
  drawRect({
 x, y, w, h, stroke, color, bold 
}) {
    const rectangle = new PIXI.Graphics();
    rectangle.lineStyle(stroke || 1, color || 0x000000, bold || 1);
    rectangle.beginFill(color);
    rectangle.drawRect(0, 0, w || 1, h || 1);
    rectangle.endFill();
    rectangle.x = x || 0;
    rectangle.y = y;
    return rectangle;
  }
}
