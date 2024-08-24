import Image from 'next/image';
import { CarouselContainer, LogoSponsor } from './styled';
import meSalva from '@/config/img/sponsors/meSalva.svg';
import BC from '@/config/img/sponsors/BC.svg';
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
            alt="Imagem com logo da empresa fisk"
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
            alt="Imagem com logo da empresa Me Salva!"
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
            alt="Imagem com logo da organização Brasil Cursinhos"
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
            alt="Imagem com logo da empresa Arco"
          />
        </LogoSponsor>
      </CarouselContainer>
    </>
  );
}
