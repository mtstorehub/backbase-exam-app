import Vue from 'vue'
import Router from 'vue-router'
import AddItem from './components/AddItem.vue'
import EditItem from './components/EditItem.vue'
// import ListItem from './components/ListItem.vue'
import HomeItem from './components/HomeItem.vue'
import ViewAll from './components/ViewAll'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeItem
    },
    {
          name: 'Add',
          path: '/add',
          component: AddItem
    },
    {
        name: 'Edit',
        path: '/edit/:id',
        component: EditItem
    },
    {
        name: 'ViewAll',
        path: '/index',
        component: ViewAll
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    }
  ]
})
