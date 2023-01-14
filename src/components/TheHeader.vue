<template>
  <header class="navbar">
    <hamburger-button @isSidebarOpen="sidebarStatus" />
    <the-search />
  </header>
</template>

<script>
import TheSearch from "@/components/TheSearch.vue";
import HamburgerButton from "@/components/UI/HamburgerButton.vue";
export default {
  components: { TheSearch, HamburgerButton },
  methods: {
    sidebarStatus(status) {
      this.$emit("isSidebarOpen", status);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.navbar {
  padding: $hight-margin;
  background-color: $primary-color;
  position: sticky;
  display: flex;
}
</style>
