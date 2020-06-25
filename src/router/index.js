import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'DefaultLayout',
      breadcrumb: 'Главная'
    },
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/services',
    name: 'Направления',
    meta: {
      layout: 'DefaultLayout',
      breadcrumb: 'Главная / Направления'
    },
    component: () => import ('../views/Services.vue')
  },
  {
    path: '/doctors/:id',
    name: 'doctors',
    meta: {
      layout: 'DefaultLayout',
      breadcrumb: routeParams => `Главная / Врачи / ${routeParams.id}`
    },
    component: () => import ('../views/DoctorsId.vue')
  },
  {
    path: '/doctors',
    name: 'doctorsAll',
    meta: {
      layout: 'DefaultLayout',
      breadcrumb: 'Главная / Врачи'
    },
    component: () => import ('../views/DoctorsAll.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
