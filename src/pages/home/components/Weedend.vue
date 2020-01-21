<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <!-- <button class="item-button">查看详情</button> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeedend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1511/2b/5e0923cd15e06.jpg_r_640x214_b9c024c1.jpg",
          title: "大连圣压海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/db/1f83f4f536ea10.jpg_r_640x214_4f7d9ee8.jpg",
          title: "大连圣压海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1703/c8/c21ee1e6556561.jpg_r_640x214_e47f78ad.jpg",
          title: "大连圣压海洋世界",
          desc: "浪漫大连首站，浪漫的海洋主题乐园"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl';


.recommend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
}

.item-img {
  width: 100%;
}
.item-info{
    padding .1rem
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  ellipsis();
}

.item-desc {
  line-height: 0.4rem;
  color: #cccccc;
  ellipsis();
}
</style>