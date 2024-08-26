import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: fit-content;
  background: black;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 33%;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 3rem 0;

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`;
