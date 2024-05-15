import Image from 'next/image';
import { CarouselContainer, LogoSponsor } from './styled';
import meSalva from '@/config/img/sponsors/meSalva.svg';
import BC from '@/config/img/sponsors/BC.svg';
import wizard from '@/config/img/sponsors/wizard.svg';
import arco from '@/config/img/sponsors/arco.svg';
import fisk from '@/config/img/sponsors/fisk.svg';

export default function Sponsors() {
  return (
    <>
      <CarouselContainer>
        <LogoSponsor>
          <Image
            src={fisk.src}
            priority
            height={100}
            width={100}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="teste"
          />
        </LogoSponsor>
      </CarouselContainer>
      <CarouselContainer>
        <LogoSponsor>
          <Image
            src={meSalva.src}
            priority
            height={100}
            width={100}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="teste"
          />
        </LogoSponsor>
      </CarouselContainer>
      <CarouselContainer>
        <LogoSponsor>
          <Image
            src={BC.src}
            priority
            height={100}
            width={100}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="teste"
          />
        </LogoSponsor>
      </CarouselContainer>
      <CarouselContainer>
        <LogoSponsor>
          <Image
            src={arco.src}
            priority
            height={100}
            width={100}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="teste"
          />
        </LogoSponsor>
      </CarouselContainer>
      <CarouselContainer>
        <LogoSponsor>
          <Image
            src={wizard.src}
            priority
            height={100}
            width={100}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="teste"
          />
        </LogoSponsor>
      </CarouselContainer>
      <CarouselContainer>
        <LogoSponsor></LogoSponsor>
      </CarouselContainer>
    </>
  );
}
