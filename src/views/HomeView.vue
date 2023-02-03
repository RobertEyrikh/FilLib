<template>
  <div class="home-view">
    <the-navbar
      :category="category"
      @changeCategory="changeCategory"
    ></the-navbar>
    <section class="films-list">
      <ul>
        <router-link
          :to="`/film/${film.id}`"
          v-for="(film, index) in films"
          :key="film.name"
          class="film-container"
        >
          <div class="film-left-side">
            <p class="number">{{ (page - 1) * 20 + index + 1 }}</p>
            <div class="image-wrapper">
              <img :src="film.posterUrlPreview" class="film-image" />
            </div>
            <div class="film-description">
              <h1 class="film-description__title">{{ film.name }}</h1>
              <p class="film-description__release">
                {{ film.year }}, {{ film.length }} min
              </p>
              <p class="film-description__country">{{ film.country ?? "-" }}</p>
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
              <viewed-button
                @click.prevent="openModal({ name: film.name, id: film.id })"
              ></viewed-button>
            </div>
          </div>
        </router-link>
        <viewed-modal
          :isModalOpen="isModalOpen"
          :film="selectedFilm"
          @close="isModalOpen = false"
        ></viewed-modal>
      </ul>
    </section>
    <the-pagination
      v-if="pagesCount > 1"
      @page-changed="changePage"
      :pagesCount="pagesCount"
      :currentPage="page"
      class="the-pagination"
    ></the-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ViewedModal from "@/components/ViewedModal.vue";
import ViewedButton from "@/components/UI/ViewedButton.vue";
import ThePagination from "@/components/ThePagination.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import { getFilmsFromApi, getFilmsByKeyword } from "@/api/getFilms";
export default {
  components: { TheNavbar, ThePagination, ViewedButton, ViewedModal },
  data() {
    return {
      isModalOpen: false,
      films: [],
      pagesCount: 0,
      page: 1,
      category: "best",
      searchQuery: "",
      selectedFilm: {},
    };
  },
  props: {
    queryString: {
      type: String,
    },
  },
  created() {
    let windowData = Object.fromEntries(
      new URL(window.location.href).searchParams.entries()
    );
    if (windowData.category) {
      this.category = windowData.category;
    }
    if (windowData.page) {
      this.page = +windowData.page;
    }
    if (windowData.search) {
      this.searchQuery = windowData.search;
      this.getSearchedFilms();
    } else {
      this.getFilms();
    }
  },
  methods: {
    openModal(film) {
      this.isModalOpen = true;
      this.selectedFilm = film;
    },
    changeViewedList() {
      console.log(this.viewidFilms);
    },
    getFilms() {
      getFilmsFromApi(this.category, this.page, (filmsData) => {
        this.addFilms(filmsData);
      });
    },
    getSearchedFilms() {
      //this.searchQuery = this.queryString;
      this.films = [];
      this.category = "";
      getFilmsByKeyword(this.searchQuery, this.page, (filmsData) => {
        this.addFilms(filmsData);
      });
    },
    changeCategory(category) {
      this.searchQuery = "";
      this.page = 1;
      this.category = category;
      this.films = [];
      this.getFilms();
    },
    changePage(page) {
      this.page = page;
      this.films = [];
      if (this.queryString.length != 0) {
        this.getSearchedFilms();
      } else {
        this.getFilms();
      }
    },
    addFilms(filmsData) {
      let films = filmsData.films;
      this.pagesCount = filmsData.pagesCount;
      films.forEach((filmData) => {
        let film = {
          name: filmData.nameEn ?? filmData.nameRu,
          length: filmData.filmLength,
          year: filmData.year,
          country: filmData.countries[0]?.country,
          genres: filmData.genres[0]?.genre,
          rating: filmData.rating !== null ? filmData.rating : "-",
          ratingVoteCount: filmData.ratingVoteCount,
          posterUrlPreview: filmData.posterUrlPreview,
          id: filmData.filmId,
        };
        this.films.push(film);
      });
    },
  },
  computed: {
    ...mapGetters(["viewidFilms"]),
    pageStateOptions() {
      return {
        category: this.category,
        page: this.page,
        searchQuery: this.searchQuery,
      };
    },
  },
  watch: {
    pageStateOptions(value) {
      window.history.replaceState(
        history.state,
        document.title,
        `${window.location.pathname}?category=${value.category}&search=${value.searchQuery}&page=${value.page}`
      );
    },
    queryString() {
      this.searchQuery = this.queryString;
      this.getSearchedFilms();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.home-view {
  overflow-x: hidden;
  min-height: 1000px;
  background-color: $primary-color;
  padding: $hight-margin;
  color: $text-color-disable;
}
.films-list {
  margin-top: $extra-hight-margin;
}
.film-container {
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: space-between;
  background-color: $tertiary-color;
  border-radius: 10px;
  height: 130px;
  padding: $little-margin;
  margin-bottom: $medium-margin;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: $secondary-color;
  }
}
.film-left-side,
.film-right-side {
  display: flex;
}
.film-left-side {
  max-width: 70%;
}
.number {
  font-size: $big-font-size;
  font-weight: 400;
  color: $text-color-active;
  width: 35px;
}
.image-wrapper {
  height: 108px;
  width: 72px;
  margin: 0 $medium-margin;
}
.film-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.film-description {
  min-width: 250px;
  max-width: 60%;
}
.film-description__title {
  font-size: $small-font-size;
  color: $text-color-active;
  margin-bottom: $little-margin;
}
.film-description__release {
  margin-bottom: $little-margin;
}
.grade {
  min-width: 60px;
  margin-left: $little-margin;
}
.grade__number {
  font-size: $big-font-size;
  color: $active-color;
}
.buttons-container {
  margin-left: $little-margin;
}
@media screen and (max-width: $small) {
  .image-wrapper {
    margin: 0 $little-margin 0 $little-margin;
  }
  .number {
    font-size: $small-font-size;
    width: 30px;
  }
  .film-description__title {
    font-size: $xs-font-size;
  }
  .film-description {
    font-size: $xs-font-size;
    min-width: 200px;
  }
  .watchlist-button,
  .viewed-button {
    height: 30px;
    width: 30px;
  }
}
</style>
<style lang="scss">
.watchlist-button,
.viewed-button {
  background-color: inherit;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  margin-right: 10px;
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
</style>
