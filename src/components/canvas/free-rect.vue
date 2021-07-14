<template>
	<div class="container">
    <div ref="freeRect"></div>
  </div>
</template>

<script>
	import * as PIXI from "pixi.js";
	import Graphics from "assets/js/canvas/graphic";
	export default {
		name: "freeRect",
		data() {
			return {
				mouseX: 0,
				mouseY: 0,
				closeEnough: 10,
				dragTL: false,
				dragBL: false,
				dragTR: false,
				dragBR: false
			};
		},
		mounted() {
			const dom = this.$refs.freeRect;
			this.app = new PIXI.Application({
				width: window.innerWidth/2,
				height: window.innerHeight/2,
				transparent: true
			});
			dom.appendChild(this.app.view);
			this.createBox({ w: 165, h: 165 });
		},
		methods: {
			sizeToPoints(rect, radis) {
				const halfPoint = radis / 2;
				const xMin = rect.x - rect.width / 2;
				const xMid = rect.x;
				const xMax = rect.x + rect.width / 2;
				const yMin = rect.y - rect.height / 2;
				const yMid = rect.y;
				const yMax = rect.y + rect.height / 2;
				const x = [xMin, xMid, xMax];
				const y = [yMin, yMid, yMax];
				let points = [];

				for (let i = 0; i < x.length; i++) {
					for (let j = 0; j < y.length; j++) {
						points.push({ x: x[i] - halfPoint, y: y[j] - halfPoint });
					}
				}
				const index = (points.length + 1) / 2 - 1;

				points.splice(index, 1);

				return points;
			},
			createBox({ w, h }) {
				const graphics = new Graphics();
				const container = new PIXI.Container();

				// 画主矩形
				const rect = graphics.drawRect({
					color: 0x9a9ca0,
					x: 0,
					y: 0,
					w: w || 165,
					h: h || 165
				});
				rect.position.set(this.app.screen.width / 2, this.app.screen.height / 2);
				rect.pivot.set(rect.width / 2, rect.height / 2);

				container.addChild(rect);

				// 画四个点
				const radis = 10;
				const points = this.sizeToPoints(rect, radis);

				points.forEach((ele, index) => {
					const point = graphics.drawRect({
						color: 0x000000,
						x: ele.x,
						y: ele.y,
						w: radis,
						h: radis
					});
					point.interactive = true;
					point.buttonMode = true;
					point.num = index;

					point
						.on("pointerdown", this.onDragStart.bind(this))
						.on("pointerup", this.onDragEnd.bind(this))
						.on("pointerupoutside", this.onDragEnd.bind(this))
						.on("pointermove", this.onDragMove.bind(this));
					container.addChild(point);
				});

				// 画旋转点
				const rotationPoint = graphics.drawRect({
					color: 0x000000,
					x: rect.x - radis / 2,
					y: rect.y - rect.height / 2 - 50,
					w: radis,
					h: radis
				});
				rotationPoint.interactive = true;
				rotationPoint.buttonMode = true;
				rotationPoint.num = 111;

				rotationPoint
					.on("pointerdown", this.onDragStart.bind(this))
					.on("pointerup", this.onDragEnd.bind(this))
					.on("pointerupoutside", this.onDragEnd.bind(this))
					.on("pointermove", this.onDragMove.bind(this));
				container.addChild(rotationPoint);

				this.app.stage.addChild(container);
			},
			// interaction methods
			onDragStart(event) {
				const { currentTarget } = event;

				currentTarget.dragging = true;
				currentTarget.data = event.data;
			},

			onDragEnd(event) {
				const { currentTarget } = event;

				currentTarget.dragging = false;
				currentTarget.data = null;
			},

			onDragMove(event) {
				const { currentTarget } = event;

				if (currentTarget.dragging) {
					const newPosition = currentTarget.data.getLocalPosition(
						currentTarget.parent
					);
					const container = currentTarget.parent.children;
					const rect = currentTarget.parent.children[0];
					const radis = 10;
					const num = currentTarget.num;
					const halfPoint = radis / 2;

					let originW = rect.width;
					let originH = rect.height;
					const pos = { x: currentTarget.x, y: currentTarget.y };

					let newWR = newPosition.x - pos.x;
					let newHR = newPosition.y - pos.y;
					let newWL = pos.x - newPosition.x;
					let newHL = pos.y - newPosition.y;

					let rotation = 0;

					// 根据方向调整位置和大小
					switch (num) {
						case 0:
							currentTarget.x = newPosition.x;
							currentTarget.y = newPosition.y;
							rect.width += newWL;
							rect.height += newHL;
							rect.x = newPosition.x + rect.width / 2 + halfPoint;
							rect.y = newPosition.y + rect.height / 2 + halfPoint;
							break;
						case 1:
							currentTarget.x = newPosition.x;
							rect.x = newPosition.x + rect.width / 2 + halfPoint;
							rect.width += newWL;
							break;
						case 2:
							currentTarget.x = newPosition.x;
							currentTarget.y = newPosition.y;
							rect.width += newWL;
							rect.height += newHR;
							rect.x = newPosition.x + rect.width / 2 + halfPoint;
							rect.y = newPosition.y - rect.height / 2 + halfPoint;
							break;
						case 3:
							currentTarget.y = newPosition.y;
							rect.height += newHL;
							rect.y = newPosition.y + rect.height / 2 + halfPoint;
							break;
						case 4:
							currentTarget.y = newPosition.y;
							rect.height += newHR;
							rect.y = newPosition.y - rect.height / 2 + halfPoint;
							break;
						case 5:
							currentTarget.x = newPosition.x;
							currentTarget.y = newPosition.y;
							rect.width += newWR;
							rect.height += newHL;
							rect.x = newPosition.x - rect.width / 2 + halfPoint;
							rect.y = newPosition.y + rect.height / 2 + halfPoint;
							break;
						case 6:
							currentTarget.x = newPosition.x;
							rect.width += newWR;
							rect.x = newPosition.x - rect.width / 2 + halfPoint;
							break;
						case 111:
							if (
								rect.containsPoint(new PIXI.Point(newPosition.x, newPosition.y))
							) {
								return;
							}
							currentTarget.x = newPosition.x;
							currentTarget.y = newPosition.y;

							const originCenter = {
								x: rect.x + rect.width / 2,
								y: rect.y + rect.height / 2
							};

							const a = Math.abs(currentTarget.x - originCenter.x);
							const b = Math.abs(currentTarget.y - originCenter.y);
							const c = Math.sqrt(a * a + b * b);
							let rotate = Math.round((Math.asin(b / c) / Math.PI) * 180);

							// 第一象限
							if (
								currentTarget.x >= originCenter.x &&
								currentTarget.y <= originCenter.y
							) {
								rotate = 90 - rotate;
							}
							// 第二象限
							else if (
								currentTarget.x <= originCenter.x &&
								currentTarget.y <= originCenter.y
							) {
								rotate = 270 + rotate;
							}
							// 第三象限
							else if (
								currentTarget.x <= originCenter.x &&
								currentTarget.y >= originCenter.y
							) {
								rotate = 270 - rotate;
							}
							// 第四象限
							else if (
								currentTarget.x >= originCenter.x &&
								currentTarget.y >= originCenter.y
							) {
								rotate = 90 + rotate;
							}
							rect.rotation = rotate === 360 ? 0 : parseInt(rotate);
							break;
						default:
							currentTarget.x = newPosition.x;
							currentTarget.y = newPosition.y;
							rect.width += newWR;
							rect.height += newHR;
							rect.x = newPosition.x - rect.width / 2 + halfPoint;
							rect.y = newPosition.y - rect.height / 2 + halfPoint;
							break;
					}
					const points = this.sizeToPoints(rect, radis);
					container.forEach((ele, index) => {
						if (ele.num + 1 && ele.num !== num) {
							ele.x = points[ele.num].x;
							ele.y = points[ele.num].y;
						}
					});
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
@import url('~assets/scss/container.scss');
</style>
