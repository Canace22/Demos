<template>
  <div ref="container"></div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  name: 'DrawMoveShape',
  mounted() {
    this.draw({ el: this.$refs.container });
  },
  methods: {
    draw(config) {
      const app = new PIXI.Application({ antialias: true });
      config.el.appendChild(app.view);

      app.stage.interactive = true;

      const graphics = new PIXI.Graphics();

      // let's create a moving shape
      const thing = new PIXI.Graphics();
      app.stage.addChild(thing);
      thing.x = 800 / 2;
      thing.y = 600 / 2;

      let count = 0;

      const onPointerDown = () => {
        graphics.lineStyle(Math.random() * 30, Math.random() * 0xffffff, 1);
        graphics.moveTo(Math.random() * 800, Math.random() * 600);
        graphics.bezierCurveTo(
          Math.random() * 800,
          Math.random() * 600,
          Math.random() * 800,
          Math.random() * 600,
          Math.random() * 800,
          Math.random() * 600,
        );
      };

      // Just click on the stage to draw random lines
      window.app = app;
      app.renderer.plugins.interaction.on('pointerdown', onPointerDown);

      app.ticker.add(() => {
        count += 0.1;

        thing.clear();
        thing.lineStyle(1, 0xffffff, 1);
        thing.beginFill(0xffff00, 0.5);

        thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
        thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
        thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
        thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
        thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
        thing.closePath();

        // thing.rotation = count * 0.1;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
