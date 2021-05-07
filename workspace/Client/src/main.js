import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import utils from './utils/'
import axios from 'axios'
import intercepter from './utils/intercepter'

axios.defaults.baseURL = 'http://localhost:5050/api'

intercepter(store, axios)


Vue.config.productionTip = false
utils.prototypes()
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
