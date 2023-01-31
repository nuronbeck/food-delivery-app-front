import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'AuthLayout',
    component: () => import('../layouts/AuthLayout'),
    children: [
      {
        path: 'login',
        component: () => import('../pages/Auth/LoginPage')
      },
      {
        path: 'forgot-password',
        component: () => import('../pages/Auth/ForgotPasswordPage')
      },
      {
        path: 'sign',
        component: () => import('../pages/Auth/SignPage')
      },
    ]
  },
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('../layouts/MainLayout'),
    children: [
      {
        path: '',
        component: () => import('../pages/IndexPage')
      },
      {
        path: 'profile',
        component: () => import('../pages/ProfilePage')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
