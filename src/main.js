import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from "./components/BaseButton"
import DealCard from "./components/Cards/DealCard"
import CategoryCard from "./components/Cards/CategoryCard"
import ProductCard from "./components/Cards/ProductCard"
import BaseInput from "./components/BaseInput"  
import LogoBlock from "./components/LogoBlock"
import BaseCheckbox from "./components/BaseCheckbox"
import BaseSpinner from './components/Spinners/BaseSpinner'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash, faCheck } from '@fortawesome/free-solid-svg-icons'
library.add(faEye);
library.add(faEyeSlash);
library.add(faCheck);

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('BaseButton', BaseButton)
Vue.component('BaseCheckbox', BaseCheckbox)
Vue.component('DealCard', DealCard)
Vue.component('CategoryCard', CategoryCard)
Vue.component('ProductCard', ProductCard)
Vue.component('BaseInput', BaseInput)
Vue.component('LogoBlock', LogoBlock)
Vue.component('BaseSpinner', BaseSpinner)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
