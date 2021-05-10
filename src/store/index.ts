import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    user: '',
  },
  mutations: {
    auth_success(state, user) {
      state.status = 'success'
      state.user = user
    },
    logout(state){
      state.status = ''
      state.user = ''
    },
  },
  actions: {
  },
  modules: {
  },
  getters : {
    isLoggedIn: state => !!state.user,
    authStatus: state => state.status,
  }
})
