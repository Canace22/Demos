<template>
  <div>
    <video :src="videoSrc"></video>
  </div>
</template>

<script>
export default {
  name: 'flash',
  data() {
    return {
      videoSrc: './video/1809271615380196.mp4',
    };
  },
  created() {
    // 'https://ziyuan.ebag.readboy.com/czExpAnim/source/1809271615380196.swf'
    console.log(111);
  },
};
</script>

<style lang="scss" scoped>
</style>
