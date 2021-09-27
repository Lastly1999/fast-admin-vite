<script lang="ts" setup>
import {watch} from "vue"
import type {PropType} from "vue"
import type {TreeDataItem} from 'ant-design-vue/es/tree/Tree'

const props = defineProps({
	data: {
		type: Array as PropType<TreeDataItem>,
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
	(event: "update:expandedKeys", expandedKeys: string[]): void,
	(event: "update:selectedKeys", selectedKeys: string[]): void,
	(event: "update:checkedKeys", checkedKeys: string[]): void,
}>()

const replaceFields = {
	children: 'children',
	title: 'label',
	key: 'id'
};

watch(() => props.expandedKeys, (val) => {
	emit("update:expandedKeys", props.expandedKeys)
}, {deep: true})
watch(() => props.selectedKeys, (val) => {
	emit("update:selectedKeys", props.selectedKeys)
}, {deep: true})
watch(() => props.checkedKeys, (val) => {
	emit("update:checkedKeys", props.checkedKeys)
}, {deep: true})


const treeSelect = (tree: TreeDataItem, info: any) => {
	// 已勾选子节点以及半勾选状态的父节点
	tree = tree.concat(info.halfCheckedKeys)
}

</script>

<template>
	<a-tree
		checkable
		:replaceFields="replaceFields"
		:tree-data="data"
		@check="treeSelect"
		v-model:expandedKeys="expandedKeys"
		v-model:selectedKeys="selectedKeys"
		v-model:checkedKeys="checkedKeys"
	>
	</a-tree>
</template>