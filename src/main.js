import Vue from 'vue'
import App from './App.vue'
import router from './router'
import snStyle from '../src/components/index';

Vue.use(snStyle)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
