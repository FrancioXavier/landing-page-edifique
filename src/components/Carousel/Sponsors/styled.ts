import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 22%;
  min-width: 0;
  width: fit-content;
  max-height: 533px;
  margin-right: 3rem;
  border-radius: 9px;

  @media only screen and (max-width: 550px) {
    flex: 0 0 45%;
  }
`;

export const LogoSponsor = styled.div`
  width: 200px;
  height: 200px;

  @media only screen and (max-width: 900px) {
    width: 150px;
    height: 150px;
  }
`;
