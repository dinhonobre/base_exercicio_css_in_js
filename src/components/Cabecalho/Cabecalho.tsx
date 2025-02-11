import React from 'react';
import { CabecalhoContainer, Titulo, Subtitulo } from './CabecalhoStyles'; // Importando os estilos

const Cabecalho = () => {
  return (
    <CabecalhoContainer>
      <Titulo>As melhores vagas para tecnologia, design e artes visuais.</Titulo>
      <Subtitulo>Agora usando Styled Components!</Subtitulo>
    </CabecalhoContainer>
  );
};

export default Cabecalho;
