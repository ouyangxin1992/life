import Vue from 'vue'
import Router from 'vue-router'

import Tabbar from '@/components/Tabbar'

import Home from '@/components/Home'
import All from '@/components/All'
import Time from '@/components/Time'
import Car from '@/components/Car'
import Mine from '@/components/Mine'
import loginall from '@/components/loginall'


import Principal from '@/components/Principal'
import Product from '@/components/Product'
import Household from '@/components/Household'
import Cooking from '@/components/Cooking'
import Homewear from '@/components/Homewear'
import Livelihood from '@/components/Livelihood'
import Soft from '@/components/Soft'
import Bedding from '@/components/Bedding'
import Travel from '@/components/Travel'
import Know from '@/components/Know'

import detailpage from '@/components/detailpage'
import listcolumn from '@/components/listcolumn'

import recommend from '@/components/recommend'
import standards from '@/components/standards'
import discuss from '@/components/discuss'




Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tabbar',
      component: Tabbar,
      children:[
        {
          path: '/listcolumn',
          name: 'listcolumn',
          component: listcolumn,
        },
        {
          path: '/detailpage',
          name: 'detailpage',
          component: detailpage,
          children:[
            {
              path: 'recommend',
              name: 'recommend',
              component: recommend,
            },
            {
              path: 'standards',
              name: 'standards',
              component: standards,
            },
            {
              path: 'discuss',
              name: 'discuss',
              component: discuss,
            }
          ]
        },
        {
          path: 'home',
          name: 'home',
          component: Home,
          children:[
            {
              path: 'Principal',
              name: 'Principal',
              component: Principal,
            },
            {
              path: 'product',
              name: 'product',
              component: Product,
            },
            {
              path: 'household',
              name: 'household',
              component: Household,
            },
            {
              path: 'cooking',
              name: 'cooking',
              component: Cooking,
            },
            {
              path: 'homewear',
              name: 'homewear',
              component: Homewear,
            },
            {
              path: 'livelihood',
              name: 'livelihood',
              component: Livelihood,
            },
            {
              path: 'soft',
              name: 'soft',
              component: Soft,
            },
            {
              path: 'bedding',
              name: 'bedding',
              component: Bedding,
            },
            {
              path: 'travel',
              name: 'travel',
              component: Travel,
            },
            {
              path: 'know',
              name: 'know',
              component: Know,
            }
          ]
        },
        {
          path: 'all',
          name: 'all',
          component: All,
        },
        {
          path: 'time',
          name: 'time',
          component: Time,
        },
        {
          path: 'car',
          name: 'car',
          component: Car,
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine,
        },
        {
          path: 'loginall',
          name: 'loginall',
          component: loginall,
        }
      ]
    },
    {
      path:'*',redirect:'/home'
    }
  ]
})
