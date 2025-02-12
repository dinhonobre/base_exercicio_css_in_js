import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --cor-principal: #a7727d;
    --cor-secundaria: #f9f5e7;
    --cor-cards:rgb(119, 66, 76);
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: var(--cor-secundaria);
  }

  .container {
    background-color: var(--cor-principal);
  }
`;
