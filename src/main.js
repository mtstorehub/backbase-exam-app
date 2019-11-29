import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress';
import VueFire from 'vuefire'
import '../node_modules/nprogress/nprogress.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vuetify from 'vuetify'

Vue.use(VueFire)
Vue.use(VueMaterial)
Vue.use(Vuetify)

Vue.config.productionTip = false

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
