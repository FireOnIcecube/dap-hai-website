import { useDark, useToggle } from '@vueuse/core'

const isDarkMode = useDark({ disableTransition: false })

export function useDarkMode() {
  const toggleDark = useToggle(isDarkMode)

  return {
    isDarkMode,
    toggleDark,
  }
}
