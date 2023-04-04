import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'

import { Descricao, ThemeBtn, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Rafael Nery</Title>
      <Paragraph type="secondary" fontSize={16}>
        rafaelranery
      </Paragraph>
      <Descricao type="primary" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <ThemeBtn>Trocar tema</ThemeBtn>
    </SidebarContainer>
  </aside>
)

export default Sidebar
