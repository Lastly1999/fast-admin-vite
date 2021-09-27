<script lang="ts" setup>
import { defineProps } from "vue"
import type { PropType } from "vue"
import FModal from "@/components/FModal/FModal.vue"
import RoleTree from "@/components/RoleTree/RoleTree.vue"

const props = defineProps({
	value: {
		type: Boolean,
		default: () => false
	},
	data: {
		type: Array,
		default: () => []
	},
	expandedKeys: {
		type: Array as PropType<string[]>,
		default: () => []
	},
	selectedKeys: {
		type: Array as PropType<string[]>,
		default: () => []
	},
	checkedKeys: {
		type: Array as PropType<string[]>,
		default: () => []
	}
})

const emit = defineEmits<{
	(event: "update:value", show: boolean): void
}>()

const close = () => {
	emit("update:value", false)
}

</script>

<template>
	<FModal v-model:value="value" @close="close" title="权限树">
		<RoleTree
			:data="data"
			v-model:expandedKeys="expandedKeys"
			v-model:selectedKeys="selectedKeys"
			v-model:checkedKeys="checkedKeys"
		/>
	</FModal>
</template>