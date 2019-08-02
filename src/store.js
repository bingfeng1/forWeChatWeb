import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  mutations: {
    setUserInfo(state,result){
      state.userInfo = result
    }
  },
  actions: {
    setUserInfo({commit,state},result){
      commit('setUserInfo',result)
    }
  }
})
