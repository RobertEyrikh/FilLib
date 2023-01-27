<template>
  <div class="positioning">
    <the-sidebar
      :isLoginInHeader="isLoginInHeader"
      :isSidebarOpen="isSidebarOpen"
    />
    <div class="header-main-footer">
      <the-header
        @isLoginInHeader="loginButtonStatus"
        @isSidebarOpen="sidebarStatus"
        @query-string="transferQueryString"
      />
      <main>
        <router-view :queryString="queryString" class="view" />
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
      isLoginInHeader: false,
      queryString: "",
    };
  },
  methods: {
    sidebarStatus(status) {
      this.isSidebarOpen = status;
    },
    loginButtonStatus(status) {
      this.isLoginInHeader = status;
    },
    transferQueryString(query) {
      this.queryString = query;
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
