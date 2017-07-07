import Vue from 'vue'
import Router from 'vue-router'
import update from '@/components/update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'update',
      component: update
    }
  ]
})
