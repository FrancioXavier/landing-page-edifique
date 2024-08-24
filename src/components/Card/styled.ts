import styled from 'styled-components';

export const Card = styled.div`
  width: 15vw;
  height: 40vh;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  margin-right: 2vw;
  box-shadow: 0px 8px 13px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 9rem;

  @media only screen and (max-width: 768px) {
    height: 25vh;
    width: 25vw;
  }
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
  margin-left: auto;
  margin-right: auto;
  box-shadow: 5px 8px 13px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: fit-content;
    height: fit-content;
    margin-top: auto;
    padding: 0.5vh 1vw;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2vw;
  font-weight: bolder;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 2vw;
  }
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
  font-size: 1vw;

  @media only screen and (max-width: 768px) {
    font-size: 2vw;
  }
`;
