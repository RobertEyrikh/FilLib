<template>
  <button class="viewed-button">
    <img src="@/assets/icons/eye.svg" class="viewed-image" />
  </button>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.viewed-button {
  background-color: inherit;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-right: 10px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #535357;
    scale: 1.1;
  }
}
.viewed-image {
  border-radius: 100%;
  object-fit: cover;
  width: 100%;
  height: 100%;
  scale: 0.8;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(162deg)
    brightness(104%) contrast(104%);
}

@media screen and (max-width: $small) {
  .viewed-button {
    height: 30px;
    width: 30px;
  }
}
</style>
