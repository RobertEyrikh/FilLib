<template>
  <div class="positioning">
    <the-sidebar :isSidebarOpen="isSidebarOpen" />
    <div class="header-main-footer">
      <the-header @isSidebarOpen="sidebarStatus" />
      <main>
        <slot class="view" />
      </main>
      <the-footer />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheSidebar from "@/components/TheSidebar.vue";
export default {
  components: { TheHeader, TheFooter, TheSidebar },
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    sidebarStatus(status) {
      this.isSidebarOpen = status;
    },
  },
};
</script>

<style>
.positioning {
  display: flex;
}
.header-main-footer {
  flex-grow: 1;
}
</style>
