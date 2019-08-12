<template>
  <div class="list-wrap">
    <div class="list1">
      <div
        class="list-item"
        v-for="(item,index) in list1"
        :key="index"
        @dragstart="start(index,$event)"
        @dragend="end(index,$event)"
        draggable="true"
      >{{item}}</div>
    </div>
    <div class="list2">
      <div
        :id="`list-item-${index}`"
        class="list-item dropzone"
        :class="{shadow:isLabel===index}"
        v-for="(item,index) in list2"
        :key="index"
        @dragstart="start(index,$event, 1)"
        @dragend="end(index,$event, 1)"
        @dragenter="enter(index, $event)"
        @dragover="over($event)"
        @dragleave="leave(index,$event)"
        @drop="drop(index, $event)"
        draggable="true"
      >
        <!-- <div v-show="isLabel===index" class="shadow"></div> -->
        <span>{{index+1}}</span>
        <span>{{item.name}}</span>
        <!-- <img class="drag" :src="dragImg" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      list1: [
        '单选题',
        '多选题',
        '单项填空',
        '多项填空',
        '星级评价',
        '数值评价',
      ],
      list2: [],
      types: [
        { name: '单选题' },
        { name: '多选题' },
        { name: '单项填空题' },
        { name: '多项题' },
        { name: '星级评价题' },
        { name: '数值评价题' },
      ],
      ids: 0,
      isLabel: false,
      index: 0,
      dragImg: './img/drag.png',
    };
  },
  methods: {
    start(index, e, list) {
      e.target.style.opacity = 0.5;
      if (list) {
        this.index = index;
      }
    },
    end(index, e, list) {
      e.target.style.opacity = '';
      if (list) {
        const temp = this.list2[this.ids].name;

        this.list2[this.ids].name = this.list2[this.index].name;
        this.list2[this.index].name = temp;
      } else {
        this.list2.length === 0
          ? this.list2.push(this.types[index])
          : this.list2.splice(this.ids, 0, this.types[index]);
      }
    },
    over(e) {
      e.preventDefault();
    },
    enter(index, e) {
      if (e.target.id === `list-item-${index}`) {
        this.isLabel = index;
        this.ids = index;
      }
    },
    leave(index, e) {
      if (e.target.id === `list-item-${index}`) {
        this.isLabel = false;
      }
    },
    drop(index, e) {
      this.isLabel = false;
      e.preventDefault();
      e.target.classList.remove('slideInUp');
      e.target.classList.add('slideInUp');
    },
  },
};
</script>

<style lang="scss" scoped>
.list-wrap {
  display: flex;
  justify-content: space-around;
  width: 30%;
  .list1,
  .list2 {
    width: 30%;
    height: 100%;
    min-height: 300px;
    border: 1px solid orange;
    .list-item {
      height: 100px;
      cursor: pointer;
      &:hover {
        background-color: orange;
      }
    }
  }
}
.shadow {
  box-shadow: 0 -50px rgb(36, 120, 231);
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 100%, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInUp {
  animation: slideInUp 1s linear;
}
</style>
