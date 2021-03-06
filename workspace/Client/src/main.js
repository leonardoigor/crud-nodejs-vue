import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import utils from './utils/'
import axios from 'axios'
import intercepter from './utils/intercepter'
import VueTheMask from 'vue-the-mask'


axios.defaults.baseURL = 'https://api-igor.herokuapp.com/api'

intercepter(store, axios)
Vue.use(VueTheMask)


Vue.config.productionTip = false
utils.prototypes()
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
