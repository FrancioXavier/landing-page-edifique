/* eslint-disable react/no-unescaped-entities */
import { CarouselContainer } from './styled';
import bruno from '@/config/img/stories/bruno.svg';

export default function Stories() {
  return (
    <>
      <CarouselContainer>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${bruno.src})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="text">
          <h3>Bruno Presidente</h3>
          <p>
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            dolore laboriosam asperiores magni dolor totam beatae, et porro
            molestias quidem! Hic cupiditate distinctio voluptas enim repellat
            corporis, fugiat tempore iste. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eum ipsum minus culpa vero a, cumque
            pariatur qui dolorum doloribus fuga enim voluptatibus sed architecto
            blanditiis rem dicta labore delectus voluptate."
          </p>
        </div>
      </CarouselContainer>
      <CarouselContainer></CarouselContainer>
      <CarouselContainer></CarouselContainer>
    </>
  );
}
