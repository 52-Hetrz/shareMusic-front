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
      path: window.g.routePath.MOVIE_INFO,
      name: 'MovieInfo',
      component: ()=> import("@/components/commonComponents/movie/MovieInfo")
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
          path: window.g.routePath.PUBLISHED_MUSIC,
          name:'PublishedMusic',
          component: ()=> import("@/components/subComponents/user/publish/PublishedMusic"),
        },
        {
          path: window.g.routePath.TO_PUBLISH_MUSIC,
          name:'ToPublishMusic',
          component: ()=> import("@/components/subComponents/user/publish/ToPublishMusic"),
        },
        {
          path: window.g.routePath.PUBLISHED_MOVIE,
          name:'PublishedMovie',
          component: ()=> import("@/components/subComponents/user/publish/PublishedMovie"),
        },
        {
          path:window.g.routePath.TO_PUBLISH_MOVIE,
          name:"ToPublishMovie",
          component: ()=> import("@/components/subComponents/user/publish/ToPublishMovie")
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


