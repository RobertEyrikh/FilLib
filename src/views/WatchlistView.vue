<template>
  <div class="watchlist-view">
    <section class="watchlist">
      <router-link
        v-for="film in films"
        :key="film.id"
        :to="`/film/${film.id}`"
        class="film-wrapper"
      >
        <div class="watchlist__film">
          <div class="film__image-wrapper">
            <img class="image" :src="film.poster" />
          </div>
          <div class="film__description">
            <p class="film__description__name">{{ film.name }}</p>
            <p class="film__description__text">
              {{ film.year }} {{ film.genre }} {{ film.lengthF }}min
            </p>
            <div class="film__buttons-container">
              <button
                @click.prevent="deleteFilm(film.id)"
                class="watchlist-button"
              >
                <img
                  src="@/assets/icons/star.svg"
                  class="watchlist-image active"
                />
              </button>
              <button @click.prevent="openModal(film)" class="viewed-button">
                <img
                  src="@/assets/icons/eye.svg"
                  class="viewed-image"
                  :class="{ active: isViewedFilm(film.id) }"
                />
              </button>
            </div>
          </div>
        </div>
      </router-link>
      <viewed-modal
        :isModalOpen="isModalOpen"
        :film="selectedFilm"
        @close="isModalOpen = false"
      ></viewed-modal>
    </section>
  </div>
</template>

<script>
import ViewedModal from "@/components/ViewedModal.vue";
import { mapGetters } from "vuex";
import { getFilmById } from "@/api/film";
export default {
  components: { ViewedModal },
  data() {
    return {
      films: [],
      selectedFilm: {},
      isModalOpen: false,
    };
  },
  methods: {
    isViewedFilm(id) {
      return this.viewedFilms?.find((elem) => elem == id);
    },
    deleteFilm(id) {
      this.$store.dispatch("deleteFilmFromWatchlist", id);
    },
    getWatchlistFilmsData() {
      this.films = [];
      for (let filmId of this.watchlistFilms) {
        getFilmById(filmId, (response) => {
          let film = {
            id: filmId,
            poster: response.posterUrl,
            name: response.nameOriginal ?? response.nameRu,
            year: response.year,
            genre: response.genres[0]?.genre,
            lengthF: response.filmLength,
          };
          this.films.push(film);
        });
      }
    },
    openModal(film) {
      if (this.watchlistFilms) {
        if (this.viewedFilms.find((el) => el == film.id)) {
          this.$router.push("/viewed/films");
        } else {
          this.isModalOpen = true;
          this.selectedFilm = film;
        }
      } else {
        this.$router.push("/login");
      }
    },
  },
  computed: {
    ...mapGetters(["viewedFilms", "watchlistFilms"]),
  },
  watch: {
    watchlistFilms() {
      this.getWatchlistFilmsData();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.watchlist-view {
  background-color: $primary-color;
  min-height: 100vh;
  height: auto;
  padding: $hight-margin;
  color: $text-color-disable;
}
.watchlist {
  display: grid;
  grid-column-gap: $hight-margin;
  grid-row-gap: $hight-margin;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.film-wrapper {
  text-decoration: none;
  color: $text-color-disable;
}
.watchlist__film {
  border-radius: 10px;
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
  font-size: $small-font-size;
}
.film__description__text {
  margin: 10px 0;
}
.active {
  filter: invert(24%) sepia(70%) saturate(3932%) hue-rotate(232deg)
    brightness(100%) contrast(97%);
}
</style>
