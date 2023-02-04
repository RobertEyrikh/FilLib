<template>
  <div class="film-container">
    <section class="film-banner">
      <div class="film-specification">
        <h1 class="film-specification__title">
          {{ film.nameOriginal ?? film.nameRu }}
        </h1>
        <p class="film-specification__info">
          {{ film.year }} {{ film.genres }} {{ film.filmLength }} min
          {{ film.ratingAgeLimits }}
        </p>
        <p class="film-specification__slogan">{{ film.slogan }}</p>
        <div class="button_container">
          <button class="watchlist-button">
            <img src="@/assets/icons/star.svg" class="watchlist-image" />
          </button>
          <button @click.prevent="openModal()" class="viewed-button">
            <img
              src="@/assets/icons/eye.svg"
              :class="{ active: isViewedFilm(film.kinopoiskId) }"
              class="viewed-image"
            />
          </button>
        </div>
      </div>
      <div class="cover-wrapper">
        <img class="cover" :src="`${film.coverUrl ?? film.posterUrl}`" />
      </div>
    </section>
    <section class="film-description">
      <div class="film-description__text">
        <h1 class="information-title">Description</h1>
        {{ film.description }}
      </div>
      <div class="film-description__rating">
        <div class="imdb-rating">
          <p class="imdb-rating__title">IMDB</p>
          <p class="imdb-rating__number">{{ film.ratingImdb }}</p>
          <p class="imdb-rating__quantity">{{ film.ratingImdbVoteCount }}</p>
        </div>
        <div class="kp-rating">
          <p class="kp-rating__title">Kinopoisk</p>
          <p class="kp-rating__number">{{ film.ratingKinopoisk }}</p>
          <p class="kp-rating__quantity">
            {{ film.ratingKinopoiskVoteCount }}
          </p>
        </div>
      </div>
    </section>
    <section class="information">
      <h1 class="information-title">Information</h1>
      <div class="information-block">
        <p class="information-block__title">Country</p>
        <p class="information-block__description">{{ film.countries }}</p>
      </div>
      <div class="information-block">
        <p class="information-block__title">Genres</p>
        <p class="information-block__description">{{ film.genres }}</p>
      </div>
      <div class="information-block">
        <p class="information-block__title">Original name</p>
        <p class="information-block__description">
          {{ film.nameOriginal ?? film.nameRu }}
        </p>
      </div>
      <div class="information-block">
        <p class="information-block__title">Rating</p>
        <p class="information-block__description">
          {{ film.ratingAgeLimits }}
        </p>
      </div>
      <div class="information-block">
        <p class="information-block__title">Rating MPAA</p>
        <p class="information-block__description">
          {{ film.ratingMpaa ?? "-" }}
        </p>
      </div>
      <div class="information-block">
        <p class="information-block__title">Year</p>
        <p class="information-block__description">{{ film.year }}</p>
      </div>
    </section>
    <viewed-modal
      :isModalOpen="isModalOpen"
      :film="{ name: film.nameRu, id: id }"
      @close="isModalOpen = false"
    ></viewed-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ViewedModal from "@/components/ViewedModal.vue";
import { getCurrentFilmFromApi } from "@/api/getFilms";
export default {
  components: { ViewedModal },
  data() {
    return {
      isModalOpen: false,
      film: { coverUrl: "/" },
      id: this.$route.params["id"],
    };
  },
  created() {
    this.getFilms();
  },
  methods: {
    isViewedFilm(id) {
      return this.viewedFilms?.find((elem) => elem == id);
    },
    openModal() {
      if (this.viewedFilms.find((elem) => elem == this.id)) {
        this.$router.push("/viewed");
      } else {
        this.isModalOpen = true;
      }
    },
    getFilms() {
      getCurrentFilmFromApi(this.id, (filmData) => {
        this.addFilm(filmData);
      });
    },
    addFilm(filmData) {
      let film = filmData;
      let genres = "";
      let countries = "";
      film.genres.forEach((element) => {
        genres = genres + element.genre + " ";
      });
      film.countries.forEach((element) => {
        countries = countries + element.country + " ";
      });
      film.genres = genres;
      film.countries = countries;
      this.film = film;
    },
  },
  computed: {
    ...mapGetters(["viewedFilms"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.active {
  filter: invert(24%) sepia(70%) saturate(3932%) hue-rotate(232deg)
    brightness(100%) contrast(97%);
}
.film-container {
  overflow-x: hidden;
  background-color: $primary-color;
  color: $text-color-disable;
}
.film-banner {
  display: flex;
  background-color: $secondary-color;
}
.film-specification {
  padding: $hight-margin;
  // width: 50%;
  margin-top: auto;
  margin-bottom: auto;
}
.film-specification__title {
  font-size: $medium-font-size;
  color: $active-color;
  margin-bottom: $medium-margin;
}
.film-specification__info {
  width: 200%;
}
.film-specification__slogan {
  margin: $little-margin 0;
  color: $text-color-active;
}
.cover-wrapper {
  position: relative;
  //width: 70%;
  max-height: 500px;
}
.cover-wrapper:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  background-image: radial-gradient(
    at 80% 30%,
    transparent,
    $secondary-color 70%
  );
}
.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.film-description,
.information {
  padding: $hight-margin;
}
.film-description {
  display: flex;
  justify-content: space-between;
}
.film-description__text {
  width: 80%;
}
.imdb-rating {
  margin-bottom: $medium-margin;
}
.imdb-rating__title,
.kp-rating__title {
  color: $text-color-active;
  font-weight: 600;
}
.imdb-rating__number,
.kp-rating__number {
  color: $active-color;
  font-size: $small-font-size;
}
.information-title {
  color: $text-color-active;
  font-size: $medium-font-size;
  padding-bottom: $medium-margin;
  font-weight: 600;
}
.information-block {
  padding-bottom: $medium-margin;
}
.information-block__title {
  padding-bottom: $xs-margin;
}
.information-block__description {
  color: $text-color-active;
}
@media screen and (max-width: $large) {
  .film-banner {
    flex-flow: wrap;
  }
  .film-specification {
    order: 2;
  }
  .cover-wrapper {
    order: 1;
    width: 100%;
    height: 400px;
  }
  .film-specification {
    width: 100%;
  }
}
@media screen and (max-width: $small) {
  .cover-wrapper {
    height: 200px;
  }
  .film-description__text {
    width: 70%;
  }
}
</style>
