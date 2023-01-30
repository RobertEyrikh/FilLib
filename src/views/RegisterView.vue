<template>
  <form class="register-page">
    <div class="register-form">
      <header class="register-header">
        <h1 class="register-header__title">Eyrikh Productions ID</h1>
        <p class="register-header__description">
          Register <strong>Eyrikh Productions</strong> account
        </p>
      </header>
      <div class="register-fields">
        <div class="register-fields__field">
          <label class="name-header">Your name</label>
          <input v-model="username" type="text" class="name" />
          <div class="error">
            <label v-if="true" class="error-message">Error</label>
          </div>
        </div>
        <div class="register-fields__field">
          <label class="email-header">Your email</label>
          <input v-model="email" type="text" class="email" />
          <div class="error">
            <label v-if="false" class="error-message">Error</label>
          </div>
        </div>
        <div class="register-fields__field">
          <label class="password-header">Your password</label>
          <input v-model="password" type="password" class="password" />
          <div class="error">
            <label v-if="false" class="error-message">Error</label>
          </div>
        </div>
        <div class="register-fields__field">
          <label class="confirm-password-header">Confirm your password</label>
          <input type="password" class="confirm-password" />
          <div class="error">
            <label v-if="true" class="error-message"
              >Passwords do not match</label
            >
          </div>
        </div>
      </div>
      <footer class="register-footer">
        <div>hello</div>
        <my-button-2 @click.prevent="registration" class="register-button"
          >Register</my-button-2
        >
        <div class="register-footer__link">
          <p class="terms-links">
            By creating an account, you agree to the Eyrikh Productions
            <router-link to="/" class="link">Terms of service</router-link>
            and
            <router-link to="/" class="link">Privacy policy</router-link>
          </p>
          <p class="sign-in-link">
            Already a customer?
            <router-link to="/login" class="link">Sign in</router-link>
          </p>
        </div>
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
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registration() {
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("registration", user);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.register-page {
  background-color: $primary-color;
  height: auto;
  color: $text-color-disable;
  padding-bottom: 150px;
}
.register-form {
  width: 35rem;
  margin: auto;
  padding-top: 100px;
  background-color: $primary-color;
}
.register-header__title {
  font-size: $big-font-size;
  margin-bottom: $little-margin;
}
.register-header__description {
  font-size: $small-font-size;
  strong {
    font-weight: 600;
  }
}
.register-header__title,
.register-header__description {
  text-align: center;
}
.register-fields {
  margin: $hight-margin 0;
}
.email,
.name,
.password,
.confirm-password {
  width: 100%;
  margin-top: $little-margin;
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
.register-footer {
  margin-top: $hight-margin;
}
.register-button {
  width: 100%;
  background-color: $active-color;
}
.register-footer__link {
  padding-top: 16px;
}
.terms-links {
  font-size: $xs-font-size;
  text-align: justify;
}
.sign-in-link {
  margin-top: $little-margin;
  text-align: center;
}
.link {
  border-bottom: 1px solid;
  text-decoration: none;
  color: $text-color-disable;
  &:hover {
    color: $text-color-active;
  }
}
@media screen and (max-width: $small) {
  .register-form {
    width: 25rem;
  }
}
@media screen and (max-width: 450px) {
  .register-form {
    width: 20rem;
  }
}
</style>
