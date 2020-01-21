<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weedend></home-weedend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcons  from "./components/Icons"
import HomeRecommend from "./components/Recommend"
import HomeWeedend from "./components/Weedend"

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeedend
  }
};
</script>

<style lang="stylus" scoped></style>