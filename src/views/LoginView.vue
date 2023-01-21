<template>
  <form class="login-page">
    <div class="login-form">
      <header class="login-header">
        <h1 class="login-header__title">Eyrikh Productions ID</h1>
        <p class="login-header__description">
          Sign in to a <strong>Eyrikh Productions</strong> account
        </p>
        <my-button-2 class="google-button">Sign in with Google</my-button-2>
      </header>
      <p class="line"><span class="line__or">or</span></p>
      <div class="login-fields">
        <label class="email-header">Your email</label>
        <input type="text" class="email" />
        <div class="error">
          <label v-if="false" class="error-message">Error</label>
        </div>
        <label class="password-header">Your password</label>
        <input type="password" class="password" />
        <div class="error">
          <label v-if="false" class="error-message">Error</label>
        </div>
      </div>
      <footer class="login-footer">
        <my-button-2 class="login-button">Sign in</my-button-2>
        <div class="login-footer__link">
          <router-link to="/register" class="link">Register</router-link>
          <router-link to="/password_reset" class="link"
            >Forgot your password?</router-link
          >
        </div>
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
.login-page {
  background-color: $primary-color;
  height: 100%;
  color: $text-color-disable;
}
.login-form {
  width: 35rem;
  margin: auto;
  padding-top: 100px;
  background-color: $primary-color;
  padding-bottom: 150px;
}
.login-header__title {
  font-size: $big-font-size;
  margin-bottom: $little-margin;
}
.login-header__description {
  font-size: $small-font-size;
  strong {
    font-weight: 600;
  }
}
.login-header__title,
.login-header__description {
  text-align: center;
}
.google-button {
  margin: $hight-margin 0;
  width: 100%;
  background-color: $green-color;
}

.line {
  text-align: center;
  position: relative;
}
.line__or {
  background-color: $primary-color;
  font-size: $medium-font-size;
  position: relative;
  z-index: 1;
  padding: 0px $little-margin;
}
.line:after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: $text-color-disable;
  position: absolute;
  top: 50%;
  margin-top: -1px;
  z-index: 0;
}

.login-fields {
  margin: $hight-margin 0;
}
.email,
.password {
  width: 100%;
  margin: $little-margin 0;
  border-radius: 5px;
  padding: 15px 18px;
  box-sizing: border-box;
}
.error {
  height: 30px;
}
.error-message {
  color: $error-color;
  font-size: $xs-font-size;
}
.login-footer {
  margin-top: $hight-margin;
}
.login-button {
  width: 100%;
  background-color: $active-color;
}
.login-footer__link {
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
}
.link {
  text-decoration: none;
  color: $text-color-disable;
  &:hover {
    color: $text-color-active;
  }
}
@media screen and (max-width: $small) {
  .login-form {
    width: 25rem;
  }
}
@media screen and (max-width: 450px) {
  .login-form {
    width: 20rem;
  }
}
</style>
