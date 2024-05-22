import styled from 'styled-components';

export const Content = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;

export const Container = styled.div`
  height: fit-content;
  width: 90vw;
  background: ${({ theme }) => theme.colors.darkPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 10vw 0;
`;

export const Card = styled.div`
  width: 15vw;
  height: 40vh;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  margin-right: 2vw;
  box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.25);
`;

export const Cards = styled.div`
  display: flex;
`;

export const CardName = styled.div`
  position: relative;
  width: 12vw;
  height: 13vh;
  background: ${({ theme }) => theme.colors.white};
  margin-top: 19vw;
  margin-left: 1.5vw;
  box-shadow: 5px 8px 13px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2vw;
  font-weight: bolder;
  text-align: center;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  font-size: 1vw;
`;
