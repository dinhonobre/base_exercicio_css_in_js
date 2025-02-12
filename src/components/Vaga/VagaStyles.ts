import styled from 'styled-components';

export const VagaContainer = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-cards);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alinha os itens no topo */
  align-items: flex-start; /* Alinha os itens à esquerda */
  gap: 10px;
`;

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
  font-size: 1.5rem;
`;

export const VagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }
`;
