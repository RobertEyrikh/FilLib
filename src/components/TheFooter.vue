<template>
  <footer class="footer">
    <div class="social-media">
      <div class="icon-wrapper">
        <img class="icon icon-scale" src="@/assets/icons/linkedin.svg" />
      </div>
      <div class="icon-wrapper">
        <img class="icon" src="@/assets/icons/instagram.svg" />
      </div>
      <div class="icon-wrapper">
        <img class="icon icon-scale" src="@/assets/icons/twitter.svg" />
      </div>
      <div class="icon-wrapper">
        <img class="icon icon-scale" src="@/assets/icons/facebook.svg" />
      </div>
    </div>
    <p class="rights">
      &copy; Copyright 2023 Eyrikh Productions all rights reserved
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.footer {
  background-color: $secondary-color;
}
.icon-wrapper {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  transition: all linear 0.2s;
  margin: 0 $little-margin;
  &:hover {
    background-color: $text-color-disable;
  }
}
.social-media {
  display: flex;
  justify-content: center;
  padding: $hight-margin 0;
}
.icon {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: invert(99%) sepia(98%) saturate(0%) hue-rotate(41deg) brightness(104%)
    contrast(101%);
}
.icon-scale {
  scale: 0.7;
}
.rights {
  font-size: $xs-font-size;
  text-align: center;
  padding-bottom: $medium-margin;
}
</style>
