<template>
  <div class="poly-container">
    <canvas ref="move" class="aimate"></canvas>
  </div>
</template>

<script>
import polyData from '@/assets/js/polygon-data.js';

export default {
  name: 'poly',
  data() {
    return { t: 0 };
  },
  mounted() {
    let start = null;
    const element = this.$refs.move;
    const ctx = element.getContext('2d');
    const path = polyData[0];

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const t = ~~Math.min(progress / 10, 200);
      element.width = 800;
      element.height = 500;

      ctx.clearRect(0, 0, element.width, element.height);
      ctx.beginPath();
      ctx.moveTo(
        path[0].x / 2 + 100,
        path[0].y / 2 + 200,
      );
      for (let i = 0; i < t; i++) {
        if (path[i]) {
          ctx.lineTo(
            path[i].x / 2 + 100,
            path[i].y / 2 + 200,
          );
        }
      }
      ctx.strokeStyle = '#07B1CA';
      ctx.lineWidth = 3;
      ctx.stroke();
      if (progress < 2000) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.aimate {
  border: 1px solid;
}
</style>
