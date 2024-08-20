import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 100%;
  width: fit-content;
  height: fit-content;
  max-height: fit-content;
  border-radius: 9px;
  background-color: #ff5e20;
  padding: 3rem 5rem;
  border: 1.5px solid #893311;

  @media only screen and (max-width: 768px) {
    border: none;
    padding: 1rem;
  }
`;

export const LogoSponsor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
`;
