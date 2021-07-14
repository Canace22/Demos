<template>
  <div class="slider">
    <div class="slides">
      <div class="slides-item" :id="`slide-${item}`"  v-for="item in 5" :key="item">{{item}}</div>
    </div>
    <div class="pagination">
      <a class="bt" :href="`#slide-${item}`" v-for="item in 5" :key="item">{{item}}</a>
    </div>
</div>
</template>

<script>
export default {
  name: 'carousels',
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .pagination {
    position: absolute;
    bottom: 0;
    right:0;
    left: 0;
    margin: auto;
    .bt {
      display: inline-flex;
      width: 1.5rem;
      height: 1.5rem;
      background: white;
      text-decoration: none;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin: 0 0 0.5rem 0;
      position: relative;
      color: #ddd;
      &:active {
        top: 1px;
      }
      &:focus {
        background: #000;
      }
    }
  }
}

.slides {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.slides::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.slides::-webkit-scrollbar-thumb {
  background: rgb(21, 134, 187);
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
}
.slides-item {
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  min-height: 300px;
  margin-right: 50px;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  font-size: 100px;
}
img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
