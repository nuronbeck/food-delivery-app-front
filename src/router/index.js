import Vue from 'vue'
import VueRouter from 'vue-router';
// Layouts
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'

// Pages
import IndexPage from '../pages/IndexPage'
import LoginPage from '../pages/Auth/LoginPage'
import ForgotPage from '../pages/Auth/ForgotPage'
import SignPage from '../pages/Auth/SignPage'
import ProfilePage from '../pages/ProfilePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'LoginPage',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'forgot',
        component: ForgotPage
      },
      {
        path: 'sign',
        component: SignPage
      }
    ]
  },
  {
    path: '/',
    name: 'IndexPage',
    component: MainLayout,
    children: [
      {
        path: '',
        component: IndexPage
      },
      {
        path: 'profile',
        component: ProfilePage
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
