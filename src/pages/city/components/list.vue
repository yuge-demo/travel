<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item , key) of list" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  props: {
    list: Object,
    hot: Array,
    letter: String
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
      // console.log(this.letter)
    }
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #cccccc;
  }

  &:after {
    border-color: #cccccc;
  }
}

.border-bottom {
  &:before {
    border-color: #cccccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  left: 0;
  bottom: 0;
}

.title {
  line-height: 0.54rem;
  background: #eeeeee;
  padding-left: 0.2rem;
  color: #666666;
  font-size: 0.26rem;
}

.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
}

.button-wrapper {
  width: 33.33%;
  float: left;
}

.button {
  margin: 0.1rem;
  padding: 0.1rem 0;
  text-align: center;
  border: 0.02rem solid #cccccc;
  border-radius: 0.06rem;
}

.item {
  line-height: 0.76rem;
  padding-left: 0.2rem;
}
</style>