<template>
   <div class="content">
      <aside class="aside">
        <section
          class="item"
          :class="{ isActive: curItem === key}"
          v-for="(item,key) in asideData"
          :key="key"
          @click="navSelect(key)"
        >
          <img class="icon" :src="item.icon" />
          <span>{{ item.name }}</span>
        </section>
      </aside>
      <main class="main-content">
        <section class="card" v-for="(content, i) in contents" :key="i" @click="openTab(content.path)">
          <img class="cover" :src="content.cover" />
          <div class="title">{{ content.title }}</div>
        </section>
        <section class="none" v-for="(item, index) in 2" :key="index + 'aaa'"></section>
      </main>
    </div>
</template>

<script>
import config from './config';

export default {
  data() {
    return {
      asideData: { ...config },
      isTab: false,
    };
  },
  computed: {
    curItem() {
      return this.$route.query.tab || 'others';
    },
    contents() {
      return config[this.curItem].contents;
    },
  },
  methods: {
    openTab(path) {
      const url = `/#/${path}`;
      window.open(url);
    },
    navSelect(tab) {
      this.$router.push({ path: '/home', query: { tab } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  display: flex;
  height: 100%;
}
.aside {
  width: 20%;
  height: 100%;
  background: #f3cb81;
  .item {
    display: flex;
    align-items: center;
    line-height: 3rem;
    color: #781e02;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.625rem;
    cursor: pointer;
    .icon {
      margin-right: 10px;
    }
  }
}
.main-content {
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: calc(100vh - 4.5rem);
  padding: 1.25rem;
  overflow-y: auto;
  box-sizing: border-box;
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
      background: #fbebd7;
    }
  }
  .none {
    width: 25rem;
    height: 0;
  }
}
@media (max-width: 1280px) {
  .aside {
    display: none;
  }
  .main-content {
    width: 100%;
    margin-left: 0 !important;
    margin: auto;
  }
}
</style>
