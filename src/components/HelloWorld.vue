<template>
	<div class="container">
		<header class="header">
			<h1 class="title">Demos</h1>
			<nav class="nav">
				<section
					class="item"
					:class="{ isActive: item.isActive === index }"
					v-for="(item, index) in lists"
					:key="index"
					@click="navSelect(index)"
				>
					<img class="icon" :src="item.icon" />
					<span>{{ item.name }}</span>
				</section>
			</nav>
		</header>
		<article :style="{ height: h }" class="article">
			<aside class="aside">
				<section
					class="item"
					:class="{ isActive: item.isActive === index }"
					v-for="(item, index) in lists"
					:key="index"
					@click="navSelect(index)"
				>
					<img class="icon" :src="item.icon" />
					<span>{{ item.name }}</span>
				</section>
			</aside>
			<main class="main">
				<section
					class="card"
					v-for="(content, i) in contents"
					:key="i"
					@click="openTab(content.name)"
				>
					<img class="cover" :src="content.cover" />
					<div class="title">{{ content.title }}</div>
				</section>
				<section
					class="none"
					v-for="(item, index) in 2"
					:key="index + 'aaa'"
				></section>
			</main>
		</article>
		<article v-if="isTab" class="modal-wrap" @click.self="isTab = false">
			<section class="modal">
				<img class="close" :src="closeSrc" @click="isTab = false" />
				<component
					v-bind:is="currentTab"
					:config="config"
					:fullSrc="fullSrc"
					:stopSrc="stopSrc"
					:playSrc="playSrc"
					:type="type"
				></component>
			</section>
		</article>
	</div>
</template>

