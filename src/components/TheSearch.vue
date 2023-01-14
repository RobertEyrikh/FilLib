<template>
  <form class="search">
    <input
      type="text"
      name="text"
      class="search-input"
      placeholder="Search here!"
    />
    <input type="submit" name="submit" class="submit" value="Search" />
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.search {
  width: 400px;
  margin: auto;
  height: 100px;
  // display: flex;
  // align-items: center;
}
.search-input,
.submit {
  padding: 4px 10px;
  border: 0;
  font-size: $small-font-size;
  background-color: inherit;
}
.search-input {
  width: 75%;
  transition: all 0.2s;
  color: $text-color-active;
  &:focus {
    background-color: $secondary-color;
  }
}
.submit {
  width: 75px;
  background-color: $active-color;
  color: $text-color-disable;
  transition: all 0.2s;
  &:hover {
    color: $text-color-active;
  }
}
</style>
