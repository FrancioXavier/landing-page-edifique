import styled, { css } from 'styled-components';

export const CarouselSlider = styled.div`
  overflow: hidden;

  .sponsorsCarousel {
    display: flex;
    width: 80vw;
    align-items: center;
  }

  .storiesCarousel {
    display: flex;
    width: 80vw;
    align-items: center;

    @media only screen and (max-width: 768px) {
      width: 99vw;
    }
  }

  .xiloHistoryCarousel {
    display: flex;
    width: 80vw;
    align-items: center;
  }
  ${({ theme }) => css`
    .xiloHistory__dots {
      display: flex;
      height: fit-content;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 3rem;
      margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
    }
    .xiloHistory__dot {
      /* -webkit-tap-highlight-color: rgba(black, 0.5); */
      -webkit-appearance: none;
      appearance: none;
      background-color: rgba(217, 217, 217, 1);
      touch-action: manipulation;
      display: inline-flex;
      text-decoration: none;
      cursor: pointer;
      border: 0;
      padding: 0;
      margin: 0;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-left: 2rem;
    }
    .xiloHistory__dot:after {
      box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      align-items: center;
      content: '';
      border: 1px solid ${theme.colors.black};
    }
    .xiloHistory__dot--selected:after {
      background: linear-gradient(to left, #ff5209, #ff0000) border-box;
      border: 1px solid ${theme.colors.black};
    }

    .xiloHistory__bar {
      /* -webkit-tap-highlight-color: rgba(black, 0.5); */
      -webkit-appearance: none;
      appearance: none;
      background-color: rgba(217, 217, 217, 1);
      touch-action: manipulation;
      display: inline-flex;
      text-decoration: none;
      cursor: pointer;
      border: 0;
      padding: 0;
      margin: 0;
      width: 5rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      margin-left: 2rem;

      @media only screen and (max-width: 768px) {
        width: 15vw;
        margin-left: 5vw;
      }
    }
    .xiloHistory__bar:after {
      box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
      width: 100%;
      height: 100%;
      border-radius: 5px;
      display: flex;
      align-items: center;
      content: '';
    }
    .xiloHistory__bar--selected:after {
      background: #e30016;
    }

    .line {
      background: rgba(187, 187, 187, 1);
      width: 80%;
      height: 4px;
      position: absolute;
    }
    .lineSubtitle {
      width: 80%;
      height: 4px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      padding-bottom: 10rem;
      color: rgba(129, 129, 129, 1);
    }
  `}

  @media only screen and (max-width: 550px) {
    .xiloHistory__dot {
      width: 1rem;
      height: 1rem;
    }
  }
`;
