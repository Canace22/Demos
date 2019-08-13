<template>
  <div>
    <videos :config="config" :fullSrc="fullSrc" :stopSrc="stopSrc" :playSrc="playSrc" :type="type"></videos>
    <div class="bt-wrap">
      <button class="bt" @click="type=1">type 1</button>
      <button class="bt" @click="type=2">type 2</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Videos from '@/components/Video.vue';

export default {
  name: 'videoT',
  components: {
    Videos,
  },
  data() {
    return {
      config: {
        type: 'mp4',
        url: 'https://ebag-lab.ebag.readboy.com/phonics/videos/A.mp4',
      },
      fullSrc: './img/fullScreen.png',
      stopSrc: './img/pause.png',
      playSrc: './img/play.png',
      type: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
.bt-wrap {
  width: 100%;
  height: 4.5rem;
  margin: 10px;
  .bt {
    padding: 10px 20px;
    margin: 10px;
    background: rgb(29, 134, 219);
    color: #fff;
    border: none;
    outline: none;
  }
}
</style>
