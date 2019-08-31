<template>
  <div id="wrap" class="wrap">
    <canvas id="canvas" class="canvas" width="483" height="486"></canvas>
    <!-- <img style="display:none" ref="img" class="pen" :src="pen" />
    <img style="display:none" ref="leaf" class="leaf" :src="leaf" />-->
    <button @click="drawInit">start</button>
  </div>
</template>

<script>
import polygonData from "@/assets/js/polygonData";
import drawPath from "@/assets/js/drawPath";

export default {
  name: "canvasPath",
  data() {
    return {
      leaf: "./img/leaf.png",
      pen: "./img/pen.png",
      data: [
        { img: "./img/leaf_area/leafs.png", pos: [] },
        { img: "./img/leaf_area/pen.png", pos: { x: 0, y: 0 } },
        { img: "./img/leaf_area/blackBoard.png", pos: { x: 0, y: 0 } }
      ],
      config: {
        padding: {
          left: 100,
          top: 200
        },
        scale: 0.5,
        path: polygonData.first,
        color: "#fff",
        sw: 143,
        sh: 252
      }
    };
  },
  mounted() {
    // this.drawPolygon();
    this.drawInit();
  },
  methods: {
    drawPolygon() {
      const { img } = this.$refs;
      this.$set(this.config, "handleEl", img);
      drawPath(this.config);
    },
    drawInit() {
      // const canvas = document.getElementById("canvas");
      for (let i = 0; i < this.data.length - 1; i++) {
        const wrap = document.getElementById("wrap");
        const canvas = document.createElement("CANVAS");
        const ctx = canvas.getContext("2d");
        const image = new Image(0, 0);
        console.log(canvas);
        canvas.setAttribute("width", 483);
        canvas.setAttribute("height", 486);
        image.src = this.data[i + 1].img;
        image.onload = () => {
          canvas.width = image.naturalWidth;
          canvas.height = image.naturalHeight;
          ctx.drawImage(image, 0, 0);
          ctx.drawImage(image, 0, 0, image.width, image.height);
        };
        wrap.appendChild(canvas);
      }
      // const canvas = document.createElement("canvas");
      // const ctx = canvas.getContext("2d");

      // const image = new Image(0, 0);
      // image.src = this.data[2].img;
      // image.onload = () => {
      //   canvas.width = image.naturalWidth;
      //   canvas.height = image.naturalHeight;
      //   ctx.drawImage(image, 0, 0);
      //   ctx.drawImage(image, 0, 0, image.width, image.height);
      // };
      // const img = new Image(0, 0);
      // img.style.display = "none";
      // img.src = this.data[1].img;
      // img.onload = () => {
      //   canvas.width = img.naturalWidth;
      //   canvas.height = img.naturalHeight;
      //   ctx.drawImage(img, 0, 0);
      //   ctx.drawImage(img, 0, 0, img.width, img.height);
      // };
    }
  }
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
    transform: scale(0.5);
    transition: all 0.2s linear;
  }
  .pen {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
