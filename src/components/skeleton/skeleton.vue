<template>
	<div class="container">
		<header class="header">
			<h1 class="title">Demos</h1>
		</header>
	</div>
</template>

<script>
	/* eslint-disable no-unused-expressions */
	export default {
		name: "skeleton",
		data() {
			return {
				lists: [
					{
						name: "媒体",
						icon: "./img/meta-icon.png",
						isActive: 0,
						contents: [
							{ title: "视频播放器", name: "Video", cover: "./img/1.png" },
							{
								title: "列表控件",
								name: "FormEl",
								cover: "./img/2.png"
							}
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
						name: "canvas绘图",
						icon: "./img/draw-icon.png",
						isActive: -1,
						contents: [
							{
								title: "pixi-container",
								name: "Container",
								cover: "./img/4.png"
							},
							{
								title: "pixi-画动态图",
								name: "DrawMoveShape",
								cover: "./img/5.png"
							}
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

							{ title: "时钟", name: "Clock", cover: "./img/4.png" }
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
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@font-face {
		font-family: title;
		src: url(../../../public/font/font.ttf);
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
	}
</style>
