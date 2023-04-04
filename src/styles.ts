import { createGlobalStyle } from 'styled-components'
/* Criando estilo global: aqui temos acessoa  toda arvore do dom */

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
export default EstiloGlobal
