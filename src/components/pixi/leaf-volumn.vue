<template>
	<div ref="container" class="container"></div>
</template>

<script>
	import * as PIXI from "pixi.js";
	import anime from "animejs/lib/anime.es.js";
	export default {
		name: "pixi-data",
		data() {
			return {
				target: {},
				count: 0
			};
		},
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
					width: 1024,
					height: 600,
					antialiasing: true,
					transparent: false,
					resolution: 1
				});
				const _this = this;
				this.$refs.container.appendChild(app.view);
				app.renderer.backgroundColor = 0x000000;
				app.renderer.view.width = app.renderer.width / 1.5;

				Loader.add({
					name: "treasure",
					url: "./img/leaf_volume/leaf-volume.json"
				}).load((loader, resources) => {
					let fruit1, fruit2, fruit3, cup, id;
					id = resources["treasure"].textures;

					// 量杯
					cup = new Sprite(id["tool/50ml量筒.png"]);
					cup.scale.set(0.5, 0.5);
					cup.y = app.renderer.height / 4;
					app.stage.addChild(cup);
					this.target = { x: cup.x, y: cup.y };
					this.origin = cup.x + cup.width;
					// 量杯里的水
					const graphics = new PIXI.Graphics();

					graphics.beginFill(0x757575);
					// draw a rectangle
					graphics.drawRect(
						cup.x + cup.width / 3,
						app.renderer.height * 0.7,
						cup.width / 3,
						cup.height / 3
					);
					graphics.alpha = 0.5;
					app.stage.addChild(graphics);

					// 樱桃
					fruit1 = new Sprite(id["tool/樱桃.png"]);
					fruit1.scale.set(0.5, 0.5);
					fruit1.y = app.renderer.height - fruit1.height / 2;
					fruit1.x = cup.x + cup.width + 140;
					fruit1.anchor.set(0.5);
					fruit1.interactive = true;
					fruit1.buttonMode = true;
					fruit1
						.on("pointerdown", _this.onDragStart)
						.on("pointerup", _this.onDragEnd)
						.on("pointerupoutside", _this.onDragEnd)
						.on("pointermove", _this.onDragMove);
					app.stage.addChild(fruit1);

					// 桑葚
					fruit2 = new Sprite(id["tool/桑葚.png"]);
					fruit2.scale.set(0.5, 0.5);
					fruit2.y = app.renderer.height - fruit2.height / 2;
					fruit2.x = fruit1.x + fruit1.width + 80;
					fruit2.anchor.set(0.5);
					fruit2.interactive = true;
					fruit2.buttonMode = true;
					fruit2
						.on("pointerdown", _this.onDragStart)
						.on("pointerup", _this.onDragEnd)
						.on("pointerupoutside", _this.onDragEnd)
						.on("pointermove", _this.onDragMove);
					app.stage.addChild(fruit2);

					// 桑葚
					fruit3 = new Sprite(id["tool/草莓.png"]);
					fruit3.scale.set(0.5, 0.5);
					fruit3.y = app.renderer.height - fruit3.height / 2;
					fruit3.x = fruit2.x + fruit2.width + 80;
					fruit3.anchor.set(0.5);
					fruit3.interactive = true;
					fruit3.buttonMode = true;
					fruit3
						.on("pointerdown", _this.onDragStart)
						.on("pointerup", _this.onDragEnd)
						.on("pointerupoutside", _this.onDragEnd)
						.on("pointermove", _this.onDragMove);
					app.stage.addChild(fruit3);

					loader.reset();
				});
			},
			onDragStart(event) {
				let currentTarget = event.currentTarget;
				currentTarget.alpha = 0.5;
				currentTarget.dragging = true;
			},
			onDragEnd(event) {
				let currentTarget = event.currentTarget;
				const newPosition = event.data.getLocalPosition(currentTarget.parent);
				this.count = -2 * this.count - 40;
				currentTarget.alpha = 1;
				currentTarget.dragging = false;
				// set the interaction data to null
				currentTarget.data = null;
				if (newPosition.x < this.origin && newPosition.x > 0) {
					const distance = Math.sqrt(
						(newPosition.x - this.target.x) ** 2 + (newPosition.y - this.target.y)
					);
					if (distance - this.target.y / 2 < 10) {
						currentTarget.x = this.target.x + 70;
						currentTarget.y = currentTarget.parent.height + this.count;
					}
				}
			},
			onDragMove(event) {
				let currentTarget = event.currentTarget;
				if (currentTarget.dragging) {
					const newPosition = event.data.getLocalPosition(currentTarget.parent);
					currentTarget.x = newPosition.x;
					currentTarget.y = newPosition.y;
				}
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
