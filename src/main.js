import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import ProgressBar from './components/ProgressBar'
import storeConfig from './store/store-config'
import Router from 'vue-router' // #A
import routerConfig from './router/router-config'
import { sync } from 'vuex-router-sync' // #A

Vue.use(Vuex)
Vue.use(Router) // #B

const router = new Router(routerConfig)
const store = new Vuex.Store(storeConfig)

sync(store, router) // #B

Vue.config.productionTip = false

// global progress bar
const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
