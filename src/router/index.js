import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import {
  redirectIfNotGuest,
  redirectIfNotAuth,
} from "@/middlewares/AuthMiddleware";

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
    beforeEnter: redirectIfNotAuth,
    component: () => import("@/views/WatchlistView.vue"),
  },
  {
    path: "/viewed",
    name: "viewed",
    meta: { layout: "main" },
    beforeEnter: redirectIfNotAuth,
    component: () => import("@/views/ViewedView.vue"),
    children: [
      {
        path: "films",
        component: () => import("@/views/ViewedFilms.vue"),
      },
      {
        path: "statistics",
        component: () => import("@/views/ViewedStatistics.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    //meta: { isGuest: true },
    beforeEnter: redirectIfNotGuest,
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    //meta: { isGuest: true },
    beforeEnter: redirectIfNotGuest,
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
  {
    path: "/not_authorized",
    name: "not_authorized",
    meta: { layout: "main" },
    component: () => import("@/views/NotAuthView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { layout: "main" },
    beforeEnter: redirectIfNotAuth,
    component: () => import("@/views/UserProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
