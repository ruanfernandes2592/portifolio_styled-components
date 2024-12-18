//import React from 'react';
import { ThemeProvider } from 'styled-components'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projetos from './containers/projetos'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <>
      <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
        <EstiloGlobal />
        <Container>
          <Sidebar trocaTema={trocaTema} />
          <main>
            <Sobre />
            <Projetos />
          </main>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
