import { MainContainer } from '../../globalStyles'
import { Footer } from '../footer'
import { NavBar } from '../nav-bar'

interface LayoutProps {
  theme: string
  children: JSX.Element
  changeTheme: () => void
}

export const Layout = (props: LayoutProps) => {
  const { theme, children, changeTheme } = props

  return (
    <MainContainer theme={theme}>
      <NavBar
        theme={theme}
        changeTheme={changeTheme}
      />
      {children}
      <Footer theme={theme} />
    </MainContainer>
  )
}
