<template>
  <form class="login-page">
    <div class="login-form">
      <header class="login-header">
        <h1 @click="this.$router.push('/')" class="login-header__title">
          Fillib ID
        </h1>
        <p class="login-header__description">
          Sign in to a <strong>Fillib</strong> account
        </p>
      </header>
      <div class="login-fields">
        <label class="email-header">Your email</label>
        <input
          v-model="email"
          @input="emailError = ''"
          @keyup.enter.prevent="signIn"
          type="text"
          class="email"
        />
        <div class="error">
          <label class="error-message">{{ emailError }}</label>
        </div>
        <label class="password-header">Your password</label>
        <input
          v-model="password"
          @keyup.enter.prevent="signIn"
          @input="passwordError = ''"
          type="password"
          class="password"
        />
        <div class="error">
          <label class="error-message">{{ passwordError }}</label>
        </div>
      </div>
      <footer class="login-footer">
        <transition name="fade">
          <response-message class="auth-error" v-if="message">{{
            message
          }}</response-message>
        </transition>
        <my-button-2 @click.prevent="signIn" class="login-button"
          >Sign in</my-button-2
        >
        <div class="login-footer__link">
          <router-link to="/register" class="link">Registration</router-link>
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
import ResponseMessage from "@/components/UI/ResponseMessage.vue";
import { mapState } from "vuex";
export default {
  components: { MyButton2, ResponseMessage },
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    signIn() {
      if (this.email && this.password) {
        let user = {
          email: this.email.toLowerCase(),
          password: this.password,
        };
        this.$store.dispatch("authorizationByEmail", user);
        setTimeout(() => {
          if (!this.message) {
            this.$router.push("/");
            this.email = "";
            this.password = "";
          }
        }, "2000");
      }
      if (!this.email) {
        this.emailError = "Enter email";
      }
      if (!this.password) {
        this.passwordError = "Enter password";
      }
    },
  },
  computed: {
    ...mapState({
      message: (state) => state.user.authResponse,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.login-page {
  background-color: $primary-color;
  min-height: 100vh;
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
  cursor: pointer;
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

// .line {
//   text-align: center;
//   position: relative;
//   font-size: $medium-font-size;
// }
// .line__or {
//   background-color: $primary-color;
//   font-size: $medium-font-size;
//   position: relative;
//   z-index: 1;
//   padding: 0px $little-margin;
// }
// .line:after {
//   content: "";
//   display: block;
//   width: 100%;
//   height: 1px;
//   background-color: $text-color-disable;
//   position: absolute;
//   top: 50%;
//   margin-top: 20px;
//   z-index: 0;
// }

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
.auth-error {
  background-color: $error-color;
}
.link {
  text-decoration: none;
  color: $text-color-disable;
  &:hover {
    color: $text-color-active;
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
