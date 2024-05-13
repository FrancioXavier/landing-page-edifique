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
  align-items: start;
  justify-content: start;
  width: 35vw;
  height: 40vh;
  position: absolute;
  left: 23%; /* por exemplo */
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

  button {
    padding: 10px 40px;
    font-size: larger;
    font-weight: bolder;
    border-radius: 25px;
    margin-top: 1.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;

    @media only screen and (max-width: 1000px) {
      font-size: medium;
      padding: 10px 30px;
    }
  }

  .icons {
    display: flex;
    margin-top: 3.5rem;
    .iconContainer {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      margin-right: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${({ theme }) => theme.colors.black};
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
  height: 100%;
  width: 100%;
  z-index: 1;

  .cardSection {
    width: 90vw;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    font-size: 70px;
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
    }
  }
`;
