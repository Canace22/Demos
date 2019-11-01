<template>
	<div class="stagger-visualizer">
		<svg class="morphing-demo">
			<polyline class="polymorph" fill="none" stroke="#fff" stroke-width="5" />
		</svg>
	</div>
</template>

<script>
	import anime from "animejs/lib/anime.es.js";

	export default {
		mounted() {
			const el = ".morphing-demo .polymorph";
			const points = [
				{
					value: [
						"399.05 -1.75 370.3 12.35 312.85 17.55 259.6 27.5 196.95 51.5",
						"70 6 119.574 60.369 100.145 117.631 39.855 117.631 280 40"
					]
				},
				{
					value: "0 0 100 0 200 0 300 0 400 0"
				}
			];
			this.strokeAnimate({ el, points });
		},
		methods: {
			strokeAnimate({ el, points, duration }) {
				anime({
					targets: el,
					points: points,
					easing: "easeOutQuad",
					duration: duration || 1000,
					loop: false
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.morphing-demo {
		width: 500px;
		height: 500px;
	}
</style>
