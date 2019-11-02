<template>
	<div class="stagger-visualizer">
		<svg class="morphing-demo">
			<polyline class="polymorph" fill="none" stroke="#fff" stroke-width="5" />
		</svg>
	</div>
</template>

<script>
	import anime from "animejs/lib/anime.es.js";
	import polyData from "../../../public/points/polyPoints";

	export default {
		mounted() {
			const el = ".morphing-demo .polymorph";

			let points = [
				{
					value: [
						"0 10 30 50 100 80 150 50 300 120 400 30 450 200",
						"0 100 30 50 100 100 150 110 300 120 400 150 450 100"
					]
				},
				{
					value: [
						"0 100 30 50 100 100 150 110 300 120 400 150 450 100",
						"0 100 30 100 100 100 250 100 300 100 400 100 450 100"
					]
				},
				{ value: ["0 100 30 100 100 100 250 100 300 100 400 100 450 100"] }
			];

			this.strokeAnimate({ el, points });
		},
		methods: {
			strokeAnimate({ el, points, duration }) {
				anime({
					targets: el,
					points: points,
					scale: 1,
					easing: "linear",
					duration: duration || 2000,
					loop: true
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.morphing-demo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 500px;
		height: 200px;
	}
</style>
