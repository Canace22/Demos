<template>
  <aside class="aside">
    <section
      class="item"
      :class="{ isActive: isActive === index }"
      v-for="(item, index) in list"
      :key="index"
      @click="changeIndex(item,index)"
    >
      <img class="icon" :src="item.icon" />
      <span>{{ item.name }}</span>
    </section>
  </aside>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      isActive: 0
    }
  },
  methods: {
    changeIndex(item, index) {
      this.isActive = index;
      this.$emit('change', item.contents)
    }
  },
};
</script>

<style lang="scss" scoped>
.aside {
  float: left;
  width: 20%;
  height: 100%;
  background: #f3cb81;
  overflow: hidden;
  .item {
    display: flex;
    align-items: center;
    height: 2.5rem;
    line-height: 2.5rem;
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
.isActive {
  background-color: #fbebd7;
}
@media (max-width: 1280px) {
  .aside {
    display: none;
  }
}
</style>
