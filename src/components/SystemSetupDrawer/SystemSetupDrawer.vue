<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { CheckOutlined } from '@ant-design/icons-vue'
import { alertMsg } from "@/utils/antd/antd"

export type ThemeItem = {
  id: number;
  name: string;
  class: string;
}

export type CacheSystem = {
  treeMenuMode: "dark" | "light";
  theme: "default-theme" | "dark-blue-theme" | "red-theme" | "fag-purple-theme";
  themeId: number;
}

defineProps({
  visible: {
    type: Boolean,
    default: () => false
  }
})

onMounted(() => {
  initSystemTheme()
})

const emit = defineEmits<{
  (event: 'update:visible', show: boolean): void
}>()

const placement = ref<string>('right')

const defaultTheme = ref<number>(0)

const themes = ref([
  {
    id: 0,
    name: "default-theme",
    class: 'check-default-theme'
  },
  {
    id: 1,
    name: "dark-blue-theme",
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

const globalThemes = ref([
  {
    id: 0,
    name: '默认主题'
  },
  {
    id: 1,
    name: '黑夜模式'
  },
  {
    id: 2,
    name: '亮色模式'
  }
])

const onClose = () => {
  emit('update:visible', false)
}

const initSystemTheme = (): void => {
  const cache = localStorage.getItem('sys-config')
  if (!cache) {
    toggleTheme("default-theme", 0)
  } else {
    const sysConfig: CacheSystem = JSON.parse(cache as string)
    defaultTheme.value = sysConfig.themeId
    toggleTheme(sysConfig.theme, sysConfig.themeId)
  }
}

const themeChange = (event: ThemeItem): void => {
  defaultTheme.value = event.id
  toggleTheme(event.name, event.id)
  alertMsg("success", "现在你有了新的主题色！快去看看吧")
}

const checked3 = ref('')

/**
 * 主题切换
*/
const toggleTheme = (scopeName: string, id: number) => {
  styleSysSwitch(scopeName)
  // 系统cache存储
  localStorage.setItem('sys-config', JSON.stringify({ theme: scopeName, themeId: id } as CacheSystem))
};

/*
 *  处理style link 切换的核心函数
 * 这只是一个切换的妥协方法 还可继续优化 目标是抽离底层的--theme样式代码
 * by:lastly 2021年10月15日16:15:14
 */
const styleSysSwitch = (scopeName: string) => {
  let styleLink: HTMLElement = document.getElementById("theme-link-tag") as HTMLElement;
  // 假如已经设置了theme-link-tag的style link 则直接修改为要修改的样式文件css
  if (styleLink) {
    styleLink.href = `/${scopeName}.css`;
    // 如果是removeCssScopeName:true移除了主题文件的权重类名，就可以不用修改className 操作
    document.documentElement.className = scopeName;
  } else {
    // 不存在的话，则新建一个 然后再设置为切换的theme style
    styleLink = document.createElement("link");
    styleLink.type = "text/css";
    styleLink.rel = "stylesheet";
    styleLink.id = "theme-link-tag";
    styleLink.href = `/${scopeName}.css`;
    document.documentElement.className = scopeName;
    document.head.append(styleLink);
  }
}

</script>
<template>
  <a-drawer title="个性设置" :placement="placement" :closable="false" :visible="visible" @close="onClose">
    <a-divider>主题切换</a-divider>
    <div class="theme-switch-container">
      <div class="theme-switch-item" v-for="item in globalThemes">
        {{ item.name }}
        <a-switch v-model:checked="checked3">
          <template #checkedChildren>
            <check-outlined />
          </template>
          <template #unCheckedChildren>
            <close-outlined />
          </template>
        </a-switch>
      </div>
      <!-- <div class="theme-switch-item">
        黑夜模式
        <a-switch v-model:checked="checked3">
          <template #checkedChildren>
            <check-outlined />
          </template>
          <template #unCheckedChildren>
            <close-outlined />
          </template>
        </a-switch>
      </div>
      <div class="theme-switch-item">
        亮色模式
        <a-switch v-model:checked="checked3">
          <template #checkedChildren>
            <check-outlined />
          </template>
          <template #unCheckedChildren>
            <close-outlined />
          </template>
        </a-switch>
      </div>-->
    </div>
    <a-divider>主题色</a-divider>
    <div class="theme-container">
      <div v-for="item in themes" :class="['theme-select', item.class]" @click="themeChange(item)">
        <transition appear name="fade" mode="out-in">
          <CheckOutlined v-if="defaultTheme === item.id" />
        </transition>
      </div>
    </div>
  </a-drawer>
</template>
<style lang="scss" scoped>
@import "./index.scss";
</style>