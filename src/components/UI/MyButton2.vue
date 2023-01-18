<template>
  <button class="my-button-2">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.my-button-2 {
  border: none;
  border-radius: 5px;
  height: 45px;
  padding: 5px 20px 5px 20px;
  transition: all 0.2s;
  color: $text-color-active;
  cursor: pointer;
  &:hover {
    -webkit-filter: saturate(4);
  }
}
</style>
