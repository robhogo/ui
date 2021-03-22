import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    auth_success(state, token) {
      state.status = 'success'
      state.token = token
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
  },
  modules: {
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})
