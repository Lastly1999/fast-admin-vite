<template>
    <FastContainer style="height:100%">
        <FastAside>
            header
        </FastAside>
        <FastContainer>
            <FastHeader>Header</FastHeader>
            <FastContent>Main</FastContent>
            <FastFooter>Footer</FastFooter>
        </FastContainer>
    </FastContainer>
</template>
<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
    setup() {
    },
})
</script>
