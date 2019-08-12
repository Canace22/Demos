<template>
  <div class="wrap">
    <div class="item"></div>
  </div>
</template>

<script>
export default {
  name: 'freeDrag',
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 300px;
  height: 300px;
  background: grey;
  border-radius: 4px;
  .item {
    width: 100px;
    height: 100px;
    background: rgb(194, 191, 15);
    border-radius: 4px;
  }
}
</style>
