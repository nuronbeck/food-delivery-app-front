import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from "./components/BaseButton"
import DealCard from "./components/Cards/DealCard"
import CategoryCard from "./components/Cards/CategoryCard"
import ProductCard from "./components/Cards/ProductCard"
import ProductCardSkeleton from "./components/Skeletons/ProductCardSkeleton"
import BaseInput from "./components/BaseInput"  
import BaseCheckbox from "./components/BaseCheckbox"
import BaseSpinner from './components/Spinners/BaseSpinner'
import BaseNotification from './components/Notification/BaseNotification'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash, faCheck, faExclamation, faXmark} from '@fortawesome/free-solid-svg-icons'
library.add(faEye);
library.add(faEyeSlash);
library.add(faCheck);
library.add(faExclamation);
library.add(faXmark);


Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('BaseButton', BaseButton);
Vue.component('BaseCheckbox', BaseCheckbox);
Vue.component('DealCard', DealCard);
Vue.component('CategoryCard', CategoryCard);
Vue.component('ProductCard', ProductCard);
Vue.component('ProductCardSkeleton', ProductCardSkeleton);
Vue.component('BaseInput', BaseInput);
Vue.component('BaseSpinner', BaseSpinner);
Vue.component('BaseNotification', BaseNotification);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
