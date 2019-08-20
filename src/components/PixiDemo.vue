<template>
  <div id="leaf-wrap" class="leaf-wrap"></div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
  name: 'pixi',
  created() {
    let type = 'WebGL';
    if (!PIXI.utils.isWebGLSupported()) {
      type = 'canvas';
    }
    PIXI.utils.sayHello(type);
    setTimeout(() => {
      this.createPixi();
    }, 1000);
  },
  methods: {
    createPixi() {
      const el = document.getElementById('leaf-wrap');

      // Create a Pixi Application
      const app = new PIXI.Application({
        width: 256,
        height: 256,
        antialias: true,
        transparent: false,
        resolution: 1,
      });

      const setup = () => {
        // Create the cat sprite
        const cat = new PIXI.Sprite(
          PIXI.loader.resources['./img/leafBoard.png'].texture,
        );
        app.stage.addChild(cat);
      };

      el.appendChild(app.view);

      PIXI.loader.load(setup);
    },
  },
};
</script>

<style lang="scss" scoped>
.leaf-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
