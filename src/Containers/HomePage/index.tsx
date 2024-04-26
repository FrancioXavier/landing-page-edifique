import { theme } from '@/styles/theme';
import { CarouselSection, ContentHome, HomeSection, TitlePage } from './styled';
// import background from '@/config/img/bgHome.svg';
import { Header } from '@/components/Header';
import backgroundGeral from '@/config/img/bg-geral.svg';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel from '@/components/Carousel';

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = { align: 'start' };
  const SLIDETYPE: string = 'sponsors';
  const slideHistory: string = 'stories';
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundGeral.src})`,
        backgroundPosition: '',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.colors.black,
        height: 'fit-content',
      }}
    >
      <Header />
      <HomeSection>
        <ContentHome>
          <h1>
            <span>EDIFIQUE</span>
            <br /> AÇÕES
          </h1>

          <p>Cursinho pré-vestibular popular e programa de extensão da UFCA</p>
        </ContentHome>
      </HomeSection>
      <CarouselSection>
        <TitlePage>Nossos parceiros</TitlePage>
        <div className="carouselcontainer">
          <Carousel slideType={SLIDETYPE} options={OPTIONS} />
        </div>
        <TitlePage>Histórias que edificam</TitlePage>
        <Carousel slideType={slideHistory} options={OPTIONS} />
      </CarouselSection>
    </div>
  );
}
