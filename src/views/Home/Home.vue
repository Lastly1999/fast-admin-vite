<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider>
      <NavMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// components
import NavMenu from "@/components/NavMenu/NavMenu.vue";
import FastBreadcrumb from "@/components/FastBreadcrumb/FastBreadcrumb.vue";

export default defineComponent({
  components: {
    NavMenu,
    FastBreadcrumb
  },
  setup() {}
});
</script>
<style lang="scss">
@import "./home.scss";
</style>
