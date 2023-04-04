/* Para não ficarmos copiando c´odigo, exportamos o tipo */
import { P } from './styles'

/* No TypeScript podemos limitar as possibilidades de valor para as chaves */
export type Props = {
  children: string
  type?: 'primary' | 'secondary'
}

const Paragraph = ({ children, type = 'primary' }: Props) => (
  <P type={type}>{children}</P>
)

export default Paragraph
