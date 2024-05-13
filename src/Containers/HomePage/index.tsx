// import { theme } from '@/styles/theme';
import {
  Card,
  CarouselSection,
  ContentHome,
  ContentSection,
  HomeSection,
  TitlePage,
} from './styled';
// import background from '@/config/img/bgHome.svg';
import { Header } from '@/components/Header';
import backgroundGeral from '@/config/img/newBg.svg';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = { align: 'start' };
  const SLIDETYPE: string = 'sponsors';
  const slideHistory: string = 'stories';
  return (
    <div style={{ width: '100%', height: 'fit-content' }}>
      <Image
        src={backgroundGeral.src}
        height={100}
        width={100}
        priority
        alt="teste"
        style={{
          width: '100%',
          height: 'fit-content',
          zIndex: 0,
          position: 'absolute',
        }}
      />
      <Header />
      <HomeSection>
        <ContentHome style={{ zIndex: 1 }}>
          <h1>BEM VINDO AO EDIFIQUE ACOES</h1>
          <h2>O melhor cursinho gratuito para o ENEM</h2>
          <button>inscreva-se gratuitamente</button>
          <div className="icons">
            <div className="iconContainer">
              <FaInstagram size={30} />
            </div>
            <div className="iconContainer">
              <FaFacebookF size={30} />
            </div>
            <div className="iconContainer">
              <FaTwitter size={30} />
            </div>
          </div>
        </ContentHome>
      </HomeSection>
      <HomeSection>
        <ContentSection>
          <h1>METODOLOGIA DE ENSINO</h1>
          <h2>Conheça nossos projetos</h2>
          <div className="cardSection">
            <Card>
              <div className="content">
                <div className="icon">a</div>
                <div className="text">
                  <h3>Simulados para o ENEM</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam a quibusdam voluptas? Nihil, blanditiis ullam
                    repellendus nostrum nemo eos! Accusamus ab iusto quidem
                    animi dolorem amet iure impedit tenetur esse? Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Harum
                    veritatis maiores est perspiciatis. Inventore commodi
                    aliquam, sed dicta laboriosam nihil. Libero officiis
                    voluptatibus magni maiores ad, iure eos quos consequuntur!
                  </p>
                </div>
              </div>
            </Card>
            <Card>a</Card>
            <Card>a</Card>
          </div>
        </ContentSection>
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
