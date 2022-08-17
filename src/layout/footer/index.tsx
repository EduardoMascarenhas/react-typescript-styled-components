import { ContainerFooter } from './footer.elements'

interface FooterProps {
  theme: string
}

export const Footer = (props: FooterProps) => {
  const { theme } = props

  return (
    <ContainerFooter theme={theme}>
      <h1>Footer</h1>
    </ContainerFooter>
  )
}
