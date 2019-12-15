<template>
	<div>
		<div ref="intersection"></div>
		<input type="text" class="change" v-model="num" />
	</div>
</template>

<script>
	import * as PIXI from "pixi.js";
	export default {
		name: "intersect",
		data() {
			return {
				num: 500
			};
		},
		mounted() {
			const app = new PIXI.Application({
				width: window.innerWidth,
				height: window.innerHeight,
				backgroundColor: 0x1099bb
			});
			const line = new PIXI.Graphics();
			line.lineStyle(2, 0x53595d, 1);
			line.moveTo(0, 0);

			for (let i = 0; i < this.num; i++) {
				line.lineTo(i, i);
			}
			app.stage.addChild(line);
			this.$refs.intersection.appendChild(app.view);
		}
	};
</script>

<style lang="scss" scoped>
	.change {
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>
