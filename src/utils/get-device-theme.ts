export const getDeviceTheme = () => {
  if (typeof window.matchMedia === 'undefined') {
    return null
  }

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (isDark) {
    return 'dark'
  }

  return 'light'
}
