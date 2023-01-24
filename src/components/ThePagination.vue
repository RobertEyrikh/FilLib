<template>
  <div class="pagination">
    <router-link v-if="hasPrev()" @click="prevPage" class="arrow" to="/"
      ><img class="page-image" src="@/assets/icons/left.svg"
    /></router-link>
    <div class="links-container">
      <router-link
        v-for="i in pages"
        :key="i"
        @click="this.pageChange(i)"
        class="page-link"
        :class="{ active: currentPage === i }"
        to="/"
        >{{ i }}</router-link
      >
    </div>
    <router-link v-if="hasNext()" @click="nextPage" class="arrow" to="/"
      ><img class="page-image" src="@/assets/icons/right.svg"
    /></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageRange: 3,
    };
  },
  methods: {
    pageChange(page) {
      this.$emit("page-changed", page);
    },
    hasPrev() {
      return this.currentPage > 1;
    },
    hasNext() {
      return this.currentPage < this.pagesCount;
    },
    nextPage() {
      if (this.currentPage < this.pagesCount) {
        this.$emit("page-changed", this.currentPage + 1);
      } else {
        return;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit("page-changed", this.currentPage - 1);
      } else {
        return;
      }
    },
  },
  computed: {
    pages() {
      let pages = [];
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }
      return pages;
    },
    rangeStart() {
      let start = this.currentPage - this.pageRange;
      if (start > 0) {
        return start;
      } else {
        return 1;
      }
    },
    rangeEnd() {
      let end = this.currentPage + this.pageRange;
      if (end < this.pagesCount) {
        return end;
      } else {
        return this.pagesCount;
      }
    },
  },
  props: {
    pagesCount: {
      required: true,
      type: Number,
    },
    currentPage: {
      required: true,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.pagination {
  justify-content: center;
  display: flex;
}
.page-link {
  font-size: $medium-font-size;
  color: $text-color-disable;
  border-radius: 5px;
  margin: 0 5px;
  width: 35px;
  height: 35px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  transition: all 0.2s;
  &:hover:not(.active) {
    background-color: $tertiary-color;
  }
}
.links-container {
  margin-left: auto;
  margin-right: auto;
}
.arrow {
  scale: 0.7;
  height: 40px;
  transition: all 0.2s;
  &:hover {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(73deg)
      brightness(100%) contrast(103%);
  }
}
.page-image {
  height: 100%;
  object-fit: cover;
  filter: invert(31%) sepia(9%) saturate(193%) hue-rotate(201deg)
    brightness(92%) contrast(83%);
}
.active {
  background-color: $active-color;
  color: $text-color-active;
}
@media screen and (max-width: $small) {
  .page-link {
    font-size: $small-font-size;
    padding: 4px 10px;
    width: 23px;
    height: 30px;
  }
}
</style>
