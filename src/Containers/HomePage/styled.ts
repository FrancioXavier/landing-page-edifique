import styled from 'styled-components';

export const HomeSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CarouselSection = styled.section`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10rem;
`;

export const TitlePage = styled.h2`
  font-weight: bolder;
  color: #fff;
  font-size: 48px;
  margin: 5rem 0 5rem 0;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ContentHome = styled.div`
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
  h1 {
    font-weight: bold;
    font-size: 125px;
    margin-bottom: 3rem;

    @media only screen and (max-width: 769px) {
      font-size: 75px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 50px;
    }
  }
  p {
    width: 80%;
    font-size: 25px;
    font-weight: bold;

    @media only screen and (max-width: 769px) {
      font-size: 15px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 10px;
    }
  }
`;
