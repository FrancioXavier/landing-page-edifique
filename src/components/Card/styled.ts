import styled from 'styled-components';

export const Card = styled.div`
  width: 15vw;
  height: 40vh;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  margin-right: 2vw;
  box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 9rem;
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
