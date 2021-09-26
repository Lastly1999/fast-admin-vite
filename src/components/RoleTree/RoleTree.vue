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

const replaceFields = {
	children: 'children',
	title: 'label',
	key: 'id'
};

watch(props.expandedKeys, () => {
	console.log('expandedKeys', props.expandedKeys);
});
watch(props.selectedKeys, () => {
	console.log('selectedKeys', props.selectedKeys);
});
watch(props.checkedKeys, () => {
	console.log('checkedKeys', props.checkedKeys);
});
</script>

<template>
	<a-tree
		checkable
		:replaceFields="replaceFields"
		:tree-data="data"
		v-model:expandedKeys="expandedKeys"
		v-model:selectedKeys="selectedKeys"
		v-model:checkedKeys="checkedKeys"
	>
	</a-tree>
</template>