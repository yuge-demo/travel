import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
    

  // actions: {
  // 两个参数 ctx 上下文 city 是传递过来的数据
  //   changeCity(ctx , city){
  //     ctx.commit('changeCity',city)
  //   }
  // },
  modules: {
  }
})
