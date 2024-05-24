import styled from 'styled-components';

export const Content = styled.div`
  height: fit-content;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;

export const ContainerCards = styled.div`
  height: fit-content;
  width: 90vw;
  background: ${({ theme }) => theme.colors.darkPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 0 0;
  margin-bottom: 7rem;
`;

export const Cards = styled.div`
  display: grid;
`;
