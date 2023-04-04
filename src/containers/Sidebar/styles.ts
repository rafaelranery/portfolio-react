import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

/* Para estilizarmos um elemento produzido pelo styled components
aplicamos ele como uma função e passamos o elemento como argumento */
export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ThemeBtn = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