<script>
	const Clock = () => import("./Clock.vue");
	const Video = () => import("./Video.vue");
	const DragList = () => import("./DragList.vue");
	const FormEl = () => import("./FormEl.vue");
	const Container = () => import("./pixi/Container.vue");
	const DrawMoveShape = () => import("./pixi/DrawMoveShape.vue");
	const PlaceHolder = () => import("./PlaceHolder.vue");
	const NewSprite = () => import("./NewSprite.vue");
	const PixiDemo = () => import("./PixiDemo.vue");
	const Battary = () => import("./animate/Battary");
	const Easing = () => import("./animate/Easing");
	/* eslint-disable no-unused-expressions */
	export default {
		name: "HelloWorld",
		props: {
			msg: String
		},
		components: {
			Clock,
			Video,
			DragList,
			FormEl,
			Container,
			DrawMoveShape,
			PlaceHolder,
			NewSprite,
			PixiDemo,
			Battary,
			Easing
		},
		data() {
			return {
				lists: [
					{
						name: "动画",
						icon: "./img/other-icon.png",
						isActive: 0,
						contents: [
							{ title: "动态绳索", name: "Easing", cover: "./img/4.png" },
							{ title: "battary", name: "Battary", cover: "./img/4.png" }
						]
					},
					{
						name: "canvas绘图",
						icon: "./img/draw-icon.png",
						isActive: -1,
						contents: [
							{
								title: "pixi-container",
								name: "Container",
								cover: "./img/rotateCat.png"
							},
							{
								title: "pixi-画动态图",
								name: "DrawMoveShape",
								cover: "./img/rotateRoly.png"
							},
							{
								title: "合成雪碧图",
								name: "NewSprite",
								cover: "./img/newSprite.png"
							},
							{
								title: "canvas 拖动",
								name: "PixiDemo",
								cover: "./img/dragCat.png"
							}
						]
					},
					{
						name: "媒体",
						icon: "./img/meta-icon.png",
						isActive: -1,
						contents: [
							{ title: "视频播放器", name: "Video", cover: "./img/1.png" }
						]
					},
					{
						name: "拖动",
						icon: "./img/drag-icon.png",
						isActive: -1,
						contents: [
							{ title: "列表拖拽", name: "DragList", cover: "./img/3.png" }
						]
					},
					{
						name: "其他",
						icon: "./img/other-icon.png",
						isActive: -1,
						contents: [
							{
								title: "div 模拟 input placeholder",
								name: "PlaceHolder",
								cover: "./img/1.png"
							},
							{
								title: "列表控件",
								name: "FormEl",
								cover: "./img/2.png"
							},
							{ title: "时钟", name: "Clock", cover: "./img/4.png" },
							{ title: "battary", name: "Battary", cover: "./img/4.png" }
						]
					}
				],
				isSelect: 0,
				currentTab: "Clock",
				isTab: false,
				config: {
					type: "mp4",
					url: "https://ebag-lab.ebag.readboy.com/phonics/videos/A.mp4"
				},
				fullSrc: "./img/fullScreen.png",
				stopSrc: "./img/pause.png",
				playSrc: "./img/play.png",
				type: 2,
				closeSrc: "./img/close.png"
			};
		},
		computed: {
			h() {
				return `${window.innerHeight - 72}px`;
			},
			contents() {
				return this.lists[this.isSelect].contents;
			}
		},
		methods: {
			drawImg(e, img) {
				const ctx = e.target.getContext("2d");
				ctx.drawImage(img, 10, 10);
			},
			openTab(name) {
				this.currentTab = name;
				this.isTab = true;
			},
			navSelect(index, name) {
				this.isSelect = index;

				this.lists.forEach((element, i) => {
					i === index
						? (this.lists[i].isActive = index)
						: (this.lists[i].isActive = -1);
				});
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@font-face {
		font-family: title;
		src: url(../../public/font/font.ttf);
	}
	.container {
		width: 100vw;
		height: 100vh;
	}
	.header {
		width: 100%;
		height: 4.5rem;
		line-height: 4.5rem;
		background: #e9af40;
		.title {
			text-align: center;
			width: 12.5rem;
			font-family: title;
			color: #781e02;
			padding: 0 0.625rem;
			margin: 0;
		}
		.nav {
			display: none;
		}
	}
	.article {
		width: 100%;
		.aside {
			position: absolute;
			left: 0;
			width: 20%;
			height: inherit;
			background: #f3cb81;
			.item {
				display: flex;
				align-items: center;
				height: 2.5rem;
				line-height: 2.5rem;
				color: #781e02;
				font-size: 1.25rem;
				font-weight: 600;
				padding: 0.625rem;
				cursor: pointer;
				.icon {
					margin-right: 10px;
				}
			}
		}
		.main {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			height: 100%;
			padding: 1.25rem;
			margin-left: 20%;
			overflow-y: auto;
			.card {
				width: 25rem;
				height: 18.75rem;
				background: #fff;
				margin: 0.625rem;
				.title {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 20%;
					color: #781e02;
					font-weight: 600;
				}
				.cover {
					width: 100%;
					height: 80%;
				}
			}
			.none {
				width: 25rem;
				height: 0;
			}
		}
	}
	.modal-wrap {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background: #1f1e1e93;
		.modal {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 80vw;
			height: 95vh;
			background-color: #fbebd7;
			margin: auto;
			border-radius: 8px;
			.close {
				position: absolute;
				top: 10px;
				right: 10px;
				cursor: pointer;
			}
		}
	}
	.isActive {
		background-color: #fbebd7 !important;
	}
	@media (max-width: 1280px) {
		.aside {
			display: none;
		}
		.main {
			width: 100%;
			margin-left: 0 !important;
			margin: auto;
		}
		.modal {
			height: 85vh !important;
		}
		.header {
			display: flex;
			.nav {
				display: flex !important;
				align-items: center;
				height: 100%;
				margin: auto;
				.item {
					display: flex;
					align-items: center;
					height: 100%;
					color: #781e02;
					font-size: 1.25rem;
					font-weight: 600;
					padding: 0 1.25rem;
					cursor: pointer;
					.icon {
						display: none;
					}
				}
			}
		}
	}
</style>
