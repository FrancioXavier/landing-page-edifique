import styled from 'styled-components';

export const HomeSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
