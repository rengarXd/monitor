import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Login from './views/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import(/* webpackChunkName: "asdfasdf" */ '@/views/login.vue')
    },
    {
      path: '/Home',
      name: 'Monitor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "dsafadf" */ '@/views/Home.vue')
    },
    {
      path: '/bigscreen',
      name: 'Screen',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "asdfsdf" */ '@/views/BigScreen.vue')
    }
  ]
})
