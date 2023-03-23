import Vue from 'vue'
import Router from 'vue-router'
import Entry from "../components/entry.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entry',
      component: Entry
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import("@/components/Main"),
      redirect: window.g.routePath.MUSIC,
      children:[
        {
          path: window.g.routePath.MUSIC,
          name: 'Music',
          component: ()=>import("@/components/subComponents/platform/Music"),
        },
        {
          path: window.g.routePath.MOVIE,
          name: 'Movie',
          component: ()=> import("@/components/subComponents/platform/Movie")
        },
        {
          path: window.g.routePath.INFO,
          name:'Info',
          component: ()=> import("@/components/subComponents/user/Info")
        },
        {
          path: window.g.routePath.MESSAGE,
          name:'Message',
          component: ()=> import("@/components/subComponents/user/Message")
        },
        {
          path: window.g.routePath.PUBLISH,
          name:'Published',
          component: ()=> import("@/components/subComponents/user/Published"),
        },
        {
          path: window.g.routePath.TO_PUBLISH,
          name:'ToPublish',
          component: ()=> import("@/components/subComponents/user/ToPublish"),
        },
        {
          path: window.g.routePath.FAVOURITE,
          name:'Favourite',
          component: ()=> import("@/components/subComponents/user/Favourite")
        },
      ]
    }
  ]
})


