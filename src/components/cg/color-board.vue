<template>
	<div class="color-container">
		<div class="color-panel">
			<div>
				<span class="color-title">固定色盘：</span>
				<button @click="changeColor(0, 255)">绿色盘</button>
				<button @click="changeColor(255, 255)">紫色盘</button>
				<button @click="changeColor(255, 128)">粉色盘</button>
			</div>
			<div>
				<div class="color-title">自调渐变色：</div>
				<label>x: </label><input type="text" v-model="row" /><label>y: </label
				><input type="text" v-model="col" />
				<button @click="changeColor(row, col)">确定</button>
			</div>
			<div>
				<div class="color-title">自调双色：</div>
				<label>x: </label><input type="text" v-model="rowS" /><label>y: </label
				><input type="text" v-model="colS" />
				<button @click="changeColor(rowS, colS, 2)">确定</button>
			</div>
		</div>
		<canvas width="256" height="256" id="testCanvas"></canvas>
	</div>
</template>

<script>
	export default {
		name: "color-board",
		data() {
			return {
				row: 0,
				col: 0,
				rowS: 0,
				colS: 0
			};
		},
		mounted() {
			this.changeColor();
		},
		methods: {
			changeColor(row, col, type) {
				const canvas = document.getElementById("testCanvas");
				const ctx = canvas.getContext("2d");
				const w = canvas.attributes.width.value;
				const h = canvas.attributes.height.value;
				ctx.fillStyle = "rgb(189,25,128)";
				ctx.fillRect(0, 0, w, h);
				const imgdata = ctx.getImageData(0, 0, w, h);
				const pixels = imgdata.data;
				let i = 0;
				for (let y = 0; y < h; y++)
					for (let x = 0; x < w; x++) {
						if (!type) {
							pixels[i++] = (x / w) * 255;
							pixels[i++] = (y / h) * 255;
						}
						pixels[i++] = row || 0;
						pixels[i++] = col || 255;
					}
				ctx.putImageData(imgdata, 0, 0);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.color-container {
		display: flex;
		justify-content: space-between;
		.color-panel {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin-right: 20px;
		}
	}
	.color-title {
		font-size: 1rem;
		margin: 10px 0;
	}
</style>
