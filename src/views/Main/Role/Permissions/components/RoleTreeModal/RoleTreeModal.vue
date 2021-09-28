<script lang="ts" setup>
import type { PropType } from "vue"
import FModal from "@/components/FModal/FModal.vue"
import RoleTree from "@/components/RoleTree/RoleTree.vue"
import { watch } from "vue";

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
	},
	confirmLoading: {
		type: Boolean,
		default: () => false
	}
})

const emit = defineEmits<{
	(event: "update:expandedKeys", expandedKeys: string[]): void,
	(event: "update:selectedKeys", selectedKeys: string[]): void,
	(event: "update:checkedKeys", checkedKeys: string[]): void,
	(event: "update:value", show: boolean): void,
	(event: "submit"): void
}>()


watch(() => props.expandedKeys, (val) => {
	emit("update:expandedKeys", props.expandedKeys)
}, { deep: true })
watch(() => props.selectedKeys, (val) => {
	emit("update:selectedKeys", props.selectedKeys)
}, { deep: true })
watch(() => props.checkedKeys, (val) => {
	console.log(val)
	emit("update:checkedKeys", props.checkedKeys)
}, { deep: true })


const close = () => {
	emit("update:value", false)
}

const okSubmit = () => {
	emit("submit")
}


</script>

<template>
	<FModal
		v-model:value="value"
		@close="close"
		title="权限树"
		@ok="okSubmit"
		:confirmLoading="confirmLoading"
	>
		<RoleTree
			:data="data"
			v-model:expandedKeys="expandedKeys"
			v-model:selectedKeys="selectedKeys"
			v-model:checkedKeys="checkedKeys"
		/>
	</FModal>
</template>