<template>
  <header class="navbar">
    <the-search @query-string="transferQueryString" />
    <hamburger-button class="hamburger-button" @isSidebarOpen="sidebarStatus" />
    <my-button
      @click="this.$router.push('/login')"
      v-if="isLoginInHeader && !isAuth"
      >Log in</my-button
    >
    <button v-if="false" @click="issAuth">is auth</button>
    <my-button @click="this.$router.push('/profile')" v-if="isAuth">{{
      user.username
    }}</my-button>
  </header>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import TheSearch from "@/components/TheSearch.vue";
import HamburgerButton from "@/components/UI/HamburgerButton.vue";
import { mapState } from "vuex";
export default {
  components: { TheSearch, HamburgerButton, MyButton },
  data() {
    return {
      isLoginInHeader: false,
      queryString: "",
    };
  },
  methods: {
    issAuth() {
      console.log(this.$store.state.user.user);
      console.log(this.$store.state.user.token);
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/home");
    },
    transferQueryString(query) {
      this.$emit("query-string", query);
    },
    sidebarStatus(status) {
      this.$emit("isSidebarOpen", status);
    },
    onLoginVisible() {
      if (window.innerWidth > 850) {
        this.isLoginInHeader = true;
      } else this.isLoginInHeader = false;
      this.$emit("isLoginInHeader", this.isLoginInHeader);
    },
  },
  computed: {
    ...mapState({
      isAuth: (state) => state.user.isAuth,
      user: (state) => state.user.user,
    }),
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
