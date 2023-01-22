<template>
  <nav class="navbar">
    <div class="category-block">
      <div class="category active">
        <p class="category__name">Best</p>
      </div>
      <div class="category">
        <p @click="this.$emit('getPopularFilms')" class="category__name">
          Popular
        </p>
      </div>
      <div class="category">
        <p @click="this.$emit('getAwaitFilms')" class="category__name">Await</p>
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">By rating</button>
      <div class="dropdown-content">
        <a href="#">By release date</a>
        <a href="#">By rating</a>
        <a href="#">By number of ratings</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.category-block {
  display: flex;
}
.navbar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $text-color-disable;
}
.category {
  margin-right: 30px;
  vertical-align: middle;
  padding-bottom: 10px;
  vertical-align: middle;
  cursor: pointer;
  border-bottom: 1px solid $primary-color;
  &:hover {
    color: $text-color-active;
  }
}
.category__name {
  vertical-align: middle;
  font-weight: 400;
  font-size: $medium-font-size;
}
.active {
  border-bottom: 1px solid $active-color;
  color: $text-color-active;
}
.dropbtn {
  margin-bottom: 10px;
  align-self: flex-end;
  background-color: $active-color;
  color: $text-color-active;
  font-size: 16px;
  height: 30px;
  border: none;
  width: 100px;
}
.dropdown {
  position: relative;
  display: inline-block;
  align-self: flex-end;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: $secondary-color;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    color: $text-color-disable;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: $primary-color;
      color: $text-color-active;
    }
  }
}
.dropdown:hover .dropdown-content {
  display: block;
}
@media screen and (max-width: $small) {
  .category__name {
    font-size: $small-font-size;
  }
}
// .dropdown:hover .dropbtn {
//   background-color: #3e8e41;
// }
</style>
