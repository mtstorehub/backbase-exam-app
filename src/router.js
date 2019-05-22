import Vue from 'vue'
import Router from 'vue-router'
import HomeItem from './components/HomeItem.vue'
import ContactUs from './components/ContactUs.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeItem
    },
    {
      path: '/contact_us',
      name: 'ContactUs',
      component: ContactUs
    }
  ]
})
