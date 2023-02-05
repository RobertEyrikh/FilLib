<template>
  <nav class="vuewed-navbar">
    <router-link
      to="/viewed/films"
      class="vuewed-category"
      :class="{ active: $route.path == '/viewed/films' }"
    >
      <p class="vuewed-category__name">Films</p>
    </router-link>
    <router-link
      to="/viewed/statistics"
      class="vuewed-category"
      :class="{ active: $route.path == '/viewed/statistics' }"
    >
      <p class="vuewed-category__name">Statistics</p>
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.vuewed-navbar {
  display: flex;
  border-bottom: 1px solid $text-color-disable;
  margin-bottom: $extra-hight-margin;
}
.vuewed-category {
  text-decoration: none;
  color: $text-color-disable;
  margin-right: 30px;
  vertical-align: middle;
  padding-bottom: 10px;
  vertical-align: middle;
  cursor: pointer;
  border-bottom: 1px solid $primary-color;
  &:hover {
    color: $text-color-active;
  }
}
.vuewed-category__name {
  vertical-align: middle;
  font-weight: 400;
  font-size: $medium-font-size;
}
.active {
  border-bottom: 1px solid $active-color;
  color: $text-color-active;
}
</style>
