<template>
  <div class="pagination">
    <router-link v-for="i in pagesCount" :key="i" class="page-link" to="/">{{
      i
    }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    pagesCount: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.pagination {
  align-items: center;
  display: inline-block;
}
.page-link {
  font-size: $medium-font-size;
  color: $text-color-disable;
  float: left;
  padding: 6px 12px;
  text-decoration: none;
  transition: all 0.2s;
  &:hover:not(.active) {
    background-color: $active-color;
  }
}
.active {
  background-color: $active-color;
  color: $text-color-active;
}
@media screen and (max-width: $small) {
  .page-link {
    font-size: $small-font-size;
    padding: 4px 10px;
  }
}
</style>
