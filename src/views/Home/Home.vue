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
<script lang="ts" setup>
import NavMenu from "@/components/NavMenu/NavMenu.vue";
</script>
<style lang="scss">
@import "./home.scss";
</style>
