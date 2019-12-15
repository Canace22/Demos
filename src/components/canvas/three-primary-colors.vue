<template>
	<div ref="colorCircle"></div>
</template>

<script>
	import createColorCircle from "assets/js/canvas/create-color-circle";
	export default {
		name: "color",
		mounted() {
			const docker = this.$refs.colorCircle;
			this.canvas = new createColorCircle(docker);
			this.canvas.initView();
			this.canvas.drawThreeColorPlane();
		}
	};
</script>

<style lang="scss" scoped>
</style>
