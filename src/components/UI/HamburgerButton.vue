<template>
  <div
    class="menu-toggle"
    @click="changeClass"
    :class="{ isActive: this.activeClass }"
  >
    <div class="hamburger">
      <span class="hamburger-span"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeClass: false,
    };
  },
  methods: {
    changeClass() {
      this.activeClass = !this.activeClass;
      this.$emit("isSidebarOpen", this.activeClass);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.menu-toggle {
  display: none;
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 35px;
  height: 35px;
  border-radius: 99px;
  background-color: $primary-color;
  cursor: pointer;
}
@media (max-width: $medium) {
  .menu-toggle {
    display: block;
  }
}
.hamburger {
  position: relative;
  top: calc(50% - 2px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
}
.hamburger-span,
.hamburger-span::before,
.hamburger-span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 99px;
  background-color: $text-color-active;
  transition-duration: 0.25s;
}
.hamburger-span::before {
  content: "";
  top: -8px;
}
.hamburger-span::after {
  content: "";
  top: 8px;
}
.menu-toggle.isActive .hamburger-span {
  transform: rotate(45deg);
}
.menu-toggle.isActive .hamburger-span::before {
  top: 0;
  transform: rotate(0deg);
}
.menu-toggle.isActive .hamburger-span::after {
  top: 0;
  transform: rotate(90deg);
}
</style>
