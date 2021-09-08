<template>
    <a-menu :default-selected-keys="['1']" :default-open-keys="['2']" mode="inline" theme="light" :inline-collapsed="collapsed" @select="selectMenuItem">
        <template v-for="item in list" :key="item.key">
            <template v-if="!item?.children">
                <a-menu-item :key="item.key">
                    <template #icon>
                        <PieChartOutlined />
                    </template>
                    {{ item.title }}
                </a-menu-item>
            </template>
            <template v-else>
                <sub-menu :menu-info="item" :key="item.key" />
            </template>
        </template>
    </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons-vue'
import { MenuInfo } from './navMenu'
import { useRouter } from 'vue-router'

// you can rewrite it to a single file component, if not, you should config vue alias to vue/dist/vue.esm-bundler.js
const SubMenu = {
    name: 'SubMenu',
    props: {
        menuInfo: {
            type: Object,
            default: () => ({}),
        },
    },
    template: `
    <a-sub-menu :key="menuInfo.key">
      <template #icon><MailOutlined /></template>
      <template #title>{{ menuInfo.title }}</template>
      <template v-for="item in menuInfo.children" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <template #icon>
              <PieChartOutlined />
            </template>
            {{ item.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-sub-menu>
  `,
    components: {
        PieChartOutlined,
        MailOutlined,
    },
}
const list = [
    {
        key: '1',
        title: '工作台',
        children: [
            {
                key: '/dashboard/panel',
                title: '工作面板',
            },
            {
                key: '/dashboard/info',
                title: '系统信息',
            },
        ],
    },
    {
        key: '2',
        title: '组件',
        children: [
            {
                key: '2.1',
                title: '表格',
            },
        ],
    },
]
export default defineComponent({
    setup() {
        const router = useRouter()
        const collapsed = ref<boolean>(false)

        const toggleCollapsed = () => {
            collapsed.value = !collapsed.value
        }
        const selectMenuItem = (item: MenuInfo) => {
            router.push(item.key)
        }
        return {
            list,
            collapsed,
            toggleCollapsed,
            selectMenuItem,
        }
    },
    components: {
        'sub-menu': SubMenu,
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        PieChartOutlined,
    },
})
</script>