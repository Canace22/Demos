<template>
  <div id="wrap" class="wrap">
    <canvas id="canvas" class="canvas" width="483" height="486"></canvas>
    <img style="display:none" ref="img" class="pen" :src="pen" />
    <img style="display:none" ref="leaf" class="leaf" :src="leaf" />
    <button @click="drawPolygon(padding,scale, poly)">start</button>
  </div>
</template>

<script>
import * as Paper from 'paper';
import Two from 'two.js';
import polygonData from '@/assets/js/polygonData.js';

export default {
  name: 'canvasPath',
  data() {
    return {
      leaf: './img/leaf.png',
      pen: './img/pen.png',
      padding: {
        left: 100,
        top: 200,
      },
      scale: 0.5,
      poly: polygonData.first,
    };
  },
  mounted() {
    const { img } = this.$refs;
    this.drawPolygon(this.padding, this.scale, this.poly, img);
  },
  methods: {
    drawPolygon(padding, scale, path, handleEl) {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      let t = 0;

      const draw = () => {
        if (t >= path.length) {
          clearInterval(clock);
          return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        t += 2;
        ctx.beginPath();
        ctx.moveTo(
          path[0].x * scale + padding.left,
          path[0].y * scale + padding.top,
        );
        if (t > path.length) {
          t = path.length;
        }
        if (handleEl) {
          ctx.drawImage(
            handleEl,
            path[t - 1].x * scale + padding.left,
            (path[t - 1].y - 240) * scale + padding.top,
            143 * scale,
            252 * scale,
          );
        }

        for (let i = 0; i < t; i++) {
          if (path[i]) {
            ctx.lineTo(
              path[i].x * scale + padding.left,
              path[i].y * scale + padding.top,
            );
          }
        }
        ctx.strokeStyle = '#07B1CA';
        ctx.lineWidth = 1;
        ctx.stroke();
      };

      const clock = setInterval(draw, 50);
    },
    drawLine() {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = canvas.width;

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(15, 75);
        ctx.lineTo(45, 15);
        ctx.stroke();

        ctx.translate(0, 5);

        window.requestAnimationFrame(draw);
      };
      ctx.restore();
      setInterval(() => {
        window.requestAnimationFrame(draw);
      }, 2000);
    },
    drawRect() {
      const elem = document.getElementById('wrap');
      const two = new Two({ width: 285, height: 200 }).appendTo(elem);

      const circle = two.makeCircle(-70, 0, 50);
      const rect = two.makeRectangle(70, 0, 100, 100);
      circle.fill = '#FF8000';
      rect.fill = 'rgba(0, 200, 255, 0.75)';

      const group = two.makeGroup(circle, rect);
      group.translation.set(two.width / 2, two.height / 2);
      group.scale = 0;
      group.noStroke();

      // Bind a function to scale and rotate the group
      // to the animation loop.
      two
        .bind('update', (frameCount) => {
          // This code is called everytime two.update() is called.
          // Effectively 60 times per second.
          if (group.scale > 0.9999) {
            group.scale = group.rotation = 0;
          }
          const t = (1 - group.scale) * 0.125;
          group.scale += t;
          group.rotation += t * 4 * Math.PI;
        })
        .play(); // Finally, start the animation loop
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .canvas {
    width: 483;
    height: 486;
    transition: all 0.2s linear;
  }
  .pen {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
