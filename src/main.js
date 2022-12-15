import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from "./components/BaseButton"
import DealCard from "./components/Cards/DealCard"
import CategoryCard from "./components/Cards/CategoryCard"
import ProductCard from "./components/Cards/ProductCard"
import BaseInput from "./components/BaseInput"
import LogoBlock from "./components/LogoBlock"

Vue.config.productionTip = false

Vue.component('BaseButton', BaseButton)
Vue.component('DealCard', DealCard)
Vue.component('CategoryCard', CategoryCard)
Vue.component('ProductCard', ProductCard)
Vue.component('BaseInput', BaseInput)
Vue.component('LogoBlock', LogoBlock)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
