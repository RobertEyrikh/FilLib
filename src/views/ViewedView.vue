<template>
  <div class="viewed-view">
    <vuewed-navbar></vuewed-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import VuewedNavbar from "@/components/VuewedNavbar.vue";
export default {
  components: { VuewedNavbar },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.viewed-view {
  background-color: $primary-color;
  height: auto;
  min-height: 100vh;
  padding: $hight-margin;
  color: $text-color-disable;
}
</style>
