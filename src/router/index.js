import Vue from 'vue'
import VueRouter from 'vue-router';
// Layouts
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'

// Pages
import IndexPage from '../pages/IndexPage'
import LoginPage from '../pages/Auth/LoginPage'
import ForgotPasswordPage from '../pages/Auth/ForgotPasswordPage'
import SignPage from '../pages/Auth/SignPage'
import ProfilePage from '../pages/ProfilePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'AuthLayout',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordPage
      },
      {
        path: 'sign',
        component: SignPage
      },
    ]
  },
  {
    path: '/',
    name: 'MainLayout',
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
