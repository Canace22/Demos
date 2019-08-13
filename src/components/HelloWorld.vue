<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Demos</h1>
    </header>
    <article :style="{height:h}" class="article">
      <aside class="aside">
        <section
          class="item"
          :class="{isActive:item.isActive === index}"
          v-for="(item,index) in lists"
          :key="index"
          @click="navSelect(index)"
        >
          <img class="icon" :src="item.icon" />
          <span>{{item.name}}</span>
        </section>
      </aside>
      <main class="main">
        <section
          class="card"
          v-for="(content, i) in contents"
          :key="i"
          @click="openTab(content.name)"
        >
          <img class="cover" :src="content.cover" />
          <div class="title">{{content.title}}</div>
        </section>
      </main>
    </article>
    <article v-show="isTab" class="modal-wrap" @click.self="isTab=false">
      <section class="modal">
        <img class="close" :src="closeSrc" @click="isTab=false" />
        <component
          v-bind:is="currentTab"
          :config="config"
          :fullSrc="fullSrc"
          :stopSrc="stopSrc"
          :playSrc="playSrc"
          :type="type"
        ></component>
      </section>
    </article>
  </div>
</template>

<script>
const Clock = () => import('./Clock.vue');
const Video = () => import('./Video.vue');
const DragList = () => import('./DragList.vue');
/* eslint-disable no-unused-expressions */
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Clock,
    Video,
    DragList,
  },
  data() {
    return {
      lists: [
        {
          name: '媒体',
          icon: './img/meta-icon.png',
          isActive: 0,
          contents: [
            { title: '视频播放器', name: 'Video', cover: './img/1.jpg' },
            { title: '音频播放器', name: 'Audio', cover: './img/2.jpg' },
          ],
        },
        {
          name: '拖动',
          icon: './img/drag-icon.png',
          isActive: -1,
          contents: [
            { title: '列表拖拽', name: 'DragList', cover: './img/3.png' },
            { title: '自由拖拽', name: 'Drag', cover: './img/4.png' },
          ],
        },
        {
          name: '其他',
          icon: './img/other-icon.png',
          isActive: -1,
          contents: [
            { title: '时钟', name: 'Clock', cover: './img/5.jpg' },
            { title: '计算器', name: 'Clock', cover: './img/6.jpg' },
            { title: '猜拳', name: 'Clock', cover: './img/7.jpg' },
            { title: '时钟', name: 'Clock', cover: './img/5.jpg' },
            { title: '计算器', name: 'Clock', cover: './img/6.jpg' },
            { title: '猜拳', name: 'Clock', cover: './img/7.jpg' },
          ],
        },
      ],
      isSelect: 0,
      currentTab: 'Clock',
      isTab: false,
      config: {
        type: 'mp4',
        url: 'https://ebag-lab.ebag.readboy.com/phonics/videos/A.mp4',
      },
      fullSrc: './img/fullScreen.png',
      stopSrc: './img/pause.png',
      playSrc: './img/play.png',
      type: 2,
      closeSrc: './img/close.png',
    };
  },
  computed: {
    h() {
      return `${window.innerHeight - 72}px`;
    },
    contents() {
      return this.lists[this.isSelect].contents;
    },
  },
  methods: {
    openTab(name) {
      this.currentTab = name;
      this.isTab = true;
    },
    navSelect(index, name) {
      this.isSelect = index;

      this.lists.forEach((element, i) => {
        i === index
          ? (this.lists[i].isActive = index)
          : (this.lists[i].isActive = -1);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@font-face {
  font-family: title;
  src: url(../../public/font/font.ttf);
}
.container {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 4.5rem;
  line-height: 4.5rem;
  background: #e9af40;
  .title {
    text-align: center;
    width: 200px;
    font-family: title;
    color: #781e02;
    padding: 0 10px;
    margin: 0;
  }
}
.article {
  width: 100%;
  // background: rgb(199, 191, 191);
  .aside {
    position: absolute;
    left: 0;
    width: 20%;
    height: inherit;
    background: #f3cb81;
    .item {
      display: flex;
      align-items: center;
      height: 2.5rem;
      line-height: 2.5rem;
      color: #781e02;
      font-size: 1.25rem;
      font-weight: 600;
      padding: 10px;
      cursor: pointer;
      .icon {
        margin-right: 10px;
      }
    }
  }
  .main {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100%;
    padding: 20px;
    margin-left: 20%;
    .card {
      width: 400px;
      height: 300px;
      background: #fff;
      margin: 10px;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20%;
        color: #781e02;
        font-weight: 600;
      }
      .cover {
        width: 100%;
        height: 80%;
      }
    }
  }
}
.modal-wrap {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #1f1e1e93;
  .modal {
    // position: absolute;
    // top: 0;
    // bottom: 0;
    // left: 0;
    // right: 0;
    // z-index: 999;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80rem;
    height: 50rem;
    background-color: #fbebd7;
    // outline: 10000px solid #1f1e1e93;
    margin: auto;
    border-radius: 8px;
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
}
.isActive {
  background-color: #fbebd7 !important;
}
</style>
