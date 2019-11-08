<template>
	<div class="input" contenteditable="true"></div>
</template>

<script>
	export default {
		name: "placeholder",
		directives: {
			demo: {}
		}
	};
</script>

<style lang="scss" scoped>
	.input {
		width: 300px;
		height: 72px;
		border: 1px solid;
	}
	.input:empty:before {
		content: attr(data-placeholder);
		color: #bbb;
	}
	.input:focus:before {
		content: none;
	}
</style>
