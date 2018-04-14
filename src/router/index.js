import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import home from '@/views/home/home.vue'
import me from '@/views/me/me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: index,
      children: [
        {
          name: 'home',
          path: '/home',
          component: home
        },
        {
          name: 'me',
          path: '/me',
          component: me
        }
      ]
    }
  ]
})
