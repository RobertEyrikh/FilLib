<template>
  <header class="navbar">
    <the-search />
    <hamburger-button class="hamburger-button" @isSidebarOpen="sidebarStatus" />
    <button v-if="isLoginVisible">Login</button>
  </header>
</template>

<script>
import TheSearch from "@/components/TheSearch.vue";
import HamburgerButton from "@/components/UI/HamburgerButton.vue";
export default {
  components: { TheSearch, HamburgerButton },
  data() {
    return {
      isLoginVisible: false,
    };
  },
  methods: {
    sidebarStatus(status) {
      this.$emit("isSidebarOpen", status);
    },
    onLoginVisible() {
      if (window.innerWidth > 768) {
        this.isLoginVisible = true;
      } else this.isLoginVisible = false;
    },
  },
  mounted() {
    window.addEventListener("resize", this.onLoginVisible);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onLoginVisible);
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
  justify-content: space-between;
}
</style>
