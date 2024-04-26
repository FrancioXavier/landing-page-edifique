import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselSlider } from './styled';
import Sponsors from './Sponsors';
import { DotButton, useDotButton } from './Sponsors/DotButton';
import Stories from './Stories';

type PropType = {
  slideType: string;
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slideType, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

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
                  className={'xiloHistory__dot'
                    .concat(
                      index === selectedIndex
                        ? ' xiloHistory__dot--selected'
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
        <CarouselSlider ref={emblaRef}>
          <div className="sponsorsCarousel">
            <Stories />
          </div>
        </CarouselSlider>
      ) : null}
    </>
  );
};

export default Carousel;
