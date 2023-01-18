<template>
  <form class="password-reset-page">
    <div class="reset-form">
      <header class="reset-header">
        <h1 class="reset-header__title">Forgot your password?</h1>
      </header>
      <div class="reset-fields">
        <p class="reset-fields__description">
          Enter the email address you use to sign in, and we’ll send you a link
          to reset your password.
        </p>
        <label class="email-header">Your email</label>
        <input type="text" class="email" />
      </div>
      <footer class="reset-footer">
        <my-button-2 class="reset-button">Send Link</my-button-2>
        <my-button-2
          @click="this.$router.push('/login')"
          class="reset-button red"
          >Cancel</my-button-2
        >
      </footer>
    </div>
  </form>
</template>

<script>
import MyButton2 from "@/components/UI/MyButton2.vue";
export default {
  components: { MyButton2 },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.password-reset-page {
  background-color: $primary-color;
  height: 100vh;
  color: $text-color-disable;
}
.reset-form {
  width: 35rem;
  margin: auto;
  padding-top: 100px;
  background-color: $primary-color;
}
.reset-header__title {
  font-size: $big-font-size;
  margin-bottom: $little-margin;
}
.reset-header__title {
  text-align: center;
}
.reset-fields {
  margin: $hight-margin 0;
}
.reset-fields__description {
  font-size: $small-font-size;
  padding-bottom: $medium-margin;
}
.email {
  width: 100%;
  margin: $little-margin 0;
  border-radius: 5px;
  padding: 15px 18px;
  box-sizing: border-box;
}
.reset-footer {
  margin-top: $hight-margin;
  display: flex;
  margin: 0 -$little-margin;
}
.reset-button {
  width: 100%;
  background-color: $active-color;
  margin: 0 $little-margin;
}
.red {
  background-color: $error-color;
}
@media screen and (max-width: $small) {
  .reset-form {
    width: 25rem;
  }
}
@media screen and (max-width: 450px) {
  .reset-form {
    width: 20rem;
  }
}
</style>
