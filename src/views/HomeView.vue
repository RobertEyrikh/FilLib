<template>
  <main-layout>
    <div class="home-view">
      <the-navbar></the-navbar>
      <section class="films-list">
        <ul>
          <li
            v-for="(film, index) in films"
            :key="film.name"
            class="film-container"
          >
            <div class="film-left-side">
              <p class="number">{{ index + 1 }}</p>
              <div class="image-wrapper">
                <img :src="film.posterUrlPreview" class="film-image" />
              </div>
              <div class="film-description">
                <h1 class="film-description__title">{{ film.name }}</h1>
                <p class="film-description__release">
                  {{ film.year }}, {{ film.length }} min
                </p>
                <p class="film-description__country">{{ film.country }}</p>
                <p class="film-description__categories">{{ film.genres }}</p>
              </div>
            </div>
            <div class="film-right-side">
              <div class="grade">
                <p class="grade__number">{{ film.rating }}</p>
                <p class="grade__quantity">{{ film.ratingVoteCount }}</p>
              </div>
              <div class="buttons-container">
                <button class="watchlist-button">
                  <img src="@/assets/icons/star.svg" class="watchlist-image" />
                </button>
                <button @click="check" class="viewed-button">
                  <img src="@/assets/icons/eye.svg" class="viewed-image" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import { getFilms } from "@/api/getFilms";
export default {
  components: { MainLayout, TheNavbar },
  data() {
    return {
      films: [
        {
          name: "Back to the moon",
          length: "135",
          year: "2020",
          country: "USA",
          genres: "dram biography",
          rating: "8.6",
          ratingVoteCount: "38670",
          posterUrlPreview:
            "https://kinopoiskapiunofficial.tech/images/posters/kp_small/649917.jpg",
        },
        {
          name: "Hellboy",
          length: "120",
          year: "2014",
          country: "Britain",
          genres: "dram biography",
          rating: "7.5",
          ratingVoteCount: "295940",
          posterUrlPreview:
            "https://kinopoiskapiunofficial.tech/images/posters/kp_small/688.jpg",
        },
        {
          name: "Back to the future",
          length: "189",
          year: "2019",
          country: "USA",
          genres: "dram biography",
          rating: "8.4",
          ratingVoteCount: "395940",
          posterUrlPreview:
            "https://kinopoiskapiunofficial.tech/images/posters/kp_small/444.jpg",
        },
      ],
    };
  },
  created() {
    getFilms();
  },
  methods: {
    check() {
      console.log(getFilms());
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.home-view {
  overflow-x: hidden;
  min-height: 1000px;
  width: auto;
  background-color: $primary-color;
  padding: $hight-margin;
  color: $text-color-disable;
}
.films-list {
  margin-top: $extra-hight-margin;
}
.film-container {
  display: flex;
  justify-content: space-between;
  background-color: $tertiary-color;
  border-radius: 10px;
  padding: $little-margin;
  margin-bottom: $medium-margin;
}
.film-left-side,
.film-right-side {
  display: flex;
}
.number {
  font-size: $big-font-size;
  font-weight: 400;
  color: $text-color-active;
}
.image-wrapper {
  height: 108px;
  width: 72px;
  margin: 0 $medium-margin 0 $hight-margin;
}
.film-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.film-description {
  min-width: 250px;
}
.film-description__title {
  font-size: $medium-font-size;
  color: $text-color-active;
}
.film-description__release {
  margin-bottom: $little-margin;
}
.grade {
  min-width: 60px;
}
.grade__number {
  font-size: $big-font-size;
  color: $active-color;
}
.buttons-container {
  margin-left: $little-margin;
}
.watchlist-button,
.viewed-button {
  background-color: inherit;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-left: $little-margin;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #535357;
    scale: 1.1;
  }
}
.watchlist-image,
.viewed-image {
  border-radius: 100%;
  object-fit: cover;
  width: 100%;
  height: 100%;
  scale: 0.8;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(162deg)
    brightness(104%) contrast(104%);
}
@media screen and (max-width: $small) {
  .image-wrapper {
    margin: 0 $little-margin 0 $little-margin;
  }
  .number {
    font-size: $small-font-size;
  }
  .film-description__title {
    font-size: $small-font-size;
  }
  .film-description {
    min-width: 200px;
  }
  .watchlist-button,
  .viewed-button {
    height: 30px;
    width: 30px;
  }
}
</style>
