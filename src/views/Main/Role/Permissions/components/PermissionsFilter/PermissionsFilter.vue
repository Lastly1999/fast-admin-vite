<script lang="ts" setup>
import { ref } from "vue"
const value = ref('')
const onSearch = () => {
  console.log('search')
}
</script> 
<template>
  <div class="permissions-fillter">
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
  </div>
</template>
<style>
.permissions-fillter {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
}
</style>