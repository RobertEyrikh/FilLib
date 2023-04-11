<template>
  <form class="register-page">
    <div class="register-form">
      <header class="register-header">
        <h1 @click="this.$router.push('/')" class="register-header__title">
          Fillib ID
        </h1>
        <p class="register-header__description">
          Registration <strong>Fillib</strong> account
        </p>
      </header>
      <div class="register-fields">
        <div class="register-fields__field">
          <label class="name-header">Your name</label>
          <input
            @keyup.enter.prevent="registration"
            @input="usernameError = ''"
            v-model="username"
            type="text"
            class="name"
          />
          <div class="error">
            <label class="error-message">{{ usernameError }}</label>
          </div>
        </div>
        <div class="register-fields__field">
          <label class="email-header">Your email</label>
          <input
            @keyup.enter.prevent="registration"
            @input="emailError = ''"
            v-model="email"
            type="text"
            class="email"
          />
          <div class="error">
            <label class="error-message">{{ emailError }}</label>
          </div>
        </div>
        <div class="register-fields__field">
          <label class="password-header">Your password</label>
          <input
            @keyup.enter.prevent="registration"
            @input="passwordError = ''"
            v-model="password"
            type="password"
            class="password"
          />
          <div class="error">
            <label class="error-message">{{ passwordError }}</label>
          </div>
        </div>
        <div class="register-fields__field">
          <label class="confirm-password-header">Confirm your password</label>
          <input
            @keyup.enter.prevent="registration"
            v-model="repeatedPassword"
            @input="repeatedPasswordError = ''"
            type="password"
            class="confirm-password"
          />
          <div class="error">
            <label class="error-message">{{ repeatedPasswordError }}</label>
          </div>
        </div>
      </div>
      <footer class="register-footer">
        <transition name="fade">
          <response-message
            :class="{
              response_error: isResponseError,
              response_success: !isResponseError,
            }"
            v-if="isRegistrationResponse"
            >{{ message }}</response-message
          >
        </transition>
        <my-button-2 @click.prevent="registration" class="register-button"
          >Registration</my-button-2
        >
        <div class="register-footer__link">
          <p class="terms-links">
            By creating an account, you agree to the Fillib
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
import ResponseMessage from "@/components/UI/ResponseMessage.vue";
import { mapState } from "vuex";
export default {
  components: { MyButton2, ResponseMessage },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      repeatedPassword: "",
      usernameError: "",
      emailError: "",
      passwordError: "",
      repeatedPasswordError: "",
    };
  },
  methods: {
    registration() {
      const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      if (
        this.username.length > 1 &&
        this.email &&
        EMAIL_REGEXP.test(this.email) &&
        this.password.length > 4 &&
        this.password.length < 16 &&
        this.password === this.repeatedPassword
      ) {
        let user = {
          username: this.username,
          email: this.email.toLowerCase(),
          password: this.password,
        };
        this.$store.dispatch("registration", user);
        setTimeout(() => {
          if (this.$store.getters.regResponse.isSuccess) {
            this.$router.push("/login");
          }
        }, "3000");
      }
      if (this.username.length <= 1) {
        this.usernameError = "Username must contain at least 2 characters";
      }
      if (!this.email) {
        this.emailError = "Enter email";
      }
      if (!EMAIL_REGEXP.test(this.email)) {
        this.emailError = "Enter valid email";
      }
      if (!this.password) {
        this.passwordError = "Enter password";
      }
      if (!(this.password.length > 4 && this.password.length < 16)) {
        this.passwordError =
          "Password must be at least 4 and no more than 15 characters";
      }
      if (this.password != this.repeatedPassword) {
        this.repeatedPasswordError = "Passwords don't match";
      }
    },
  },
  computed: {
    ...mapState({
      message: (state) => state.user.regResponse.message,
    }),
    isRegistrationResponse() {
      return this.$store.getters.regResponse.isSuccess != undefined
        ? true
        : false;
    },
    isResponseError() {
      return this.$store.getters.regResponse.isSuccess ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.register-page {
  background-color: $primary-color;
  min-height: 100vh;
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
  cursor: pointer;
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
.response_error {
  background-color: $error-color;
}
.response_success {
  background-color: $green-color;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
