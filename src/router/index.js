import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/page/login.vue'], resolve)
    },
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/page/home.vue'], resolve),
      children: [
        {
          path: '/part1/menu1',
          name: 'menu1',
          component: resolve => require(['@/page/part1/menu1.vue'], resolve)
        },
        {
          path: '/part1/menu2',
          name: 'menu2',
          component: resolve => require(['@/page/part1/menu2.vue'], resolve)
        },
        {
          path: '/part2/menu3',
          name: 'menu3',
          component: resolve => require(['@/page/part2/menu3.vue'], resolve)
        }
      ]
    }
  ]
})
