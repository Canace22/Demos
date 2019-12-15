<template>
  <div>
    <canvas width="500" height="500" id="depthCanvas"></canvas>
  </div>
</template>

<script>
import Sphere from "assets/js/cg/sphere";
import PerspectiveCamera from "assets/js/cg/perspective-camera";
import Vector3 from "assets/js/cg/vector3";
export default {
  name: "ball",
  mounted() {
    this.renderDepth(
      document.getElementById("depthCanvas"),
      new Sphere(new Vector3(0, 10, -10), 10),
      new PerspectiveCamera(
        new Vector3(0, 10, 10),
        new Vector3(0, 0, -1),
        new Vector3(0, 1, 0),
        110
      ),
      18
    );
  },
  methods: {
    renderDepth(canvas, scene, camera, maxDepth) {
      // @canvas：dom, @scene: 物体, @camera：透视, @maxDepthX: 阴影深浅
      const ctx = canvas.getContext("2d");
      const w = canvas.attributes.width.value;
      const h = canvas.attributes.width.value;
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.fillRect(0, 0, w, h);
      const imgdata = ctx.getImageData(0, 0, w, h);
      const pixels = imgdata.data;

      scene.initialize();
      camera.initialize();

      let i = 0;
      for (let y = 0; y < h; y++) {
        let sy = 1 - y / h;
        for (let x = 0; x < w; x++) {
          let sx = x / w;
          let ray = camera.generateRay(sx, sy);
          let result = scene.intersect(ray);
          if (result.geometry) {
            const depth = 255 - Math.min((result.distance / maxDepth) * 255, 255);
            pixels[i] = depth;
            pixels[i + 1] = depth;
            pixels[i + 2] = depth;
            pixels[i + 3] = 255;
          }
          i += 4;
        }
      }

      ctx.putImageData(imgdata, 0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
#depthCanvas {
  width: 100%;
  height: 100%;
}
</style>
