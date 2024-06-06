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
`;