<template>
  <div>
    <drag-list handle=".item" @changeItems="changeItems">
      <template #item="{item}">
        <label class="label" for="item.id">{{ item.name }}: </label>
        <input class="input" type="text" v-model="list[item.name]" />
      </template>
    </drag-list>
    <section class="list-wrap">
      <drag-list :handle="handle" :slot-class="['drag-list']" @changeItems="changeItems">
        <template #item="{item}">
          <span>{{ item.name }}</span>
        </template>
      </drag-list>
      <div class="btn-group">
        <button v-show="!isSort" @click="changeSortStatus(1)">新建排序</button>
        <button v-show="isSort" @click="changeSortStatus(0)">保存排序</button>
      </div>
    </section>
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
      isSort: false,
      handle: '.none',
    };
  },
  methods: {
    changeItems(val) {
      console.log('items', val);
    },
    changeSortStatus(val) {
      console.log('我被点击了！', val);
      this.isSort = !!val;
      console.log(this.isSort);
      this.handle = this.isSort ? '.item' : '.none';
    },
  },
};
</script>

<style lang="scss" scoped>
.drag-list {
  position: relative;
  flex-direction: column;
  flex-wrap: nowrap;
  width: fit-content;
  height: 50vh;
  background: #fff;
  overflow: auto;
  margin: 10px 0;
  border: 1px solid #eee;
  /deep/.item {
    line-height: 30px;
    margin: 10px 0;
  }
}
.btn-group {
  position: absolute;
  bottom: 0;
}
</style>
