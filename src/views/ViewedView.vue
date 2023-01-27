<template>
  <div class="viewed-view">
    <vuewed-navbar></vuewed-navbar>
    <p class="film-year">2022</p>
    <section class="viewed">
      <router-link to="/" class="film-wrapper">
        <div class="viewed__film">
          <div class="film__image-wrapper">
            <img class="image" src="@/assets/film.png" />
          </div>
          <div class="film__description">
            <p class="film__description__text">2010 боевик 143min</p>
            <div class="film__buttons-container">
              <button class="viewed-button">
                <img src="@/assets/icons/star.svg" class="viewed-image" />
              </button>
              <button class="viewed-button">
                <img src="@/assets/icons/eye.svg" class="viewed-image" />
              </button>
            </div>
          </div>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
import VuewedNavbar from "@/components/VuewedNavbar.vue";
export default {
  components: { VuewedNavbar },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.viewed-view {
  background-color: $primary-color;
  height: auto;
  padding: $hight-margin;
  color: $text-color-disable;
}
.film-year {
  font-size: $medium-font-size;
  color: $text-color-active;
  margin-bottom: $hight-margin;
}
.viewed {
  display: grid;
  grid-column-gap: $hight-margin;
  grid-row-gap: $hight-margin;
  grid-template-columns: repeat(auto-fit, minmax(250px, 500px));
}
.film-wrapper {
  text-decoration: none;
  color: $text-color-disable;
}
.viewed__film {
  border-radius: 10px;
  height: 300px;
  background-color: $secondary-color;
}
.film__image-wrapper {
  height: 200px;
}
.image {
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.film__description {
  padding: $little-margin;
}
.film__description__text {
  margin: 10px 0;
}
</style>
