<template>
  <div id="leaf-wrap" class="leaf-wrap"></div>
</template>

<script>
import CreateDragThing from 'assets/js/dragging';

export default {
  name: 'pixi',
  mounted() {
    this.createPixi();
  },
  methods: {
    createPixi() {
      const el = document.getElementById('leaf-wrap');
      const cat = new CreateDragThing({
        dom: el,
        img: ['./img/cat.png', './img/cat.png', './img/cat.png'],
        pos: [{ x: 183, y: 185 }, { x: 283, y: 285 }, { x: 383, y: 385 }],
        dragData: [0, 1],
        bg: 0x000,
      });
      cat.initDrag();
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
