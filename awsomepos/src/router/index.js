import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
// import HelloWorld from '@/components/page/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWord',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'pos',
      component: Pos
    }
  ]
})
