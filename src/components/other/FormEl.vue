<template>
  <div class="formEl-wrap">
    <drop-down
      :list="drawDowmList"
      v-model="selected"
      @changeItem="changeItem"
    ></drop-down>
    <drop-down :list="drawDowmList" :isIcon="false" v-model="selectedM" @changeItem="changeItemM"></drop-down>
  </div>
</template>

<script>
import DropDown from 'components/common/dropDown.vue';

export default {
  name: 'formEl',
  components: {
    DropDown,
  },
  data() {
    return {
      drawDowmList: [
        {
          id: 1809271612460037,
          name: '光学',
        },
        {
          id: 1809271612460038,
          name: '声学',
        },
        {
          id: 1809271612460039,
          name: '机械运动',
        },
        {
          id: 1809271612460040,
          name: '物态变化',
        },
        {
          id: 1809271612460041,
          name: '质量与密度',
        },
      ],
      selected: { id: 1809271612460037, name: '光学' },
      selectedM: { id: 1809271612460037, name: '光学' },
      isDropDown: false,
    };
  },
  methods: {
    changeItem(item) {
      this.selected = item;
    },
    changeItemM(item) {
      this.selectedM = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.formEl-wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
