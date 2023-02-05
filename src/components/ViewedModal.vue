<template>
  <div @click="closeModal" v-if="isModalOpen" class="modal-overlay"></div>
  <div @click.stop v-if="isModalOpen" class="modal">
    <h1 class="modal-title">{{ modalTitle }}</h1>
    <p class="film-name">{{ film.name }}</p>
    <div class="rating-container">
      <p class="rating-title">Rate the movie:</p>
      <div class="rating">
        <input v-model="rating" type="number" step="0.25" min="1" max="10" />
      </div>
    </div>
    <div class="date-container">
      <p class="date-title">Select viewing date:</p>
      <div>
        <input
          v-model="date"
          type="date"
          min="2000-01-01"
          :max="getCurrentDate"
        />
      </div>
    </div>
    <div class="description-container">
      <p class="description-title">
        You can write a note about the film if you wish:
      </p>
      <div class="description">
        <textarea
          v-model.trim="description"
          maxlength="100"
          class="description-input"
        ></textarea>
      </div>
    </div>
    <div class="modal-buttons">
      <my-button-2 class="cancel" @click.stop="closeModal">Cancel</my-button-2>
      <my-button-2 @click="changeViewedList" class="confirm"
        >Confirm</my-button-2
      >
    </div>
  </div>
</template>

<script>
import MyButton2 from "@/components/UI/MyButton2.vue";
import { mapGetters } from "vuex";
//import { addFilmToViewed } from "@/api/film";
export default {
  components: { MyButton2 },
  data() {
    return {
      rating: 10,
      date: null,
      description: "",
      isOpen: false,
    };
  },
  props: {
    modalTitle: {
      required: true,
      type: String,
    },
    film: {
      required: true,
      type: Object,
    },
    isModalOpen: {
      required: true,
      type: Boolean,
    },
  },
  emits: ["close"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
    changeViewedList() {
      const film = {
        rate: this.rating,
        filmId: this.film.id,
        date: this.date,
        description: this.description,
      };
      this.$store.dispatch("changeViewedList", film);
      this.closeModal();
    },
  },
  computed: {
    ...mapGetters(["viewidFilms"]),
    getCurrentDate() {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      month < 10 ? (month = "0" + month) : month;
      let day = date.getDate();
      day < 10 ? (day = "0" + day) : day;
      return `${year}-${month}-${day}`;
    },
  },
  watch: {
    film() {
      if (this.film.rate) {
        this.rating = this.film.rate;
        this.date = this.film.date;
        this.description = this.film.description;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 98;
  background: rgba(0, 0, 0, 0.3);
}
.modal {
  font-size: $small-font-size;
  color: $text-color-active;
  padding: $medium-margin;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background-color: $primary-color;
  border-radius: 10px;
}
.modal-title {
  font-size: $medium-font-size;
  padding-bottom: $hight-margin;
}
.film-name {
  color: $active-color;
}
.rating-container,
.date-container,
.description-container,
.modal-buttons {
  margin-top: $medium-margin;
}
.rating-container,
.date-container,
.modal-buttons {
  display: flex;
  justify-content: space-between;
}
.description-input {
  margin-top: $little-margin;
  width: 100%;
  height: 100px;
  resize: none;
  background-color: $tertiary-color;
  color: $text-color-active;
}
.cancel {
  background-color: $error-color;
}
.confirm {
  background-color: $active-color;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
