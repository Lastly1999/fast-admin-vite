import { ref } from "vue"


export default function () {
  const title = ref('')
  const visible = ref(false)

  const showModal = (): void => {
    visible.value = true
  }

  const closeModal = (): void => {
    visible.value = false
  }

  return {
    title,
    visible,
    showModal,
    closeModal
  }
}