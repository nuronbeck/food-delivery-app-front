import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import auth from "./modules/auth"

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    auth
  }
})

export default store