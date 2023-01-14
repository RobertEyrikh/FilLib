<template>
  <main-layout>
    <section class="films-block">
      <div>Hello World</div>
    </section>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
export default {
  components: { MainLayout },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.films-block {
  height: 1000px;
  width: auto;
  background-color: $primary-color;
  padding: $hight-margin;
}
</style>
