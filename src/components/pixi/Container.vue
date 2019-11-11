<template>
	<div ref="container"></div>
</template>

<script>
	import * as PIXI from "pixi.js";

	export default {
		name: "pixiContainer",
		mounted() {
			const el = this.$refs.container;
			this.addBunny({
				el,
				width: 200,
				height: 200,
				bg: 0xfcba03,
				imgSrc: "./img/cat.png",
				transparent: false
			});
		},
		methods: {
			addBunny(config) {
				const app = new PIXI.Application({
					width: config.width,
					height: config.height,
					backgroundColor: config.bg,
					resolution: window.devicePixelRatio || 1,
					transparent: config.transparent
				});
				config.el.appendChild(app.view);

				const container = new PIXI.Container();

				setInterval(() => {
					if (app.renderer.backgroundColor === 0x061639) {
						app.renderer.backgroundColor = 0xfcba03;
					} else {
						app.renderer.backgroundColor = 0x061639;
					}
				}, 1000);

				app.stage.addChild(container);

				// Create a new texture
				const texture = PIXI.Texture.from(config.imgSrc);

				const bunny = new PIXI.Sprite(texture);
				bunny.anchor.set(0.5);
				bunny.x = (1 % 5) * 40;
				bunny.y = Math.floor(1 / 5) * 40;
				container.addChild(bunny);

				// Move container to the center
				container.x = app.screen.width / 2;
				container.y = app.screen.height / 2;

				// Center bunny sprite in local container coordinates
				container.pivot.x = container.width / 2;
				container.pivot.y = container.height / 2;

				// Listen for animate update
				app.ticker.add(delta => {
					// rotate the container!
					// use delta to create frame-independent transform
					container.rotation -= 0.01 * delta;
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	canvas {
		position: relative;
	}
</style>
