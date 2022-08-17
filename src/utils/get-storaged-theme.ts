import { LOCAL_STORAGE_THEME_KEY } from '../constants/theme'

export const getStoragedTheme = () => {
  const themeStoraged = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
  return themeStoraged
}
