/* eslint-disable react/no-unescaped-entities */
import { CarouselContainer } from './styled';

export default function Stories() {
  return (
    <>
      <CarouselContainer>
        <div className="d-flex">
          <div className="photoContainer">
            <div className="photo"></div>
            <div className="personName">
              <p>Bruno presidente</p>
              <p className="sub">Presidente do Edifique</p>
            </div>
          </div>
          <div className="text">
            <p>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div className="photoContainer">
            <div className="photo"></div>
            <div className="personName">
              <p>Bruno presidente</p>
              <p className="sub">Presidente do Edifique</p>
            </div>
          </div>
          <div className="text">
            <p>
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori
            </p>
          </div>
        </div>
      </CarouselContainer>
      <CarouselContainer></CarouselContainer>
      <CarouselContainer></CarouselContainer>
    </>
  );
}
