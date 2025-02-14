import styled from 'styled-components';

export const HeroContainer = styled.section`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal); /* Cor que sobrepõe a imagem */
    content: '';
    opacity: 0.7; /* Opacidade para a cor sobre a imagem */
    z-index: 0; /* Coloca a camada atrás do conteúdo */
  }

  .container {
    position: relative;
    z-index: 1; /* Mantém o conteúdo (texto) acima da camada de fundo */
    padding: 0 16px;
    text-align: center;
    background: none;
    color: white;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`;

export const HeroTitle = styled.h2`
  color: ${(props) => props.theme.CorTextoHero};
  font-family: Gloock, serif;
  font-size: 48px;
  background: none; /* Sem fundo no título */

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;
