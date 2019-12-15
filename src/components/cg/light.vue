<template>
	<div>
		<canvas ref="canvas" width="500" height="500" id="light"></canvas>
		<img
			style="display:none"
			ref="rayPen"
			:src="rayPen"
			width="300"
			height="227"
		/>
	</div>
</template>

<script>
	import PerspectiveCamera from "assets/js/cg/perspective-camera";
	import Vector3 from "assets/js/cg/vector3";
	import Ray3 from "assets/js/cg/ray3";

	export default {
		name: "light",
		data() {
			return {
				rayPen: "./img/red-ray-pen.png"
			};
		},
		mounted() {
			const ele = this.$refs.canvas;
			const ctx = ele.getContext("2d");
			const test = new PerspectiveCamera(
				new Vector3(100, 10, 10),
				new Vector3(25, 100, -1),
				new Vector3(300, 200, 0),
				110
			);

			const image = new Image(60, 45);
			image.src = this.rayPen;
			image.onload = () => {
				ctx.drawImage(
					image,
					test.eye.x - 10,
					test.eye.y - 10,
					image.width,
					image.height
				);
			};

			ctx.strokeRect(0, 0, ele.width, ele.height);
			console.log(test.eye.x, test.eye.y, test.eye.z);

			ctx.beginPath();
			ctx.moveTo(test.eye.x, test.eye.y);
			ctx.lineTo(test.front.x, test.front.y);
			ctx.lineTo(test.refUp.x, test.refUp.y);
			ctx.stroke();
		}
	};
</script>

<style lang="scss" scoped>
</style>
