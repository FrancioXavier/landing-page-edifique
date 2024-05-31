import styled from 'styled-components';

export const HomeSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: row;
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
  font-size: 2.604vw;
  margin-bottom: 5rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ContentHome = styled.div`
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 35vw;
  height: 40vh;
  position: absolute;
  left: 26%; /* por exemplo */
  top: 50%; /* por exemplo */
  transform: translate(-50%, -60%);
  @media only screen and (max-width: 1050px) {
    top: 40%;
  }
  h1 {
    font-size: 30px;
    margin-bottom: 1.5rem;

    @media only screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }
  h2 {
    font-size: 70px;
    font-weight: bold;
    text-align: left;

    @media only screen and (max-width: 900px) {
      font-size: 28px;
    }
  }

  .icons {
    display: flex;
    margin-top: 3.5rem;
    .iconContainer {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.white};
      margin-right: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 3px solid none;
      transition: all 0.5s ease-out;

      svg {
        color: ${({ theme }) => theme.colors.black};
      }

      &:hover {
        background: linear-gradient(to left, #ff5209, #ff0000) border-box;
      }
    }
  }
  @media only screen and (max-width: 1550px) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 1300px) {
    top: 45%;

    h2 {
      font-size: 35px;
    }
  }

  @media only screen and (max-width: 769px) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 15px;
    }

    h2 {
      font-size: 10px;
    }
  }
`;

export const ContentSection = styled.div`
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  z-index: 1;

  .cardSection {
    width: 90vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3rem;
  }

  @media only screen and (max-width: 1050px) {
    top: 40%;
  }
  h1 {
    font-size: 30px;
    margin-bottom: 1.5rem;

    @media only screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }
  h2 {
    font-size: 60px;
    font-weight: bold;
    text-align: left;

    @media only screen and (max-width: 900px) {
      font-size: 28px;
    }
  }
  @media only screen and (max-width: 1550px) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 1300px) {
    top: 45%;

    h2 {
      font-size: 35px;
    }
  }

  @media only screen and (max-width: 769px) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 15px;
    }

    h2 {
      font-size: 10px;
    }
  }
`;

export const Card = styled.div`
  margin-top: 3rem;
  height: 60vh;
  width: 25%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  border-radius: 12px;

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .icon {
      margin-top: 2rem;
      height: 10vh;
      width: 100%;
    }

    .text {
      color: ${({ theme }) => theme.colors.primary};
      text-align: left;
      width: 80%;
      margin-left: 2rem;

      h3 {
        font-weight: bolder;
      }

      p {
        font-size: 1.2vw;
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    width: 30%;
  }

  @media only screen and (max-width: 900px) {
    width: 30%;
    height: 50vh;
    .text {
      h3 {
        font-size: 20px;
      }

      p {
        font-size: 1.68vw;
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5rem;
  align-items: center;
  right: 0;
  margin-right: 3rem;
  position: absolute;

  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ActionsContainer = styled.div`
  background: gray;
  width: 35vw;
  height: 50vh;
`;

export const ActionsCard = styled.div`
  height: 80%;
  width: 20vw;
  border-top: 10px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkPrimary};
`;

export const ActionsCardBottom = styled.div`
  height: 80%;
  width: 20vw;
  border-bottom: 10px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkPrimary};
`;
