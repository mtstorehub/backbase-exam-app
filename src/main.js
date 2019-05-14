import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress';
import VueFire from 'vuefire'
import '../node_modules/nprogress/nprogress.css'
import { MdButton, MdToolbar, MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueFire)

Vue.use(MdButton)
Vue.use(MdToolbar)
Vue.use(MdIcon)

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
