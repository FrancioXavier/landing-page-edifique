import styled from 'styled-components';

export const Nav = styled.nav`
  background: none;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  min-height: 100px;

  .searchInput {
    width: 50%;
  }

  .buttonGradient {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background:
      linear-gradient(#000 0 0) padding-box,
      linear-gradient(to right, #ff5209, #ff0000) border-box;
    border: 3px solid transparent;
    transition: all 0.5s ease-in-out;
    border-radius: 15px;

    &:hover {
      background:
        linear-gradient(#000 0 0) padding-box,
        linear-gradient(to left, #ff5209, #ff0000) border-box;
    }
  }

  .categoriesButton {
    display: none;
  }
  a {
    color: #fff;
    margin: 0 10px 0;
    font-weight: bold;
  }

  @media only screen and (max-width: 860px) {
    p {
      display: none;
    }

    .categoriesButton {
      display: flex;
      position: fixed;
      bottom: 0;
      right: 0;
      margin-bottom: 3rem;
      margin-right: 3rem;
      z-index: 99999;
    }
  }
`;
