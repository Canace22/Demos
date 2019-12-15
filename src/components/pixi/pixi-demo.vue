<template>
	<div id="leaf-wrap" class="leaf-wrap">
		<button @click="add">添加精灵</button>
		<button @click="remove">移除精灵</button>
	</div>
</template>

<script>
	import CreateDragThing from "assets/js/dragging";

	export default {
		name: "pixi",
		data() {
			return {
				cat: null,
				imgArr: [],
				dragData: [],
				pos: [],
				bunny: [],
				rotation: 0,
				visible: true
			};
		},
		mounted() {
			const el = document.getElementById("leaf-wrap");
			this.cat = new CreateDragThing({
				dom: el,
				bg: 0x000
			});
			this.cat.initView();
		},
		methods: {
			addSprite(cat) {
				// img: this.imgArr,
				// 	pos: [{ x: 183, y: 185 }, { x: 283, y: 285 }, { x: 383, y: 385 }],
				this.imgArr.push(cat.img);
				this.pos.push(cat.pos);
				this.dragData.push(cat.dragData);
				const config = {
					img: this.imgArr,
					pos: this.pos,
					dragData: this.dragData
				};
				this.cat.createBunny(config).then(res => {
					this.bunny = res;

					console.log(this.bunny);
				});
			},
			add() {
				const cat = {
					img: "./img/cat.png",
					pos: { x: 183, y: 185 },
					dragData: -1
				};
				this.cat.createSingleBunny(cat).then(res => {
					res.transform.rotation = this.rotation;
					res.visible = this.visible;
				});
			},
			remove() {
				this.visible = false
			}
		}
	};
</script>

<style lang="scss" scoped>
	.leaf-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
