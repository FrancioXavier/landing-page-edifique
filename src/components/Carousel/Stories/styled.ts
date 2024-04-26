import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 0 0 100%;
  min-width: 0;
  width: 90vw;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.primary};

  .photo {
    height: 100%;
    width: 50%;
  }

  .text {
    height: 100%;
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 40px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 1rem;
      @media only screen and (max-width: 940px) {
        font-size: 30px;
      }
    }
    p {
      width: 80%;
      font-size: 25px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.white};
      line-height: 40px;

      @media only screen and (max-width: 1500px) {
        font-size: 20px;
        line-height: 35px;
      }

      @media only screen and (max-width: 1100px) {
        font-size: 20px;
        line-height: 30px;
      }
      @media only screen and (max-width: 1100px) {
        font-size: 15px;
        line-height: 30px;
      }
    }
  }
`;
