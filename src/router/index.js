import Vue from 'vue'
import Router from 'vue-router'
import viewDetail from '../view/viewDetail.vue'
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/view/:id',
      name: 'view',
      component: viewDetail
    },
    { 
      path: '/',
      name: 'index',
      component: HelloWorld
    }
  ]
})
