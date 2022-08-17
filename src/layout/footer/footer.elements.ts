import styled from 'styled-components'

export const ContainerFooter = styled.div<{ theme: string }>`
  color: ${({ theme }) => (theme === 'light' ? '#fff' : '#000')};
  padding: 30px 0;
  background: ${({ theme }) => (theme === 'light' ? '#101522' : '#fff')};
  width: 100%;
  display: flex;
`
