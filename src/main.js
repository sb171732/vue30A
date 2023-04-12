import Vue from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps'
import router from './router'
Vue.config.productionTip = false

const settings = {
  apiKey: '536055a1-fcf0-4d1e-9811-0255abde0165',      
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

Vue.use(YmapPlugin, settings)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

