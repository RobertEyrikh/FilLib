<template>
  <section class="movies-qty">
    <h1 class="movies-qty__title">Movies wathed in:</h1>
    <div
      v-for="(film, year) in films"
      :key="film"
      class="movies-qty__container"
    >
      <p class="movies-qty__year">{{ year }}:</p>
      <p class="movies-qty__description">
        {{ getFilmsQty(film) }}
      </p>
    </div>
  </section>
  <section class="movies-grade">
    <h1 class="movies-grade__title">Average rating of watched films:</h1>
    <div class="movies-grade__description-container">
      <p class="movies-grade__description-title">Mine:</p>
      <p class="movies-grade__description">{{ averageRating }}</p>
    </div>
    <div class="movies-grade__description-container">
      <p class="movies-grade__description-title">Other viewers:</p>
      <p class="movies-grade__description">7.89</p>
    </div>
  </section>
</template>

<script>
import monthFromNumber from "@/helpers/month";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      films: {},
    };
  },
  methods: {
    getFilmsQty(filmYear) {
      let filmsQty = 0;
      console.log(this.$store.state.user.user);
      for (let filmMonth in filmYear) {
        filmsQty += filmYear[filmMonth].length;
      }
      return filmsQty;
    },
    sortFilmData() {
      for (let filmData of this.viewedFilmsData) {
        let year = filmData.date.substr(0, 4);
        let month = monthFromNumber[filmData.date.substr(5, 2)];
        if (!Object.keys(this.films).includes(year)) {
          this.films[year] = {};
        }
        if (!Object.keys(this.films[year]).includes(month)) {
          this.films[year][month] = [];
        }
        let film = {
          date: filmData.date,
          description: filmData.description,
          id: filmData.filmId,
          rate: filmData.rate,
        };
        this.films[year][month].push(film);
      }
    },
  },
  computed: {
    ...mapGetters(["viewedFilmsData"]),
    averageRating() {
      let acc = 0;
      for (let film of this.viewedFilmsData) {
        acc = acc + film.rate;
      }
      return (acc / Object.keys(this.viewedFilmsData).length).toFixed(2);
    },
  },
  watch: {
    viewedFilmsData() {
      this.sortFilmData();
      this.averageRating;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.movies-grade,
.movies-qty {
  margin-bottom: $extra-hight-margin;
}
.movies-grade__title,
.movies-qty__title {
  color: $text-color-active;
  font-size: $medium-font-size;
  margin-bottom: $medium-margin;
}
.movies-qty__container {
  display: flex;
  margin-bottom: $little-margin;
}
.movies-qty__year {
  color: $text-color-active;
  font-size: $small-font-size;
}
.movies-qty__description {
  color: $active-color;
  font-size: $small-font-size;
  padding-left: $little-margin;
  font-weight: 600;
}
.movies-grade__description-container {
  display: flex;
  margin-bottom: $little-margin;
}
.movies-grade__description-title {
  color: $text-color-active;
  font-size: $small-font-size;
}
.movies-grade__description {
  font-weight: 600;
  padding-left: $little-margin;
  color: $active-color;
  font-size: $small-font-size;
}
</style>
