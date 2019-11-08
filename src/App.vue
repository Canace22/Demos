<template>
	<div class="app">
		<home v-if="isHome"></home>
		<skeleton v-if="isSke"></skeleton>
	</div>
</template>

<script>
	import Home from "pages/home.vue";
	import Skeleton from "components/skeleton/skeleton";
	export default {
		name: "app",
		components: {
			Home,
			Skeleton
		},
		data() {
			return {
				isHome: true,
				isSke: false
			};
		},
		created() {
			const re = /ske/;
			if (location.href.match(re)) {
				this.isHome = false;
				this.isSke = true;
			}
		}
	};
</script>

<style lang="scss">
	.html,
	.body {
		width: 100%;
		height: 100%;
		background-color: #fbebd7;
		overflow: hidden;
	}
	.body {
		margin: 0;
	}
	#app {
		width: 100%;
		height: 100%;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	}
	/* width */
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #fbebd7;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #f3cb81;
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #e9af40;
	}
	input {
		outline: none;
	}
</style>
