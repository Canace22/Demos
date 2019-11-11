<template>
	<div ref="container" class="container"></div>
</template>

<script>
	import * as PIXI from "pixi.js";
	export default {
		name: "pixi-data",
		mounted() {
			this.createCanvas();
		},
		methods: {
			createCanvas(status) {
				let Application = PIXI.Application,
					Loader = PIXI.Loader.shared,
					Resources = PIXI.Loader.shared.resources,
					Texture = PIXI.Texture,
					TextureCache = PIXI.utils.TextureCache,
					Rectangle = PIXI.Rectangle,
					Sprite = PIXI.Sprite;
				let app = new Application({
					width: 512,
					height: 512,
					antialiasing: true,
					transparent: false,
					resolution: 1
				});
				this.$refs.container.appendChild(app.view);
				app.renderer.backgroundColor = 0x000000;

				Loader.add({
					name: "treasure",
					url: "./img/pixi/treasureHunter.json"
				}).load((loader, resources) => {
					let dungeon, explorer, treasure, door, id;
					const things = resources["treasure"].textures;
					// 墙纸精灵创建并显示在画布上
					dungeon = new Sprite(things["dungeon.png"]);
					app.stage.addChild(dungeon);
					// 小人精灵创建并显示在画布上
					explorer = new Sprite(things["explorer.png"]);
					explorer.x = 68;
					explorer.y = app.stage.height / 2 - explorer.height / 2;
					app.stage.addChild(explorer);
					// 障碍物创建并显示在画布上
					treasure = new Sprite(things["treasure.png"]);
					treasure.x = app.stage.width - treasure.width - 48;
					treasure.y = app.stage.height / 2 - treasure.height / 2;
					app.stage.addChild(treasure);

					//门创建并显示在画布上
					door = new Sprite(things["door.png"]);
					door.position.set(32, 0);
					app.stage.addChild(door);

					//创建蘑怪物i
					let numberOfBlobs = 10,
						spacing = 40,
						xOffset = 30;

					for (let i = 0; i < numberOfBlobs; i++) {
						let blob = new Sprite(things["blob.png"]);
						let x = spacing * i + xOffset;
						let y = this.randomInt(0, app.stage.height - blob.height);

						blob.position.set(x, y);
						app.stage.addChild(blob);
					}

					loader.reset();
				});
			},
			randomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
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
