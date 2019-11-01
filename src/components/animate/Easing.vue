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
			const staggerVisualizerEl = document.querySelector(".stagger-visualizer");
			const fragment = document.createDocumentFragment();
			const numberOfElements = 100;

			anime({
				targets: ".morphing-demo .polymorph",
				points: [
					{
						value: [
							"70 24 219.574 60.369 200.145 117.631 150.855 101.631 103.426 254.369",
							"70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369"
						]
					},
					// {
					// 	value:
					// 		"70 6 119.574 60.369 100.145 117.631 39.855 117.631 0 0"
					// },
					{
						value: "0 0 100 0 200 0 300 0 400 0"
					}
					// {
					// 	value:
					// 		"70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369"
					// },
					// {
					// 	value:
					// 		"70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369"
					// }
				],
				easing: "easeOutQuad",
				duration: 2000,
				loop: true
			});

			// for (let i = 0; i < numberOfElements; i++) {
			// 	fragment.appendChild(document.createElement("div"));
			// }

			// staggerVisualizerEl.appendChild(fragment);

			// const staggersAnimation = anime
			// 	.timeline({
			// 		targets: ".stagger-visualizer div",
			// 		easing: "easeInOutSine",
			// 		// delay: anime.stagger(50),
			// 		// loop: true,
			// 		// autoplay: false,
			// 		duration: 600,
			// 		loopComplete: a => console.log("end")
			// 	})
			// 	.add({
			// 		scale: anime.stagger([1.5, 1], {
			// 			from: "center",
			// 			easing: "easeInOutCirc"
			// 		}),
			// 		translateX: anime.stagger([0, 100]),
			// 		translateY: anime.stagger([-50, 100]),
			// 		rotate: 0,
			// 		delay: 0
			// 		// delay: anime.stagger(1, { from: "center" })
			// 	})
			// 	.add({
			// 		scale: anime.stagger([1.5, 1], {
			// 			from: "center",
			// 			easing: "easeInOutCirc"
			// 		}),
			// 		translateX: anime.stagger([100, 0]),
			// 		translateY: anime.stagger([100, -10]),
			// 		rotate: 0,
			// 		delay: 0
			// 		// delay: anime.stagger(1, { from: "first" })
			// 	})
			// 	// .add({
			// 	// 	scale: anime.stagger([1.5, 1], {
			// 	// 		from: "center",
			// 	// 		easing: "easeInOutCirc"
			// 	// 	}),
			// 	// 	translateX: anime.stagger([100, -100]),
			// 	// 	translateY: anime.stagger([50, 0]),
			// 	// 	rotate: 0,
			// 	// 	delay: anime.stagger(1, { from: "first" })
			// 	// })
			// 	.add({
			// 		translateX: 0,
			// 		translateY: 0,
			// 		scale: 1,
			// 		rotate: 360,
			// 		duration: 1000,
			// 		delay: 0
			// 	});

			// staggersAnimation.play();
		},
		methods: {}
	};
</script>

<style lang="scss" scoped>
	.morphing-demo {
		width: 500px;
		height: 500px;
	}
</style>
<style>
	.stagger-visualizer {
		display: flex;
		/*flex-wrap: wrap;*/
		justify-content: center;
		align-items: center;
		/*   width: 450px;
																																					  height: 450px; */
	}

	.stagger-visualizer div {
		/*position: absolute;*/
		width: 5px;
		height: 5px;
		border: 1px solid #fff;
		background-color: #fff;
	}
</style>
