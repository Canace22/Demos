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
        >{{item.name}}</section>
      </aside>
      <main class="main">
        <section class="card" v-for="(content, i) in contents" :key="i">
          <img class="cover" :src="content.cover" />
          <div class="title">{{content.title}}</div>
        </section>
      </main>
    </article>
  </div>
</template>

<script>
/* eslint-disable no-unused-expressions */
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      lists: [
        {
          name: '媒体',
          isActive: 0,
          contents: [
            { title: '视频播放器', cover: './img/1.jpg' },
            { title: '音频播放器', cover: './img/2.jpg' },
          ],
        },
        {
          name: '拖动',
          isActive: -1,
          contents: [
            { title: '列表拖拽', cover: './img/3.png' },
            { title: '自由拖拽', cover: './img/4.png' },
          ],
        },
        {
          name: '其他',
          isActive: -1,
          contents: [
            { title: '时钟', cover: './img/5.jpg' },
            { title: '计算器', cover: './img/6.jpg' },
            { title: '猜拳', cover: './img/7.jpg' },
            { title: '时钟', cover: './img/5.jpg' },
            { title: '计算器', cover: './img/6.jpg' },
            { title: '猜拳', cover: './img/7.jpg' },
          ],
        },
      ],
      isSelect: 0,
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
  mounted() {

  },
  methods: {
    navSelect(index) {
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
      height: 2.5rem;
      line-height: 2.5rem;
      color: #781e02;
      font-size: 1.25rem;
      font-weight: 600;
      padding: 10px;
      cursor: pointer;
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
.isActive {
  background-color: #fbebd7 !important;
}
</style>
