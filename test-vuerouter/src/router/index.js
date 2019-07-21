import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import H1 from '@/components/Header_h1'
import H2 from '@/components/Header_h2'
import asdf from '@/components/asdf'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    //单页面多路由
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   components: {
    //     default:Header,
    //     left:H1,
    //     right:H2
    //   }
    // }

    //子路由
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    // ,{
    //   path:"/header",
    //   name:"Header",
    //   component:Header,
    //   children:[{
    //     path:"h1",
    //     name:"h1",
    //     component:H1,
    //   },{
    //   path:"h2",
    //   name:"h2",
    //   component:H2,
    // }]
    // }

    //路由重定向
    // {
    //   path:"/header",
    //   name:"header",
    //   redirect:"/"
    //   // component:Header
    // }

    // alias别名
    // {
    //   path:"/header",
    //   name:"Header",
    //   component:Header,
    //   alias:"/header1"
    // },{
    //   path:"/h1",
    //   name:"H1",
    //   component:H1
    // },

    // 404页面
    // {
    //   path:'*',
    //   component:asdf
    // }

    // 路由钩子
    {
      path:"/header",
      name:"Header",
      component:Header,
      alias:"/header1",
      beforeEnter:(to,from,next)=>{
        console.log(to)   
        console.log(from);
        // next();
      }
    },{
      path:"/h1",
      name:"H1",
      component:H1
    }
  ]
})
