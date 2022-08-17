import { MainContainer } from '../../globalStyles'

interface ContactProps {
  theme: string
}

export default function ContactPage(props: ContactProps) {
  const { theme } = props
  return (
    <MainContainer theme={theme}>
      <h1>Contato Page </h1>
    </MainContainer>
  )
}
