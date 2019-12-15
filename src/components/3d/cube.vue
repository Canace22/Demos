<template>
  <div ref="cube"></div>
</template>

<script>
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  LineBasicMaterial,
  Geometry,
  Vector3,
  Line
} from "three";
const scene = new Scene();
const renderer = new WebGLRenderer();

export default {
  name: "cube",
  mounted() {
    // this.drawCube();
    this.drawLine();
  },
  methods: {
    drawCube() {
      const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.cube.appendChild(renderer.domElement);

      const geometry = new BoxGeometry(1, 1, 1);
      const material = new MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;
      const animate = () => {
        requestAnimationFrame(animate);
        // 旋转魔方
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    },
    drawLine() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.cube.appendChild(renderer.domElement);

      const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
      camera.position.set(0, 0, 100);
      camera.lookAt(0, 0, 0);

      const material = new LineBasicMaterial({ color: 0x0000ff });
      const geometry = new Geometry();
      geometry.vertices.push(new Vector3(-10, 0, 0));
      geometry.vertices.push(new Vector3(0, 10, 0));
      geometry.vertices.push(new Vector3(10, 0, 0));
      const line = new Line(geometry, material);
      scene.add(line);
      renderer.render(scene, camera);
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
