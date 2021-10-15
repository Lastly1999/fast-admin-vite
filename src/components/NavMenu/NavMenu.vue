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
import { defineComponent, PropType, watch, reactive, toRefs } from 'vue'
import { Icon } from '@/components/FIcon/FIcon'
import { useRouter, useRoute } from 'vue-router'

export type MenuItem = {
    path: string;
    label: string;
    children: MenuItem[];
    icon: string;
}

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
        <template #title>
            {{ menuInfo.label }}
        </template>
        <template #icon>
            <Icon :icon="menuInfo.icon"></Icon>
        </template>
        <template v-for="item in menuInfo.children" :key="item.path">
            <template v-if="!item.children">
                <a-menu-item :key="item.path">
                    <template #icon>
                        <Icon :icon="item.icon"></Icon>
                        <i :class="['fa',item.icon]"></i>
                    </template>
                    {{ item.label }}
                </a-menu-item>
            </template>
            <template v-else>
                <sub-menu :menu-info="item" :key="item.path"/>
            </template>
        </template>
        </a-sub-menu>
    `,
    components: {
        Icon
    },
}

export default defineComponent({
    components: {
        'sub-menu': SubMenu,
        Icon
    },
    props: {
        config: {
            type: Object as PropType<MenuItem>,
            default: () => {
                return {}
            },
        },
        list: {
            type: Array as PropType<MenuItem[]>,
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
        }
        return {
            ...toRefs(menuState),
            onOpenChange,
            selectMenuItem,
        }
    },
})
</script>