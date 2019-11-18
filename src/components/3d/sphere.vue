<template>
  <canvas id="renderCanvas" class="sphere"></canvas>
</template>

<script>
import * as BABYLON from "babylonjs";
export default {
  name: "sphere",
  mounted() {
    const canvas = document.getElementById("renderCanvas");
    // 加载 3D 引擎
    const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
    // 创建并返回场景
    const createScene = () => {
      let scene = new BABYLON.Scene(engine);
      let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(10, 5, -10), scene);
      camera.setTarget(BABYLON.Vector3.Zero());
      camera.attachControl(canvas, false);
      let light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(10, 10, 10), scene);
      // 添加球体素材
      let sphere = BABYLON.Mesh.CreateSphere(
        "sphere1",
        16,
        2,
        scene,
        false,
        BABYLON.Mesh.FRONTSIDE
      );
      sphere.position.y = 1;
      // 添加平地素材
      let ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene, false);
      // 添加火焰素材
      const fireMaterial = new BABYLON.FireMaterial("fireMaterial", scene);
      // fireMaterial.diffuseTexture = new BABYLON.Texture("diffuse.png", scene);
      // fireMaterial.distortionTexture = new BABYLON.Texture("distortion.png", scene);
      // fireMaterial.opacityTexture = new BABYLON.Texture("opacity.png", scene);

      const plane = BABYLON.Mesh.CreatePlane("fireplane", 1.0, scene);
      plane.material = fireMaterial;
      return scene;
    };
    const scene = createScene();
    engine.runRenderLoop(() => {
      scene.render();
    });
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }
};
</script>

<style lang="scss" scoped>
.sphere {
  width: 100%;
  height: 100%;
}
</style>
