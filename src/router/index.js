import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    meta: { layout: "main" },
    component: HomeView,
  },
  {
    path: "/watchlist",
    name: "watchlist",
    meta: { layout: "main" },
    component: () => import("@/views/WatchlistView.vue"),
  },
  {
    path: "/viewed",
    name: "viewed",
    meta: { layout: "main" },
    component: () => import("@/views/ViewedView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/password_reset",
    name: "password_reset",
    component: () => import("@/views/PasswordResetView.vue"),
  },
  {
    path: "/password_change",
    name: "password_change",
    component: () => import("@/views/PasswordChangeView.vue"),
  },
  {
    path: "/film/:id",
    name: "film",
    meta: { layout: "main" },
    component: () => import("@/views/FilmView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
