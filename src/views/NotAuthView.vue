<template>
  <div class="backdrop">
    <div class="login-container">
      <p class="login-container__title">To add movies please login</p>
      <my-button-2
        @click="this.$router.push('/login')"
        class="login-container__button"
        >Log in</my-button-2
      >
    </div>
    <div class="blur">
      <div class="content-wrapper">
        <div class="content"></div>
        <div class="content"></div>
        <div class="content"></div>
      </div>
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
.backdrop {
  height: auto;
  min-height: 100vh;
  background-color: $primary-color;
  padding: $hight-margin;
  position: relative;
  color: $text-color-active;
}
.login-container {
  padding: $hight-margin;
  border-radius: 10px;
  height: 100px;
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 1;
  background-color: $tertiary-color;
}
.login-container__title {
  height: 50px;
}
.login-container__button {
  width: 100%;
  background-color: $active-color;
}
.blur {
  filter: blur(4px);
  z-index: 2;
}
.content-wrapper {
  display: grid;
  grid-column-gap: $hight-margin;
  grid-row-gap: $hight-margin;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.content {
  height: 300px;
  border-radius: 10px;
  background-color: $secondary-color;
}
</style>
