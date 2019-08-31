<template>
  <div class="dropDown-wrap" tabindex="1" @blur="hidden">
    <div class="dropDown" @click="isDropDown=!isDropDown">
      {{selected.name}}
      <svg class="arrow-right" role="presentation" v-show="isIcon">
        <polyline points="7,0 14,7 7,14" fill="none" stroke-width="2px" stroke="#fff" />
      </svg>
    </div>
    <div class="arrow-up" :class="{isDropDown:isDropDown}"></div>
    <div class="dropDown-list" :class="{isDropDown:isDropDown}">
      <div
        class="dropDown-item"
        :class="{isSelected:selected.id===item.id}"
        v-for="(item,index) in list"
        :key="index"
        @click="selectItem(item)"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropDown',
  model: {
    prop: 'selected',
    event: 'click',
  },
  props: {
    list: Array,
    selected: Object,
    isIcon: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isDropDown: false,
    };
  },
  methods: {
    selectItem(item) {
      this.$emit('changeItem', item);
      this.isDropDown = false;
    },
    hidden() {
      this.isDropDown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropDown-wrap {
  position: relative;
  z-index: 10;
  outline: none;
}
.dropDown {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 8.125rem;
  height: 2.5rem;
  line-height: 2.5rem;
  background: #009cff;
  color: #fff;
  font-size: 1.25rem;
  padding: 0 1.25rem;
  border-radius: 4px;
  margin-bottom: 0.3125rem;
  cursor: pointer;
}
.dropDown-list {
  visibility: hidden;
  min-width: 9.625rem;
  background: #ffffff;
  padding: 5px 0;
  transition: all 0.5s linear;
  .dropDown-item {
    height: 2.125rem;
    line-height: 2.125rem;
    box-sizing: border-box;
    padding: 0 20px;
    cursor: pointer;
    &:hover {
      background: #f5f7fa;
    }
  }
}
.arrow-up {
  visibility: hidden;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #ffffff;
  transform: translateX(1.25rem);
}
.arrow-right {
  display: inline-block;
  width: 16px;
  height: 16px;
}
.isSelected {
  color: #009cff;
  background: #f5f7fa;
}
.isDropDown {
  visibility: visible;
}
</style>
