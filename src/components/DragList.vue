<template>
  <div class="drag-wrap">
    <list></list>
    <free-drag></free-drag>
  </div>
</template>
<script>
import List from './common/list.vue';
import FreeDrag from './common/freeDrag.vue';

export default {
  name: 'drag-list',
  components: { List, FreeDrag },
};
</script>
<style lang="scss" scoped>
.drag-wrap {
  display: flex;
  justify-content: space-around;
}
</style>
