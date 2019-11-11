<template>
	<div ref="container" class="container"></div>
</template>

<script>
	import * as PIXI from "pixi.js";
	export default {
		name: "pixi-init",
		mounted() {
			this.hello();
			this.createCanvas();
		},
		methods: {
			hello() {
				let type = "WebGL";
				if (!PIXI.utils.isWebGLSupported()) {
					type = "canvas";
				}

				PIXI.utils.sayHello(type);
			},
			createCanvas(status) {
				//创建别名
				let Application = PIXI.Application,
					loader = PIXI.Loader.shared,
					resources = PIXI.Loader.shared.resources,
					Texture = PIXI.Texture,
					Sprite = PIXI.Sprite;

				// 创建一张 canvas 画布
				let app = new Application({
					width: 256,
					height: 256,
					antialiasing: true,
					transparent: false,
					resolution: 1
				});
				// 把新创建的 canvas 画布挂载到对应的节点上
				this.$refs.container.appendChild(app.view);

				//canvas 全屏样式
				// app.renderer.view.style.position = "absolute"
				// app.renderer.view.style.width = window.innerWidth + "px";
				// app.renderer.view.style.height = window.innerHeight + "px";
				// app.renderer.view.style.display = "block";

				//`renderer.view` 代表原始的 `<canvas>`标签.
				//给 canvas 加条虚线，就像平常操作 canvas 一样
				app.renderer.view.style.border = "1px dashed black";

				//重置画布大小
				app.renderer.resize(512, 512);

				//改变画布背颜色，颜色使用的是十六进制色
				app.renderer.backgroundColor = 0x000000;

				// texture 方法创建精灵
				// 创建一个 cat 精灵
				// const texture = Texture.from("./img/pixi/cat.png");
				// const cat = new Sprite(texture);
				// 精灵显示情况控制
				// cat.visible = false;
				// 把新创建的精灵加到舞台上
				// app.stage.addChild(cat);

				// loder 方法创建精灵
				loader
					.add([
						"./img/pixi/cat.png",
						"./img/pixi/blob.png",
						"./img/pixi/explorer.png"
					])
					.on("progress", this.loadProgressHandler)
					.load(() => {
						console.log("setup");

						//创建精灵
						let cat = new Sprite(resources["./img/pixi/cat.png"].texture),
							blob = new Sprite(resources["./img/pixi/blob.png"].texture),
							explorer = new Sprite(resources["./img/pixi/explorer.png"].texture);

						//把新创建的精灵加到舞台上
						app.stage.addChild(cat);
						app.stage.addChild(blob);
						app.stage.addChild(explorer);

						//改变精灵位置
						blob.position.set(82, 82);
						explorer.position.set(128, 128);
						// 改变精灵大小
						cat.scale.set(1.2, 1.2);
						//旋转精灵
						cat.rotation = 0.5;
						// 设置旋转的中心点
						cat.anchor.set(0, 0);
						loader.reset();
					});
			},
			loadProgressHandler(loader, resource) {
				//Display the file `url` currently being loaded
				console.log("loading: " + resource.url);

				//If you gave your files names with the `add` method, you can access
				//them like this
				// console.log("loading: " + resource.name);

				//Display the precentage of files currently loaded
				console.log("progress: " + loader.progress + "%");
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
