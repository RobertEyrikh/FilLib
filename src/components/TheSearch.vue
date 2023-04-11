<template>
  <form class="search">
    <input
      v-model.trim="queryString"
      type="text"
      name="text"
      class="search-input"
      placeholder="Search film here!"
      @keyup.enter.prevent="getSearchedFilms"
    />
    <button
      @click.prevent="getSearchedFilms"
      type="submit"
      name="submit"
      class="submit"
      value="Search"
    >
      <img class="submit-image" src="@/assets/icons/search.svg" />
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      queryString: "",
      films: [],
    };
  },
  methods: {
    getSearchedFilms() {
      this.$emit("query-string", this.queryString);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.search {
  width: 75%;
  position: relative;
  display: flex;
}

.search-input {
  background-color: $primary-color;
  width: 100%;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: $text-color-disable;
}

.search-input:focus {
  color: $text-color-active;
}

.submit {
  width: 40px;
  height: 32px;
  background: $active-color;
  text-align: center;
  color: $text-color-active;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
.submit-image {
  object-fit: cover;
  width: 90%;
  height: 100%;
  filter: invert(33%) sepia(10%) saturate(159%) hue-rotate(201deg)
    brightness(92%) contrast(89%);
  transition: all linear 0.2s;
  &:hover {
    filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(298deg)
      brightness(104%) contrast(101%);
  }
}
@media screen and (max-width: $small) {
  // .search {
  //   width: 250px;
  // }
  // .search-input {
  //   width: 50%;
  // }
}
</style>
