<template>
  <div>{{ viewedFilmsData }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["viewedFilmsData"]),
  },
};
</script>

<style></style>
