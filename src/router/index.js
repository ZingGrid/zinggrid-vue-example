import Vue from 'vue'
import Router from 'vue-router'

// import all routes
import readOnly from '@/components/read_only';
import OneWayDataBinding from '@/components/one_way_data_binding';
import TwoWayDataBinding from '@/components/two_way_data_binding';
import Methods from '@/components/methods';
import Events from '@/components/events';
import Ajax from '@/components/ajax';
import SSR from '@/components/ssr';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'read-only',
      component: readOnly
    },
    {
      path: '/attribute-change',
      name: 'one-way-data-binding',
      component: OneWayDataBinding
    },
    {
      path: '/data-change',
      name: 'two-way-data-binding',
      component: TwoWayDataBinding
    },
    {
      path: '/ajax',
      name: 'ajax',
      component: Ajax
    },
    {
      path: '/ssr',
      name: 'ssr',
      component: SSR
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
