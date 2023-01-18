<template>
  <button class="my-button">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.my-button {
  text-decoration: none;
  background-color: inherit;
  color: $text-color-disable;
  cursor: pointer;
  transition: all linear 0.2s;
  &:hover {
    color: $text-color-active;
  }
}
</style>
