/* Para não ficarmos copiando c´odigo, exportamos o tipo */
import { P } from './styles'

/* No TypeScript podemos limitar as possibilidades de valor para as chaves */
export type Props = {
  children: string
  type?: 'primary' | 'secondary'
  fontSize?: number
}

const Paragraph = ({ children, type = 'primary', fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
)

export default Paragraph
