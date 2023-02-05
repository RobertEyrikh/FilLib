<template>
  <aside class="sidebar" :class="{ isActive: isSidebarOpen }">
    <header class="sidebar-header">
      <img class="logo" src="@/assets/icons/logo.svg" />
    </header>
    <nav class="sidebar-nav">
      <router-link
        to="/home"
        class="sidebar-link"
        :class="{ active: $route.name == 'home' }"
      >
        Home
      </router-link>
      <router-link
        to="/watchlist"
        class="sidebar-link"
        :class="{ active: $route.name == 'watchlist' }"
      >
        Watchlist
      </router-link>
      <router-link
        to="/viewed/films"
        class="sidebar-link"
        :class="{ active: $route.name == 'viewed' }"
      >
        Viewed films
      </router-link>
      <router-link
        to="/login"
        v-if="!isLoginInHeader && !isAuth"
        class="sidebar-link"
      >
        Login
      </router-link>
      <router-link to="/profile" v-if="user" class="sidebar-link">
        {{ user.username }}
      </router-link>
    </nav>
  </aside>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      url: window.location.pathname,
    };
  },
  props: {
    isSidebarOpen: {
      type: Boolean,
    },
    isLoginInHeader: {
      type: Boolean,
    },
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.user.isAuth,
      user: (state) => state.user.user,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  min-width: 14em;
  height: 100vh;
  overflow: hidden;
  background-color: $primary-color;
  visibility: visible;
  border-right: 2px solid $text-color-disable;
  color: $text-color-active;
}
.sidebar-header {
  margin: 15px 8px 15px 16px;
  height: 80px;
  width: 80px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.logo {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: invert(33%) sepia(10%) saturate(159%) hue-rotate(201deg)
    brightness(92%) contrast(89%);
}
.sidebar-nav {
  position: fixed;
  //width: 13em;
  background-color: $primary-color;
  height: 100%;
  font-weight: 400;
  font-size: 1.2em;
  overflow: auto;
  padding-bottom: 6em;
  z-index: 9;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
.sidebar-link {
  padding: 10px 8px 20px 16px;
  text-decoration: none;
  font-size: $medium-font-size;
  color: $text-color-disable;
  display: block;
  &:hover {
    color: $text-color-active;
  }
}
.active {
  color: $text-color-active;
}
@media screen and (max-width: $large) {
  .sidebar {
    min-width: 12em;
  }
}
@media screen and (max-width: $medium) {
  .sidebar {
    position: fixed;
    z-index: 1;
    top: 0;
    left: -300px;
    height: 100vh;
    width: 100%;
    max-width: 12em;
    transition: 0.2s linear;
  }
  .sidebar.isActive {
    left: 0;
  }
}
</style>
