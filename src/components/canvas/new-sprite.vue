<template>
	<div class="sprite-wrap">
		<div>
			<label for="image_uploads">Choose images to upload (PNG, JPG)</label>
			<input
				type="file"
				id="image_uploads"
				name="image_uploads"
				accept=".jpg, .jpeg, .png"
				multiple
				@change="uploadImg($event)"
			/>
		</div>
		<canvas id="canvas"></canvas>
		<div class="preview">
			<p>No files currently selected for upload</p>
		</div>
		<div>
			<button @click="toSprite">Submit</button>
		</div>
	</div>
</template>

<script>
	// import { saveAs } from "file-saver";
	import newSprite from "@/assets/js/imgToSprite";
	export default {
		name: "sprite",
		data() {
			return {
				images: []
			};
		},
		methods: {
			// 文件类型校验
			validFileType(file) {
				// 文件类型列表
				const fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
				for (let i = 0; i < fileTypes.length; i++) {
					if (file.type === fileTypes[i]) {
						return true;
					}
				}
				return false;
			},
			// 文件长度计算
			returnFileSize(number) {
				if (number < 1024) {
					return number + "bytes";
				} else if (number > 1024 && number < 1048576) {
					return (number / 1024).toFixed(1) + "KB";
				} else if (number > 1048576) {
					return (number / 1048576).toFixed(1) + "MB";
				}
			},
			uploadImg(e) {
				// 获取 input 元素
				const input = e.target;
				// 获取 preview 元素
				const preview = document.querySelector(".preview");
				const curFiles = input.files;
				// 将 input 变成透明的
				input.style.opacity = 0;
				while (preview.firstChild) {
					preview.removeChild(preview.firstChild);
				}
				if (curFiles.length === 0) {
					const para = document.createElement("p");
					para.textContent = "No files currently selected for upload";
					preview.appendChild(para);
				} else {
					const list = document.createElement("ol");
					preview.appendChild(list);
					for (let i = 0; i < curFiles.length; i++) {
						const listItem = document.createElement("li");
						const para = document.createElement("p");

						if (this.validFileType(curFiles[i])) {
							para.textContent =
								"File name " +
								curFiles[i].name +
								", file size " +
								this.returnFileSize(curFiles[i].size) +
								".";
							const image = document.createElement("img");
							image.src = window.URL.createObjectURL(curFiles[i]);
							this.images.push(image);

							listItem.appendChild(image);
							listItem.appendChild(para);
						} else {
							para.textContent =
								"File name " +
								curFiles[i].name +
								": Not a valid file type. Update your selection.";
							listItem.appendChild(para);
						}
						list.appendChild(listItem);
					}
				}
			},
			toSprite() {
				newSprite({
					canvasId: "canvas",
					images: this.images,
					width: 132,
					height: 150
				});
			}
			// newSprite() {
			// 	const canvas = document.getElementById("canvas");
			// 	canvas.setAttribute("width", 132);
			// 	canvas.setAttribute("height", 150);
			// 	let initX = 0;
			// 	let initY = 0;
			// 	this.images.forEach((ele, index) => {
			// 		const ctx = canvas.getContext("2d");
			// 		ctx.drawImage(ele, initX + 50 * index, 0);
			// 	});
			// 	canvas.toBlob(blob => {
			// 		saveAs(blob, "pretty image.png");
			// 	});
			// }
		}
	};
</script>

<style lang="scss" scoped>
	.new {
		width: 100px;
		height: 100px;
		border-radius: 4px;
		border: none;
		outline: none;
	}
</style>
