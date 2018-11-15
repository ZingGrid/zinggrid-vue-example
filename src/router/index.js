import Vue from 'vue'
import Router from 'vue-router'

// import all routes
import ReadOnly from '@/components/read_only'
import TwoWayDataBinding from '@/components/two_way_data_binding'
import Methods from '@/components/methods'
import Events from '@/components/events'
import Ajax from '@/components/ajax'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'readonly',
      component: ReadOnly
    },
    {
      path: '/datachange',
      name: 'two-way-data-binding',
      component: TwoWayDataBinding
    },
    {
      path: '/ajax',
      name: 'ajax',
      component: Ajax
    },
    {
      path: '/methods',
      name: 'methods',
      component: Methods
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    }
  ]
})
