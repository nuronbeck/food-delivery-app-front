import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from "./components/BaseButton"
import DealCard from "./components/Cards/DealCard"

Vue.config.productionTip = false

Vue.component('BaseButton', BaseButton)
Vue.component('DealCard', DealCard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
