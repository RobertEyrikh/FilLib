import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

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
    beforeEnter: redirectIfNotGuest,
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

async function redirectIfNotGuest(to, from, next) {
  const isGuest = await getIsAuthState();
  if (isGuest) {
    next("/");
  } else {
    next();
  }
}

function getIsAuthState() {
  return new Promise((resolve) => {
    if (store.state.user.isAuth === false) {
      const unwatch = store.watch(
        () => store.state.user.isAuth,
        (value) => {
          unwatch();
          resolve(value);
        }
      );
    } else {
      resolve(store.state.user.isAuth);
    }
  });
}
// router.beforeEach((to, from, next) => {
//   const isGuest = "store.state.user.isAuth"
//   const requireGuest = to.matched.some((record) => record.meta.isGuest);
//   console.log(isGuest);
//   if (isGuest && requireGuest) {
//     next("/");
//   } else {
//     next();
//   }
// });

export default router;
