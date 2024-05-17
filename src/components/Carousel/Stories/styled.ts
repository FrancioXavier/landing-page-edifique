import styled from 'styled-components';

import bruno from '@/config/img/stories/bruno.svg';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 0 0 100%;
  min-width: 0;
  width: 95vw;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.darkPrimary};

  .photoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    justify-content: center;
    .photo {
      height: 18.229vw;
      width: 18.229vw;
      border-radius: 50%;
      background-image: url(${bruno.src});
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.563vw;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 0;
    }

    .sub {
      text-align: center;
      font-size: 1.2vw;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .text {
    height: 100%;
    width: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    text-align: left;
    margin-left: 2rem;

    p {
      font-size: 1.1vw;
      color: ${({ theme }) => theme.colors.white};

      @media only screen and (max-width: 1500px) {
        font-size: 20px;
        line-height: 35px;
      }

      @media only screen and (max-width: 1100px) {
        font-size: 15px;
        line-height: 30px;
      }
    }

    @media only screen and (max-width: 408px) {
      p {
        line-height: 25px;
        width: 90%;
      }
    }

    @media only screen and (max-width: 300px) {
      p {
        line-height: 20px;
        width: 90%;
      }
    }

    @media only screen and (max-width: 280px) {
      p {
        font-size: 13px;
        line-height: 20px;
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 668px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    .photo {
      width: 100%;
      height: 50%;
    }
    .text {
      width: 100%;
      height: 50%;
    }
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;
