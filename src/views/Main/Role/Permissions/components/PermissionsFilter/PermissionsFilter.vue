<script lang="ts" setup>
import { reactive, computed } from "vue"


const onSubmit = (): void => {
  console.log('search')
}

const resetFields = (): void => {

}

const modelRef = reactive({
  name: '',
  region: undefined,
  type: [],
});

</script> 
<template>
  <div class="permissions-fillter">
    <a-form layout="inline">
      <a-form-item label="Activity name" required>
        <a-input v-model:value="modelRef.name" />
      </a-form-item>
      <a-form-item label="Activity zone" required>
        <a-select v-model:value="modelRef.region" placeholder="please select your zone">
          <a-select-option value="shanghai">Zone one</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item class="error-infos">
        <a-button type="primary" @click.prevent="onSubmit">查询</a-button>
        <a-button style="margin-left: 10px" @click="resetFields">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<style>
.permissions-fillter {
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
}
</style>