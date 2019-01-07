import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Home from '@/components/Home'
import Other from '@/components/Other'
import Detail from '@/components/Detail'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // redirect:'/register',
      redirect:'/home',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'/about',
          component:About
        },
        {
          path:'/home',
          component:Home
        },
        {
          path:'/other',
          component:Other
        },
      ]
    },
    {
      path:'/detail/:id',
      component:Detail
    },
    {
      path:'/register',
      component:Register
    },
   
  ]
})
