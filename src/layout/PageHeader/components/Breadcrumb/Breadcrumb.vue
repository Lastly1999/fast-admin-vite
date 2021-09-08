<template>
    <a-breadcrumb>
        <a-breadcrumb-item v-for="routeItem in routerArrs">{{ routeItem.meta.title }}</a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue"
import { useRoute, RouteLocationMatched } from "vue-router"

export default defineComponent({
    setup() {
        const route = useRoute()

        const breadcrumbConfig = reactive({
            routerArrs: [] as RouteLocationMatched[] | undefined
        })

        watch(() => route.matched, (ov, nv) => {
            breadcrumbConfig.routerArrs = nv
        }, {
            deep: true,
            immediate: true
        })
        return {
            ...toRefs(breadcrumbConfig)
        }
    }
})
</script>