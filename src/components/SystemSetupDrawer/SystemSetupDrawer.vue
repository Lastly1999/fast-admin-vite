<script lang="ts" setup>
import { ref } from "vue"

defineProps({
  visible: {
    type: Boolean,
    default: () => false
  }
})

const emit = defineEmits<{
  (event: 'update:visible', show: boolean): void
}>()

const placement = ref<string>('right')

const defaultTheme = ref<string[]>(['default-theme'])

const themes = ref([
  {
    id: 0,
    name: "default-theme",
    class: 'check-default-theme'
  },
  {
    id: 1,
    name: "drak-blue-theme",
    class: 'check-drak-blue-theme'
  },
  {
    id: 2,
    name: "red-theme",
    class: 'check-red-theme'
  },
  {
    id: 3,
    name: "fag-purple-theme",
    class: 'check-fag-purple-theme'
  }
])

const onClose = () => {
  emit('update:visible', false)
}

const themeChange = (event: string[]) => {
  if (event.pop()) {
    defaultTheme.value = [event.pop() as string]
  }
}

</script>
<template>
  <a-drawer title="个性设置" :placement="placement" :closable="false" :visible="visible" @close="onClose">
    <a-divider>主题色</a-divider>
    <a-checkbox-group v-model:value="defaultTheme" @change="themeChange">
      <div style="text-align: center;">
        <a-checkbox v-for="item in themes" :value="item.name" :class="item.class" />
      </div>
    </a-checkbox-group>
  </a-drawer>
</template>
<style lang="scss" scoped>
// 浅蓝色主题
.check-default-theme {
  &:deep(.ant-checkbox-checked .ant-checkbox-inner) {
    background-color: #1890ff;
    border: 1px solid #1890ff;
    border-color: #1890ff;
  }
  &:deep(.ant-checkbox-inner) {
    background-color: #1890ff;
  }
}

// 深蓝主题
.check-drak-blue-theme {
  &:deep(.ant-checkbox-checked .ant-checkbox-inner) {
    background-color: rgb(9, 96, 189);
    border: 1px solid rgb(9, 96, 189);
    border-color: rgb(9, 96, 189);
  }
  &:deep(.ant-checkbox-inner) {
    background-color: rgb(9, 96, 189);
  }
}

// 浅红主题

.check-red-theme {
  &:deep(.ant-checkbox-checked .ant-checkbox-inner) {
    background-color: rgb(238, 79, 18);
    border: 1px solid rgb(238, 79, 18);
    border-color: rgb(238, 79, 18);
  }
  &:deep(.ant-checkbox-inner) {
    background-color: rgb(238, 79, 18);
  }
}

// 基佬紫主题

.check-fag-purple-theme {
  &:deep(.ant-checkbox-checked .ant-checkbox-inner) {
    background-color: rgb(81, 114, 220);
    border: 1px solid rgb(81, 114, 220);
    border-color: rgb(81, 114, 220);
  }
  &:deep(.ant-checkbox-inner) {
    background-color: rgb(81, 114, 220);
  }
}
</style>