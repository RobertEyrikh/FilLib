<template>
  <my-button2
    v-if="viewedFilmsData.length == 0"
    @click="this.$router.push('/')"
    class="home-button"
    >Add your first film</my-button2
  >
  <section class="viewed" v-for="(film, year) in films" :key="film.id">
    <p class="film-year">
      {{ year }}
    </p>
    <div
      v-for="(filmsData, month) in film"
      :key="month"
      class="film-container-with-month"
    >
      <p class="film-month">{{ month }}</p>
      <div class="films-container">
        <router-link
          v-for="filmData in filmsData"
          :key="filmData.id"
          class="film-wrapper"
          :to="`/film/${filmData.id}`"
        >
          <div class="viewed__film">
            <div class="film__image-wrapper">
              <img class="image" :src="`${filmData.poster}`" />
            </div>
            <div class="film__description">
              <p class="film__description__name">{{ filmData.name }}</p>
              <p class="film__description__rating">
                My film score: {{ filmData.rate }}
              </p>
              <p class="film__description__text">
                {{ filmData.description }}
              </p>
              <div class="film__buttons-container">
                <my-button-2
                  @click.stop.prevent="changeFilmReview(filmData)"
                  class="change-button"
                >
                  Change
                </my-button-2>
                <my-button-2
                  class="delete-button"
                  @click.stop.prevent="deleteFilm(filmData.id)"
                >
                  Delete
                </my-button-2>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <viewed-modal
      :modalTitle="modalTitle"
      :isModalOpen="isModalOpen"
      :film="selectedFilm"
      @close="isModalOpen = false"
    ></viewed-modal>
  </section>
</template>

<script>
import ViewedModal from "@/components/ViewedModal.vue";
import { mapGetters } from "vuex";
import MyButton2 from "@/components/UI/MyButton2.vue";
import { getFilmById } from "@/api/film";
import monthFromNumber from "@/helpers/month";
export default {
  components: { MyButton2, ViewedModal },
  data() {
    return {
      films: {},
      isModalOpen: false,
      selectedFilm: {},
      modalTitle: "Change the movie review",
    };
  },
  methods: {
    check() {
      console.log(this.viewedFilmsData);
    },
    changeFilmReview(film) {
      this.selectedFilm = film;
      this.isModalOpen = true;
    },
    deleteFilm(id) {
      this.$store.dispatch("deleteFilmFromViewed", id);
      this.films = {};
    },
    getViewedFilmData() {
      if (this.viewedFilmsData.length === 0) {
        return;
      }
      const dispalyFilms = this.films;
      function delayedGetData(films, index, dispalyFilms) {
        let filmData = films[index];

        let year = filmData.date.substr(0, 4);
        let month = monthFromNumber[filmData.date.substr(5, 2)];
        if (!Object.keys(dispalyFilms).includes(year)) {
          dispalyFilms[year] = {};
        }
        if (!Object.keys(dispalyFilms[year]).includes(month)) {
          dispalyFilms[year][month] = [];
        }
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
          dispalyFilms[year][month].push(film);
        });

        if (index >= films.length - 1) {
          return;
        } else {
          setTimeout(function () {
            delayedGetData(films, index + 1, dispalyFilms);
          }, 200);
        }
      }
      delayedGetData(this.viewedFilmsData, 0, dispalyFilms);
      //   for (let filmData of this.viewedFilmsData) {
      //     let year = filmData.date.substr(0, 4);
      //     let month = monthFromNumber[filmData.date.substr(5, 2)];
      //     if (!Object.keys(this.films).includes(year)) {
      //       this.films[year] = {};
      //     }
      //     if (!Object.keys(this.films[year]).includes(month)) {
      //       this.films[year][month] = [];
      //     }
      //     let film = {
      //       date: filmData.date,
      //       description: filmData.description,
      //       id: filmData.filmId,
      //       rate: filmData.rate,
      //       poster: "",
      //       name: "",
      //     };
      //     getFilmById(film.id, (filmData) => {
      //       filmData.nameOriginal
      //         ? (film.name = filmData.nameOriginal)
      //         : (film.name = filmData.nameRu);
      //       film.poster = filmData.posterUrlPreview;
      //       this.films[year][month].push(film);
      //     });
      //   }
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
.home-button {
  background-color: $active-color;
}
.film-year {
  position: sticky;
  top: -1px;
  font-size: $medium-font-size;
  color: $text-color-active;
  padding-bottom: $medium-margin;
  background-color: $primary-color;
}
.film-month {
  position: sticky;
  top: 40px;
  background-color: $primary-color;
  font-size: $small-font-size;
  color: $text-color-active;
}
.film-container-with-month {
  margin-bottom: $extra-hight-margin;
}
.viewed {
  grid-column-gap: $hight-margin;
  grid-row-gap: $hight-margin;
}
.films-container {
  margin-top: $medium-margin;
  display: grid;
  grid-column-gap: $medium-margin;
  grid-row-gap: $medium-margin;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.film-wrapper {
  text-decoration: none;
  color: $text-color-disable;
}
.viewed__film {
  border-radius: 10px;
  height: 450px;
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
  height: 40px;
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
