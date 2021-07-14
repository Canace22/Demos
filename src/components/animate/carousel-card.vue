<template>
<div class="swiper-list-stack swiper-list">
    <div class="swiper-main-stack swiper-main"></div>
    <img id="prev-stack" class="btn leftBtn"  alt="">
	  <img id="next-stack" class="btn rightBtn" alt="">
</div>
</template>

<script>
import Swiper from '@/assets/js/slider-card';

export default {
  name: 'courouselCard',
  mounted() {
    const imgArr = [{
      url: '#',
      imgPath: './img/1.png',
    },
    {
      url: '#',
      imgPath: './img/2.png',
    },
    {
      url: '#',
      imgPath: './img/1.png',
    },
    {
      url: '#',
      imgPath: './img/2.png',
    }];
    new Swiper({
      imgArr,
      imgWidth: 400,
      aniTime: 1000,
      intervalTime: 1500,
      scale: 1,
      autoplay: false,
      gap: 0,
  	  clsSuffix: '-stack',
    }).init();
  },
};
</script>

<style lang="scss" scoped>
.swiper-list{
  height: 200px;
  position: relative;
  overflow: hidden;
    border: 1px solid #eee;
    padding: 30px 0;
}
.swiper-main{
  height: 100%;
  position: relative;
}
.swiper-main img{
  height: 100%;
  display: block;
  position: absolute;
  top: 0px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.btn{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  z-index: 1002;
}
.leftBtn{
  left: 0px;
}
.rightBtn{
  right: 0px;
}
</style>
