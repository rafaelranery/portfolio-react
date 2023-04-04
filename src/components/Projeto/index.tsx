import Title from '../Title'
import Paragraph from '../Paragraph'

import { Card, LinkBtn } from './styles'

const Projeto = () => (
  <Card>
    <Title>Projeto lista de tarefas</Title>
    <Paragraph type="secondary">Lista de Tarefas feita com VueJS</Paragraph>
    <LinkBtn>Visualizar</LinkBtn>
  </Card>
)

export default Projeto

/* Podemos usar o styled cmoponents no mesmo arquivo que o component */
/* Porém, seguindo essa abordagem, o componente estilizado deve vir antes(!!!)
do componente exportado */
