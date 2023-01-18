<template>
  <header class="navbar">
    <the-search />
    <hamburger-button class="hamburger-button" @isSidebarOpen="sidebarStatus" />
    <my-button @click="this.$router.push('/login')" v-if="isLoginInHeader"
      >Login</my-button
    >
  </header>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import TheSearch from "@/components/TheSearch.vue";
import HamburgerButton from "@/components/UI/HamburgerButton.vue";
export default {
  components: { TheSearch, HamburgerButton, MyButton },
  data() {
    return {
      isLoginInHeader: false,
    };
  },
  methods: {
    sidebarStatus(status) {
      this.$emit("isSidebarOpen", status);
    },
    onLoginVisible() {
      if (window.innerWidth > 768) {
        this.isLoginInHeader = true;
      } else this.isLoginInHeader = false;
      this.$emit("isLoginInHeader", this.isLoginInHeader);
    },
  },
  created() {
    this.onLoginVisible();
    window.addEventListener("resize", this.onLoginVisible);
  },

  beforeUnmount() {
    this.onLoginVisible();
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
