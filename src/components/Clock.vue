<template>
  <div class="clock-wrap">
    <span>本周剩余 {{d}} 天 {{h}} : {{m}} : {{s}}</span>
  </div>
</template>
<script>
export default {
  name: 'clock',
  data() {
    return {
      h: 0,
      m: 0,
      s: 0,
      d: 0,
    };
  },
  created() {
    this.setTime();
    setInterval(() => {
      this.setTime();
    }, 1000);
  },
  methods: {
    setTime() {
      const date = new Date();
      this.h = date.getHours();
      this.m = date.getMinutes();
      this.s = date.getSeconds();
      this.d = 7 - date.getDay();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
