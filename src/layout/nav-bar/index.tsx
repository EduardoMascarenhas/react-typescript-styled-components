import { Button } from '../../globalStyles'
import { ContainerNavBar } from './nav-bar.elements'

interface NavBarProps {
  theme: string
  changeTheme: () => void
}

export const NavBar = (props: NavBarProps) => {
  const { theme, changeTheme } = props

  return (
    <ContainerNavBar theme={theme}>
      <Button
        big
        fontBig
        onClick={changeTheme}>
        Change Theme
      </Button>
    </ContainerNavBar>
  )
}
