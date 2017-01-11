import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import store from './store.js'

Vue.use(ElementUI, {locale})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
