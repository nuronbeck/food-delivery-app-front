import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import auth from "./modules/auth"
import user from "./modules/user"


Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    auth,
    user
  }
})

export default store