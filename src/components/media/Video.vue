<template>
  <div class="container">
    <div class="video-wrap">
    <video
      id="videoElement"
      class="video"
      @click="videoStatus?videoPause($event):videoPlay($event)"
    ></video>
    <img class="video-handle-two" :src="srcS" @click="videoControl" v-show="type===1" />
    <div class="progress-wrap" v-show="type===2">
      <img class="video-handle" :src="src" @click="videoControl" />
      <input
        ref="progress"
        class="progress"
        type="range"
        step="2"
        v-model="percent"
        @click="videoUpdate"
      />
      <img :src="fullSrc" @click="fullScreen" />
    </div>
  </div>
  </div>
</template>

<script>
import flvjs from 'flv.js';
// import videoObj from '@/assets/js/videoObj';

export default {
  name: 'videos',
  props: {
    config: Object,
    fullSrc: String,
    playSrc: String,
    stopSrc: String,
    type: Number,
  },
  data() {
    return {
      videoStatus: true,
      percent: 0,
    };
  },
  computed: {
    src() {
      return this.videoStatus ? this.stopSrc : this.playSrc;
    },
    srcS() {
      return this.videoStatus ? '' : this.playSrc;
    },
  },
  mounted() {
    const el = document.getElementById('videoElement');
    this.videoPlay(el);
  },
  methods: {
    // eslint-disable-next-line consistent-return
    videoObj(el, config) {
      if (flvjs.isSupported()) {
        const flvPlayer = flvjs.createPlayer(config);
        flvPlayer.attachMediaElement(el);
        flvPlayer.load();
        return Promise.resolve(flvPlayer);
      }
    },
    videoPlay(e) {
      const el = e.target || e;
      const { config } = this;

      this.videoStatus = true;
      this.videoObj(el, config).then((res) => {
        res.play();
      });
    },
    videoPause(e) {
      const el = e.target || e;
      const { config } = this;

      this.videoStatus = false;
      this.videoObj(el, config).then((res) => {
        res.pause();
      });
    },
    videoControl() {
      const el = document.getElementById('videoElement');
      if (this.videoStatus) {
        this.videoPause(el);
      } else {
        this.videoPlay(el);
      }
    },
    videoUpdate() {
      const el = document.getElementById('videoElement');
      const { config } = this;

      this.videoObj(el, config).then((res) => {
        res.currentTime = parseFloat(this.percent);
        if (this.videoStatus) {
          res.play();
        }
      });
    },
    fullScreen() {
      const el = document.getElementById('videoElement');
    },
  },
};
</script>

<style lang="scss" scoped>
.video-wrap {
  position: relative;
  width: 500px;
  margin: auto;
}
.video {
  width: 100%;
  height: auto;
  min-height: 21.25rem;
  background: #eee;
}
.video-handle-two {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.progress-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  border: 1px solid orange;
  .progress {
    width: 80%;
    background: orange;
    // border-radius: 10px;
    outline: none;
    -webkit-appearance: none;
  }
}
</style>
<style scoped>
input[type="range"]::-webkit-slider-thumb {
  width: 20px;
  height: 20px;
  background: orangered;
  -webkit-appearance: none;
}
input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  border: none;
}

input[type="range"]::-moz-range-track {
  border: none;
  background: none;
  outline: none;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-moz-focus-outer {
  border: none;
}
</style>
