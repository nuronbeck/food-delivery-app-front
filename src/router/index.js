import Vue from "vue";
import VueRouter from "vue-router";
// Layouts
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

// Pages
import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/Auth/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ProductCardPage from "../pages/Cards/ProductCardPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "LoginPage",
    component: AuthLayout,
    children: [
      {
        path: "login",
        component: LoginPage,
      },
    ],
  },
  {
    path: "/",
    name: "IndexPage",
    component: MainLayout,
    children: [
      {
        path: "",
        component: IndexPage,
      },
      {
        path: "profile",
        component: ProfilePage,
      },
      {
        path: "cards",
        component: ProductCardPage,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
