<template>
  <form class="password-change-page">
    <div class="change-form">
      <header class="change-header">
        <h1 class="change-header__title">Reset your password</h1>
      </header>
      <div class="change-fields">
        <p class="change-fields__description">
          Set a new password to sign in with the email adress
          <strong>{{ this.email }}</strong>
        </p>
        <label class="email-header">New password</label>
        <input type="text" class="email" />
        <div class="error">
          <label v-if="true" class="error-message">Error</label>
        </div>
        <label class="email-header">Confirm password</label>
        <input type="text" class="email" />
        <div class="error">
          <label v-if="false" class="error-message">Error</label>
        </div>
      </div>
      <footer class="change-footer">
        <my-button-2 class="change-button">Reset password</my-button-2>
      </footer>
    </div>
  </form>
</template>

<script>
import MyButton2 from "@/components/UI/MyButton2.vue";
export default {
  components: { MyButton2 },
  data() {
    return {
      email: "Test@gmail.com",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.password-change-page {
  background-color: $primary-color;
  height: 100vh;
  color: $text-color-disable;
}
.change-form {
  width: 35rem;
  margin: auto;
  padding-top: 100px;
  background-color: $primary-color;
}
.change-header__title {
  font-size: $big-font-size;
  margin-bottom: $little-margin;
}
.change-header__title {
  text-align: center;
}
.change-fields {
  margin: $hight-margin 0;
}
.change-fields__description {
  font-size: $small-font-size;
  padding-bottom: $medium-margin;
  strong {
    font-weight: 600;
  }
}
.email {
  width: 100%;
  margin: $little-margin 0;
  border-radius: 5px;
  padding: 15px 18px;
  box-sizing: border-box;
}
.change-footer {
  margin-top: $hight-margin;
  display: flex;
  margin: 0 -$little-margin;
}
.change-button {
  width: 100%;
  background-color: $active-color;
  margin: 0 $little-margin;
}
.error {
  height: 30px;
}
.error-message {
  color: $error-color;
  font-size: $xs-font-size;
}
@media screen and (max-width: $small) {
  .change-form {
    width: 25rem;
  }
}
@media screen and (max-width: 450px) {
  .change-form {
    width: 20rem;
  }
}
</style>
