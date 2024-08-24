import styled from 'styled-components';

export const ContentPage = styled.div`
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 40vw;
  height: 40vh;
  position: absolute;
  left: 27%; /* por exemplo */
  top: 47%; /* por exemplo */
  transform: translate(-50%, -60%);
  @media only screen and (max-width: 1050px) {
    top: 40%;
  }
  h1 {
    font-size: 1.563vw;
    margin-bottom: 1.5rem;

    @media only screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }
  h2 {
    font-size: 2.604vw;
    font-weight: bold;
    text-align: left;

    @media only screen and (max-width: 900px) {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 5.333vw;
    }

    h2 {
      font-size: 5vw;
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
    }
  }

  @media only screen and (max-width: 1300px) {
    top: 45%;
  }
`;

export const DonationButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-size: 30px;
  padding: 10px 2.604vw;
  border-radius: 15px;
  font-weight: bold;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to left, #ff5209, #ff0000) border-box;
  }

  @media only screen and (max-width: 768px) {
    font-size: 5vw;
    padding: 15px;
  }
`;

export const DonationSection = styled.div`
  height: fit-content;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkPrimary};
`;
export const WhyDonate = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  width: 100%;
  background: none;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  div {
    margin-left: 5rem;
    width: 50vw;
  }

  h3 {
    font-weight: bold;
    margin-bottom: 1rem;
    width: 80%;
  }
  p {
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: fit-content;

    div {
      height: auto;
      width: 90%;
      margin-left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
    }
  }
`;
