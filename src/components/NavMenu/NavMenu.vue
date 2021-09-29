<template>
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
        @select="selectMenuItem"
        @openChange="onOpenChange"
    >
        <template v-for="item in $props.list" :key="item.path">
            <template v-if="!item?.children">
                <a-menu-item :key="item.path">{{ item.label }}</a-menu-item>
            </template>
            <template v-else>
                <sub-menu :menu-info="item" :key="item.path" />
            </template>
        </template>
    </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, watch, reactive, toRefs } from 'vue'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons-vue'
import { MenuItem, MenuInfo } from './navMenu'
import { useRouter, useRoute } from 'vue-router'

// you can rewrite it to a single file component, if not, you should config vue alias to vue/dist/vue.esm-bundler.js
const SubMenu = {
    name: 'SubMenu',
    props: {
        menuInfo: {
            type: Object as PropType<MenuItem>,
            default: () => ({}),
        },
    },
    template: `
    <a-sub-menu :key="menuInfo.path">
      <template #title>{{ menuInfo.label }}</template>
      <template v-for="item in menuInfo.children" :key="item.path">
        <template v-if="!item.children">
          <a-menu-item :key="item.path">
            {{ item.label }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.path" />
        </template>
      </template>
    </a-sub-menu>
  `,
    components: {
        PieChartOutlined,
        MailOutlined,
    },
}

export default defineComponent({
    components: {
        'sub-menu': SubMenu,
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        PieChartOutlined,
    },
    props: {
        config: {
            type: Object as PropType<MenuItem>,
            default: () => {
                return {}
            },
        },
        list: {
            type: Array as PropType<MenuInfo[]>,
            default: () => [],
        },
    },
    setup() {
        const router = useRouter()

        const route = useRoute()

        const menuState = reactive({
            collapsed: false as boolean,
            selectedKeys: [] as string[],
            openKeys: [] as string[],
        })

        watch(
            () => route.path,
            (nv, _) => {
                menuState.selectedKeys = [route.path]
                // 处理自动展开的需要父级的key值
                const mapKeys: string = '/' + route.path.split('/')[route.path.split('/').length - 2]
                menuState.openKeys = [mapKeys]
            },
            { deep: true, immediate: true }
        )

        const selectMenuItem = (item: MenuItem) => {
            router.push(item?.key)
        }

        const onOpenChange = (openKeys: any) => {
            console.log(openKeys)
            // if (openKeys.length !== 0) {
            //     openKeys = [openKeys[1]]
            // } else {
            //     openKeys = ['']
            // }
        }
        return {
            ...toRefs(menuState),
            onOpenChange,
            selectMenuItem,
        }
    },
})
</script>