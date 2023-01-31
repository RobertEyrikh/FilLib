<template>
  <div class="response-message">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.response-message {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $text-color-active;
  border-radius: 5px;
  height: 55px;
  padding: $xs-margin $medium-margin;
  margin-bottom: $little-margin;
}
</style>
