<script lang="ts" setup>

const props = defineProps({
	value: {
		type: Boolean,
		default: () => true
	},
	width: {
		type: [String, Number],
		default: () => ''
	},
	bodyStyle: {
		type: Object as any,
		default: () => {
			paddingBottom: "80px"
		}
	},
	title: {
		type: String,
		default: () => ''
	},
	loading: {
		type: Boolean,
		default: () => false
	}
})

const emit = defineEmits<{
	(event: "submit"): void,
	(event: 'update:value', bool: boolean): void
}>()

const onClose = () => {
	emit("update:value", false)
}

const onSubmit = () => {
	emit("submit")
}

</script>
<template>
	<a-drawer
		:title="title"
		:width="width"
		:visible="value"
		:body-style="bodyStyle"
		@close="onClose"
	>
		<slot></slot>
		<div
			:style="{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        background: '#fff',
        textAlign: 'right',
        zIndex: 1,
      }"
		>
			<a-button style="margin-right: 8px" @click="onClose">取消</a-button>
			<a-button type="primary" @click="onSubmit" :loading="loading">保存</a-button>
		</div>
	</a-drawer>
</template>