/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { CarouselContainer } from './styled';
import quotMarks from '@/config/img/elements/element3.svg';
// import traits from '@/config/img/elements/element2.svg';

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
            <Image
              src={quotMarks.src}
              alt="teste"
              width={100}
              height={100}
              style={{ width: '5.5vw', height: '5.5vw' }}
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
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
            <div>
              <Image
                src={quotMarks.src}
                alt="teste"
                width={100}
                height={100}
                style={{ width: '5.5vw', height: '5.5vw' }}
              />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
            </p>
          </div>
        </div>
      </CarouselContainer>
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
            <Image
              src={quotMarks.src}
              alt="teste"
              width={100}
              height={100}
              style={{ width: '5.5vw', height: '5.5vw' }}
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
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
            <div>
              <Image
                src={quotMarks.src}
                alt="teste"
                width={100}
                height={100}
                style={{ width: '5.5vw', height: '5.5vw' }}
              />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
            </p>
          </div>
        </div>
      </CarouselContainer>
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
            <Image
              src={quotMarks.src}
              alt="teste"
              width={100}
              height={100}
              style={{ width: '5.5vw', height: '5.5vw' }}
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
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
            <div>
              <Image
                src={quotMarks.src}
                alt="teste"
                width={100}
                height={100}
                style={{ width: '5.5vw', height: '5.5vw' }}
              />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
            </p>
          </div>
        </div>
      </CarouselContainer>
    </>
  );
}
