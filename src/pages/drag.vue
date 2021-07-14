<template>
  <div>
    <drag-list @changeItems="changeItems">
      <template #item="{item}">
        <label class="label" for="item.id">{{ item.name }}: </label>
        <input class="input" type="text" v-model="list[item.name]">
      </template>
    </drag-list>
  </div>
</template>

<script>
/* eslint-disable no-plusplus */
import DragList from '@/components/drag/drag';

export default {
  components: {
    DragList,
  },
  data() {
    return {
      list: Object.create(null),
    };
  },
  methods: {
    changeItems(val) {
      console.log('items', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.drag-wrap {
  display: flex;
  flex-wrap: wrap;
  .item {
    text-align: center;
    // width: 200px;
    line-height: 100px;
    color: #009cff;
    font-size: 40px;
    font-weight: 700;
    padding: 20px;
    border: 2px solid transparent;
    margin: 10px;
    cursor: pointer;
    &:hover {
      border: 2px dotted #009cff;
    }
  }
  .select {
    background: #009cff;
    color: #fff;
  }
  .move-in {
    animation: scale-item linear 0.5s;
  }
}
@keyframes scale-item {
  from {
    transform: translate(-10px, 10px);
  }
  to {
    transform: translate(0, 0);
  }
}
</style>
