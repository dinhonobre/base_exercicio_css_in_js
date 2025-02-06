import React from 'react';
import { CabecalhoContainer, Titulo, Subtitulo } from './CabecalhoStyles'; // Importando os estilos

const Cabecalho = () => {
  return (
    <CabecalhoContainer>
      <Titulo>Meu Projeto</Titulo>
      <Subtitulo>Agora usando Styled Components!</Subtitulo>
    </CabecalhoContainer>
  );
};

export default Cabecalho;
