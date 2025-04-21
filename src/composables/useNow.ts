import { onUnmounted, ref } from 'vue'

export const useNow = () => {
  const now = ref<Date>(new Date())

  const updateNow = () => {
    now.value = new Date()
  }

  const timer = setInterval(updateNow, 1000)
  const stopTimer = () => {
    clearInterval(timer)
  }

  onUnmounted(() => {
    stopTimer()
  })

  return now
}
