<template>
	<div ref="container" class="container"></div>
</template>

<script>
	import * as PIXI from "pixi.js";
	export default {
		name: "pixi-tileset",
		mounted() {
			this.createCanvas();
		},
		methods: {
			createCanvas(status) {
				let Application = PIXI.Application,
					loader = PIXI.Loader.shared,
					resources = PIXI.Loader.shared.resources,
					Texture = PIXI.Texture,
					TextureCache = PIXI.utils.TextureCache,
					Rectangle = PIXI.Rectangle,
					Sprite = PIXI.Sprite;
				let app = new Application({
					width: 256,
					height: 256,
					antialiasing: true,
					transparent: false,
					resolution: 1
				});
				this.$refs.container.appendChild(app.view);
				app.renderer.backgroundColor = 0x000000;

				loader.add("./img/pixi/tileset.png").load(() => {
					let texture = TextureCache["./img/pixi/tileset.png"];

					// 图片在雪碧图上的位置截取
					let rectangle = new Rectangle(192, 128, 64, 64);

					// 告诉 texture 使用截取的区域
					texture.frame = rectangle;

					let rocket = new Sprite(texture);

					const gameLoop = delta => {
						//Update the current game state:
						state(delta);
					};

					const play = delta => {
						if (rocket.x > app.renderer.width) {
							rocket.x = 0;
							rocket.y = 0;
							return;
						}
						rocket.vx = 2;
						rocket.vy = 1;
						rocket.x += rocket.vx;
						rocket.y += rocket.vy;
					};

					rocket.position.set(32, 32);
					rocket.vx = 0;
					rocket.vy = 0;

					app.stage.addChild(rocket);
					let state = play;
					// 移动火箭
					app.ticker.add(delta => gameLoop(delta));
					loader.reset();
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
