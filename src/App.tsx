import { ThemeProvider } from 'styled-components'
/* Com o theme provider podemos usar as propriedades do tema importada para todos children */

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [isThemeDark, setIsThemeDark] = useState(false)

  function trocaTema() {
    setIsThemeDark(!isThemeDark)
  }

  return (
    <ThemeProvider theme={isThemeDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre></Sobre>
          <Projetos></Projetos>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
