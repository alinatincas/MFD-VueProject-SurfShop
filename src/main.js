import Vue from 'vue' 
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.config.productionTip = false //tells us that we use the version dev of vue

new Vue({
  router,
  render: h => h(App) //an alternative to use an in document template
}).$mount('#app')
