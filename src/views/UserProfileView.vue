<template>
  <div class="profile">
    <div class="contacts">
      <h1 class="contacts-description">Your account details.</h1>
      <p class="contacts-name">Name: {{ user.username }}</p>
      <p class="contacts-email">Email: {{ user.email }}</p>
    </div>
    <div class="statistics">
      <h1 class="statistics-description">
        Your statistics on the number of films.
      </h1>
      <p class="statistics-viewed">Number of films watched: 22</p>
      <p class="statistics-watchlist">Number of movies to watch: 15</p>
    </div>
    <div class="button-container">
      <my-button-2 @click="logout" class="logout-button">Logout</my-button-2>
      <my-button-2 class="delete-button">Delete account</my-button-2>
    </div>
  </div>
</template>

<script>
import MyButton2 from "@/components/UI/MyButton2.vue";
import { mapState } from "vuex";
export default {
  components: { MyButton2 },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/home");
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.profile {
  background-color: $primary-color;
  min-height: 100vh;
  height: auto;
  padding: $hight-margin;
  color: $text-color-disable;
}
.contacts,
.statistics {
  margin-bottom: $hight-margin;
}
.contacts-description,
.statistics-description {
  color: $text-color-active;
  font-size: $medium-font-size;
  margin-bottom: $medium-margin;
  font-weight: 600;
}
.contacts-name,
.contacts-email,
.statistics-viewed,
.statistics-watchlist {
  margin-bottom: $little-margin;
}
.button-container {
  height: 100%;
  margin-top: 500px;
  display: flex;
  justify-content: space-between;
}
.logout-button {
  background-color: $secondary-color;
}
.delete-button {
  background-color: $error-color;
}
</style>
