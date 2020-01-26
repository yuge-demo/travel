<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1511/57/57a1490e1b72901a90.img.jpg_600x330_814b47da.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">华清爱琴海温泉</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe63a;</span> 39
        </div>
      </div>
    </div>
    <common-garrary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-garrary>
  </div>
</template>

<script>
import CommonGarrary from "../../../common/gallary/Gallary";
export default {
  name: "DetailBanner",
  components: {
    CommonGarrary
  },
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1512/be/befbf244597373c690.img.jpg_350x240_28ca2ba6.jpg",
        "http://img1.qunarzz.com/sight/p0/1709/d1/d157c4b0734f6bc4a3.img.png_350x240_c02a802c.png"
      ]
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner-img {
  width: 100%;
}

.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  line-height: 0.6rem;
  color: #ffffff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0, ), rgba(0, 0, 0, 0.8));
}

.banner-title {
  flex: 1;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.banner-number {
  margin-top: 0.14rem;
  padding: 0 0.4rem;
  line-height: 0.32rem;
  height: 0.32rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.8);
  font-size: 0.24rem;
}

.banner-icon {
  font-size: 0.24rem;
}
</style>