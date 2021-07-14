<template>
<div class="function-wrap">
  <canvas id="c1" width="500" height="300"></canvas>
  <canvas id="c2" width="300" height="300"></canvas>
  <canvas id="c3" width="300" height="300"></canvas>
</div>
</template>

<script>
/* eslint-disable func-names */
import FuncDraw from 'assets/js/cg/drawFunction';

export default {
  name: 'functionMath',
  mounted() {
    this.draw2X();
    this.drawKx(2, -1);
    this.drawAbsKx(2);
  },
  methods: {
    draw2X() {
      const canvas = document.getElementById('c1');
      const c1 = new FuncDraw(canvas);
      c1.setColor('lightgrey', 'red');
      canvas.onclick = function () {
        c1.clear();
        c1.drawCoords();
        c1.drawFx(
          x => x * x,
          1,
          0.005,
        );
      };
      canvas.click();
    },
    drawKx(k, n) {
      const canvas = document.getElementById('c2');
      const c2 = new FuncDraw(canvas);
      c2.setColor('lightgrey', 'red');
      canvas.onclick = function () {
        c2.clear();
        c2.drawCoords();
        c2.drawFx(
          x => k * x + n,
          1,
          1,
        );
      };
      canvas.click();
    },
    drawAbsKx(k) {
      const canvas = document.getElementById('c3');
      const c3 = new FuncDraw(canvas);
      // const k = Math.cos(angle);
      c3.setColor('lightgrey', 'red');
      canvas.onclick = function () {
        c3.clear();
        c3.drawCoords();
        c3.drawFx(
          x => Math.abs((k / 4) * x),
          1,
          1,
        );
      };
      canvas.click();
    },
  },
};
</script>

<style lang="scss" scoped>
.function-wrap {
  width: 100%;
  height: 100%;
}
</style>
