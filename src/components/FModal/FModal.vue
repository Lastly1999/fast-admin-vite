<script lang="ts" setup>

const prop = defineProps({
	value: {
		type: Boolean,
		default: () => false
	},
	title: {
		type: String,
		default: () => ""
	}
})

const emit = defineEmits<{
	(event: "ok"): void,
	(event: "update:value", show: boolean): void,
	(event: "close"): void
}>()

const handleOk = () => {
	emit('ok')
}

const cancel = () => {
	emit('update:value', false)
	emit('close')
}

</script>
<template>
	<a-modal v-model:visible="value" :title="title" @ok="handleOk" @cancel="cancel">
		<slot></slot>
	</a-modal>
</template>