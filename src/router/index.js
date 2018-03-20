import Vue from 'vue'
import Router from 'vue-router'
import myMain from '@/components/main.vue'
import myBooksList from '@/components/booksList.vue'
import myBookDetail from './../components/bookDetail.vue'
import myReadModel from './../components/readModel.vue'
import mySearch from './../components/search.vue'
import myUser from './../components/user.vue'
import myUserDetail from './../components/usedetail.vue'
import myBookShelf from './../components/bookshelf.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: myMain
    },
    {
      path: '/:id',
      name: 'myBooksList',
      component: myBooksList
    },
    {
      path:'/bookdetail/:id',
      name:'bookdetail',
      component:myBookDetail
    },
    {
      path:'/readbook/:id',
      name:'readmodel',
      component:myReadModel
    },
    {
      path:'/user/search',
      name:'search',
      component:mySearch
    },
    {
      path:'/user/login',
      name:'login',
      component:myUser
    },
    {
      path:'/user/detail',
      name:'userdetail',
      component:myUserDetail
    },
    {
      path:'/user/bookshelf',
      name:'BookShelf',
      component:myBookShelf
    }
  ]
})
