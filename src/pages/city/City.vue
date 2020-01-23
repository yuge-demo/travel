<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :list="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :list="cities" @change="handleLetterClick"></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "../city/components/Header";
import CitySearch from "../city/components/Search";
import CityList from "../city/components/list";
import CityAlphabet from "../city/components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    getCityInfo() {
      axios.get("/mock/city.json").then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterClick(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped></style>