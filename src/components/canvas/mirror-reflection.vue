<template>
	<div ref="blendingWrap"></div>
</template>

<script>
	import CreateBlendingRay from "assets/js/canvas/create-blending-ray";
	export default {
		name: "mirrorRflection",
		mounted() {
			const dom = this.$refs.blendingWrap;
			const createBlendingRay = new CreateBlendingRay(dom);

			createBlendingRay.initView();
			createBlendingRay.drawBlendingRay();
		}
	};
</script>

<style lang="scss" scoped>
</style>
