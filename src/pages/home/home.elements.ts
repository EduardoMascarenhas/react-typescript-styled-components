import styled from 'styled-components'

export const ContainerHome = styled.div<{ theme: string }>`
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  padding: 100px 0;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#101522')};
  min-height: 100vh;
`
