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

  @media only screen and (max-width: 580px) {
    .searchInput {
      width: 100%;
      margin: 1rem 0 1rem 0;
    }
  }
`;
