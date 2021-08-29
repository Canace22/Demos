<template>
  <div class="container">
    <m-header>
      <template #nav>
        <section
          class="item"
          :class="{ isActive: curItem === item.name }"
          v-for="(item, key) in navList"
          :key="key"
          @click="updateNavIndex(key)"
        >
          <img class="icon" :src="item.icon" />
          <span>{{ item.name }}</span>
        </section>
      </template>
    </m-header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MHeader from '@/common/m-header.vue';
import config from './config';

export default {
  components: {
    MHeader,
  },
  data() {
    return {
      navList: { ...config },
    };
  },
  computed: {
    curItem() {
      return this.$route.query.tab || 'others';
    },
  },
  methods: {
    updateNavIndex(tab) {
      this.$router.push({ path: '/home', query: { tab } });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main {
    flex: 1;
  }

}
/deep/.isActive {
  background-color: #fbebd7 !important;
}
</style>
