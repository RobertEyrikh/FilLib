<template>
  <div class="viewed-view">
    <vuewed-navbar></vuewed-navbar>
    <p class="film-year">2022</p>
    <section class="viewed">
      <router-link
        :to="`/film/${film.id}`"
        v-for="film in films"
        :key="film.id"
        class="film-wrapper"
      >
        <div class="viewed__film">
          <div class="film__image-wrapper">
            <img class="image" :src="`${film.poster}`" />
          </div>
          <div class="film__description">
            <p class="film__description__name">{{ film.name }}</p>
            <p class="film__description__rating">
              My film score: {{ film.rate }}
            </p>
            <p class="film__description__text">{{ film.description }}</p>
            <div class="film__buttons-container">
              <my-button-2 class="change-button"> Change </my-button-2>
              <my-button-2
                class="delete-button"
                @click.stop.prevent="deleteFilm(film.id)"
              >
                Delete
              </my-button-2>
            </div>
          </div>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MyButton2 from "@/components/UI/MyButton2.vue";
import VuewedNavbar from "@/components/VuewedNavbar.vue";
import { getFilmById } from "@/api/film";
export default {
  components: { VuewedNavbar, MyButton2 },
  data() {
    return {
      films: [],
    };
  },
  methods: {
    deleteFilm(id) {
      this.$store.dispatch("deleteFilmFromViewed", id);
    },
    getViewedFilmData() {
      for (let filmData of this.viewedFilmsData) {
        let film = {
          date: filmData.date,
          description: filmData.description,
          id: filmData.filmId,
          rate: filmData.rate,
          poster: "",
          name: "",
        };
        getFilmById(film.id, (filmData) => {
          filmData.nameOriginal
            ? (film.name = filmData.nameOriginal)
            : (film.name = filmData.nameRu);
          film.poster = filmData.posterUrlPreview;
          this.films.push(film);
        });
      }
    },
  },
  computed: {
    ...mapGetters(["viewedFilmsData"]),
  },
  watch: {
    viewedFilmsData() {
      this.getViewedFilmData();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.viewed-view {
  background-color: $primary-color;
  height: auto;
  min-height: 100vh;
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.film-wrapper {
  text-decoration: none;
  color: $text-color-disable;
}
.viewed__film {
  border-radius: 10px;
  height: 420px;
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
.film__description__name {
  color: $text-color-active;
}
.film__description__text {
  height: 80px;
  margin: $little-margin 0;
}
.film__description__rating {
  color: $active-color;
  font-size: $medium-font-size;
  margin: $little-margin 0;
}
.film__buttons-container {
  display: flex;
  justify-content: space-between;
}
.change-button {
  background-color: $active-color;
}
.delete-button {
  background-color: $error-color;
}
</style>
