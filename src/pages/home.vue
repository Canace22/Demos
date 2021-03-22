<template>
  <div class="home-container">
    <m-header :lists="lists" @change="navSelect" />
    <article :style="{ height: h }" class="article">
      <m-aside :list="lists" @change="navSelect"/>
      <main class="main">
        <section class="card" v-for="(content, i) in contents" :key="i" @click="openTab(content.name)">
          <img class="cover" :src="content.cover" />
          <div class="title">{{ content.title }}</div>
        </section>
        <section class="none" v-for="(item, index) in 2" :key="index + 'aaa'"></section>
      </main>
    </article>
  </div>
</template>

<script>
import config from "assets/js/config";
import MHeader from "@/common/header";
import  MAside from '@/common/aside'
/* eslint-disable no-unused-expressions */
export default {
  components: {
    MHeader,
    MAside
  },
  data() {
    return {
      lists:[...config],
      contents: config[0].contents
    };
  },
  computed: {
    h() {
      return `${window.innerHeight - 72}px`;
    },
  },
  methods: {
    openTab(name) {
      const url = location.href + name.toLowerCase()
      window.open(url)
    },
    navSelect(item) {
      this.contents = item;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-container {
  width: 100vw;
  height: 100vh;
}

.article {
  width: 100%;
  .main {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100%;
    padding: 1.25rem;
    margin-left: 20%;
    overflow-y: auto;
    .card {
      width: 25rem;
      height: 18.75rem;
      background: #fff;
      margin: 0.625rem;
      box-shadow: 0px 0px 15px rgba(19, 18, 18, 0.171);
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
    .none {
      width: 25rem;
      height: 0;
    }
  }
}
@media (max-width: 1280px) {
  .main {
    margin-left: 0 !important;
    margin: auto;
  }
}
</style>
