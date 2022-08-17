import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './globalStyles'
import { getDeviceTheme } from './utils/get-device-theme'
import { getStoragedTheme } from './utils/get-storaged-theme'
import { ScrollToTop } from './components'
import { HomePage, ContactPage } from './pages'
import { LOCAL_STORAGE_THEME_KEY } from './constants/theme'
import { Layout } from './layout'

function App() {
  const [theme, setTheme] = useState<{ theme: string }>({
    theme: 'light'
  })

  const invertTheme = () =>
    theme.theme === 'light'
      ? (setTheme({ theme: 'dark' }),
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'dark'))
      : (setTheme({ theme: 'light' }),
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'light'))

  useEffect(() => {
    const storagedTheme = getStoragedTheme()
    if (storagedTheme) {
      setTheme({ theme: storagedTheme })
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, storagedTheme)
    } else {
      const deviceTheme = getDeviceTheme()
      if (deviceTheme) {
        setTheme({ theme: deviceTheme })
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, deviceTheme)
      } else {
        setTheme({ theme: 'light' })
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'light')
      }
    }
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Layout
        theme={theme.theme}
        changeTheme={invertTheme}>
        {
          <Router>
            <GlobalStyle />
            <ScrollToTop />
            <Routes>
              <Route
                path="/"
                element={<HomePage theme={theme.theme} />}
              />
              <Route
                path="/contato"
                element={<ContactPage />}
              />
            </Routes>
          </Router>
        }
      </Layout>
    </ThemeProvider>
  )
}

export default App
