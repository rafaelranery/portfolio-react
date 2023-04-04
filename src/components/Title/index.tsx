import { Title as TitleStyle } from './styles'
/* Para não ficarmos copiando c´odigo, exportamos o tipo */
export type Props = {
  children: string
  fontSize?: number
}

const Title = (props: Props) => (
  <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
)

export default Title
