import React, { useCallback } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselSlider } from './styled';
import Sponsors from './Sponsors';
import { DotButton, useDotButton } from './Sponsors/DotButton';
import Stories from './Stories';
import { Buttons, TitlePage } from '@/Containers/HomePage/styled';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TitleContent } from './Stories/styled';

type PropType = {
  slideType: string;
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slideType, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      {slideType === 'sponsors' ? (
        <CarouselSlider ref={emblaRef}>
          <div className="sponsorsCarousel">
            <Sponsors />
          </div>
          <div className="xiloHistory__dots">
            {scrollSnaps.map((_, index) => (
              <>
                <DotButton
                  id={index.toString()}
                  key={index}
                  onClick={() => {
                    onDotButtonClick(index);
                  }}
                  className={'xiloHistory__bar'
                    .concat(
                      index === selectedIndex
                        ? ' xiloHistory__bar--selected'
                        : '',
                    )
                    .concat(
                      index < selectedIndex
                        ? ` backOrange ${selectedIndex}`
                        : '',
                    )}
                />
              </>
            ))}
          </div>
        </CarouselSlider>
      ) : null}
      {slideType === 'stories' ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
          }}
        >
          <CarouselSlider ref={emblaRef}>
            <div className="storiesCarousel">
              <Stories />
            </div>
          </CarouselSlider>
          <TitleContent>
            <TitlePage>Histórias que edificam</TitlePage>
            <Buttons>
              <button
                className="prev"
                onClick={scrollPrev}
                style={{ marginRight: '2rem' }}
              >
                <FaArrowLeftLong size={50} />
              </button>
              <button className="next" onClick={scrollNext}>
                <FaArrowRightLong size={50} />
              </button>
            </Buttons>
          </TitleContent>
        </div>
      ) : null}
    </>
  );
};

export default Carousel;
