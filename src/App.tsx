import React from 'react';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Cabecalho/./Cabecalho';
import Hero from './components/Hero/Hero';
import ListaVagas from './containers/ListaVagas/ListaVagas';
import styled from 'styled-components';

// Usando styled-components para o container
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  );
}

export default App;
