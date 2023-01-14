<template>
  <aside class="sidebar" :class="{ isActive: isSidebarOpen }">
    <header class="sidebar-header">
      <img class="logo" src="@/assets/icons/logo.svg" />
    </header>
    <!-- <header class="sidebar-header">Menu</header> -->
    <nav class="sidebar-nav">
      <a href="#" class="sidebar-link"> Home </a>
      <a href="#" class="sidebar-link"> Watchlist </a>
      <a href="#" class="sidebar-link"> Viewed films </a>
    </nav>
  </aside>
</template>

<script>
export default {
  props: {
    isSidebarOpen: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 17em;
  height: 100vh;
  top: 0;
  overflow: hidden;
  background-color: $primary-color;
  visibility: visible;
  border-right: 2px solid $text-color-disable;
  color: $text-color-active;

  // .sidebar-header {
  //   width: 100%;
  //   display: block;
  //   padding: 0.75em 1em;
  // }
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
@media screen and (max-width: $large) {
  .sidebar {
    max-width: 11em;
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
    max-width: 11em;
    transition: 0.2s linear;
  }
  .sidebar.isActive {
    left: 0;
  }
}
</style>
