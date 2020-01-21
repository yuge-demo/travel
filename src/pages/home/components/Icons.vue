<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="page of pages" :key="page.index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl:
            "https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
          desc: "民宿客栈"
        },
        {
          id: "0002",
          imgUrl:
            "https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png",
          desc: "专车自驾"
        },
        {
          id: "0003",
          imgUrl:
            "https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png",
          desc: "赚钱·信用卡"
        },
        {
          id: "0004",
          imgUrl:
            "https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png",
          desc: "旅游团购"
        },
        {
          id: "0005",
          imgUrl:
            "https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png",
          desc: "旅游团购"
        },
        {
          id: "0006",
          imgUrl:
            "https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png",
          desc: "旅游团购"
        },
        {
          id: "0007",
          imgUrl:
            "https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png",
          desc: "旅游团购"
        },
        {
          id: "0008",
          imgUrl:
            "https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png",
          desc: "旅游团购"
        },
        {
          id: "0009",
          imgUrl:
            "https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png",
          desc: "借钱"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
@import '~@/assets/styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icon-img {
  position: absolute;
  top: 0;
  righ: 0;
  left: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

.icon-img-content {
  display: block;
  margin: 0 auto;
  height: 100%;
}

.icon-desc {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  color: $darkTextColor;
  text-align: center;
  ellipsis();
}
</style>