<template>
  <div class="not-auth-page">
    <div>
      <p class="login-container__title">Please login to add movies</p>
      <my-button-2
        @click="this.$router.push('/login')"
        class="login-container__button"
        >Log in</my-button-2
      >
    </div>
  </div>
</template>

<script>
import MyButton2 from "@/components/UI/MyButton2.vue";
export default {
  components: { MyButton2 },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.not-auth-page {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: $primary-color;
  padding: $hight-margin;
  color: $text-color-active;
}
.login-container__title {
  height: 50px;
}
.login-container__button {
  width: 100%;
  background-color: $active-color;
}
</style>
