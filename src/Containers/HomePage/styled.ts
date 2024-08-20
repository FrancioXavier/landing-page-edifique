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
    font-size: 8vw;
  }
`;

export const ContentHome = styled.div`
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 40vw;
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

    @media only screen and (max-width: 768px) {
      width: 100vw;
      margin-bottom: 1rem;
      font-size: 5.333vw;
    }
  }
  h2 {
    font-size: 70px;
    font-weight: bold;
    text-align: left;

    @media only screen and (max-width: 900px) {
      font-size: 28px;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      text-align: center;
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

      @media only screen and (max-width: 768px) {
        margin-right: 1rem;
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
      width: 85vw;
      font-size: 8vw;
    }
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    height: 100vh;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 5.333vw;
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

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 8vw;
    }

    h2 {
      width: 60vw;
      text-align: center;
      font-size: 4vw;
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
  width: 35vw;
  height: 50vh;
  text-align: left;

  h3,
  p {
    width: 90%;
  }

  p {
    font-size: 1.042vw;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.823vw;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 25vh;

    h3 {
      font-size: 5vw;
    }

    p {
      font-size: 1.75vw;
    }
  }
`;

export const ActionsCard = styled.div`
  height: 80%;
  width: 20vw;
  border-top: 10px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 100%;
    border-top: none;
    border-left: 10px solid ${({ theme }) => theme.colors.white};
    width: 50vw;
  }
`;

export const ActionsCardBottom = styled.div`
  height: 80%;
  width: 20vw;
  border-bottom: 10px solid ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 100%;
    border-bottom: none;
    border-left: 10px solid ${({ theme }) => theme.colors.white};
    width: 50vw;
  }
`;

export const ActionsCards = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0;
  }
`;
