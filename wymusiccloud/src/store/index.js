import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    uid:'',
  },
  getters:{
    getUID:state => state.uid,
  },
  mutations: {
    storeUID(state,value){
      state.uid = value
    }
  },
  actions: {},
  modules: {}
})
