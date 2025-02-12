import React from 'react';
import { CabecalhoContainer, Titulo, Subtitulo } from './CabecalhoStyles'; // Importando os estilos

const Cabecalho = () => {
  return (
    <CabecalhoContainer>
      <Titulo>Exercício React</Titulo>
      <Subtitulo>Agora usando Styled Components!</Subtitulo>
    </CabecalhoContainer>
  );
};

export default Cabecalho;
