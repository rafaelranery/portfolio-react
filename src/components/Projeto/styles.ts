import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`
/* O botão/link será criado apenas no styled components,
visto que ele é apenas um visual que sera aplicado a um elemento de um componente,
e não um componente react que será aplicado em outros momentos do aplicativo */

export const LinkBtn = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`
