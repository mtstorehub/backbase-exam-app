import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress';
import VueFire from 'vuefire/dist/vuefire'
import '../node_modules/nprogress/nprogress.css'
import { MdButton, MdToolbar, MdIcon, MdDrawer, MdList, MdContent, MdCard, MdRadio } from 'vue-material/dist/components'
// import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import Vuetify, { VBtn, VJumbotron, VContainer, VLayout, VFlex, VDivider, VBadge, VIcon, VProgressCircular, VPagination, VItemGroup, VSubheader, VItem, VChip } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
// import Vuetify from 'vuetify'

// vue fire
Vue.use(VueFire)
// Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdContent)
Vue.use(MdCard)
Vue.use(MdRadio)

// Vuetify
Vue.use(Vuetify, {
  components: { VBtn, VJumbotron, VContainer, VLayout, VFlex, VDivider, VBadge, VIcon, VProgressCircular, VPagination, VItemGroup, VSubheader, VItem, VChip}
})

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
