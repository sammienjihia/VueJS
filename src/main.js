import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // register the store folder to make it global
  store,

  // register router to make it global
  router,
  render: h => h(App),
}).$mount('#app')
