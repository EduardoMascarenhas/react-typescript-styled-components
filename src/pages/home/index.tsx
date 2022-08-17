import { MainContainer } from '../../globalStyles'

interface HomeProps {
  theme: string
}

export const HomePage = (props: HomeProps) => {
  const { theme } = props

  return <MainContainer theme={theme}></MainContainer>
}
