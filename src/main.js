import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.http.options.root = 'https://api.punkapi.com/v2/';
Vue.http.interceptors.push((request, next) => {
  next((response) => {
      if (request.after) {
          request.after.call(this, response)
      }
  })
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
