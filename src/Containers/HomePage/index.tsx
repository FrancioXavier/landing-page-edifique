// import { theme } from '@/styles/theme';
import {
  CarouselSection,
  ContentHome,
  ContentSection,
  HomeSection,
  TitlePage,
} from './styled';
// import background from '@/config/img/bgHome.svg';
import { Header } from '@/components/Header';
import backgroundGeral from '@/config/img/new-bg.svg';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { Card, Col, Row } from 'react-bootstrap';
import { theme } from '@/styles/theme';
import books from '@/config/img/elements/books.svg';
import test from '@/config/img/elements/test.svg';
import pcImage from '@/config/img/elements/pc.svg';

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = { align: 'start' };
  const SLIDETYPE: string = 'sponsors';
  const slideHistory: string = 'stories';
  return (
    <div
      style={{
        width: '100%',
        height: 'fit-content',
        backgroundColor: theme.colors.darkPrimary,
      }}
    >
      <HomeSection>
        <Header />
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
        <ContentHome style={{ zIndex: 1 }}>
          <h1>BEM VINDO AO EDIFIQUE ACOES</h1>
          <h2>O melhor cursinho gratuito para o ENEM</h2>
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
      <HomeSection style={{ height: 'fit-content', marginBottom: '8rem' }}>
        <ContentSection style={{ zIndex: 1 }}>
          <h1>METODOLOGIA DE ENSINO</h1>
          <h2>Conheça nossos projetos</h2>
          <div className="cardSection">
            <Row xs={1} sm={2} md={3} className="g-5 text-start">
              <Col>
                <Card>
                  <Card.Body
                    className="px-5 text-md-start text-sm-center"
                    style={{ color: theme.colors.primary }}
                  >
                    <Image
                      src={books.src}
                      width={100}
                      height={100}
                      alt="teste"
                      style={{
                        width: '5.5vw',
                        height: '5.5vw',
                      }}
                    />
                    <Card.Title
                      className="fw-bold"
                      style={{ fontSize: '1.8vw' }}
                    >
                      Card title
                    </Card.Title>
                    <Card.Text
                      style={{ paddingBottom: '2rem', fontSize: '1vw' }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim a quo nemo dolore laudantium ducimus sunt quod minima
                      cupiditate veritatis. Distinctio voluptatem perspiciatis
                      aperiam rerum, quaerat dolore illo necessitatibus quis!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body
                    className="px-5"
                    style={{ color: theme.colors.primary }}
                  >
                    <Image
                      src={test.src}
                      width={100}
                      height={100}
                      alt="teste"
                      style={{
                        width: '5.5vw',
                        height: '5.5vw',
                      }}
                    />
                    <Card.Title
                      className="fw-bold"
                      style={{ fontSize: '1.8vw' }}
                    >
                      Card title
                    </Card.Title>
                    <Card.Text
                      style={{ paddingBottom: '2rem', fontSize: '1vw' }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim a quo nemo dolore laudantium ducimus sunt quod minima
                      cupiditate veritatis. Distinctio voluptatem perspiciatis
                      aperiam rerum, quaerat dolore illo necessitatibus quis!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body
                    className="px-5"
                    style={{ color: theme.colors.primary }}
                  >
                    <Image
                      src={pcImage.src}
                      width={100}
                      height={100}
                      alt="teste"
                      style={{
                        width: '5.5vw',
                        height: '5.5vw',
                      }}
                    />
                    <Card.Title
                      className="fw-bold"
                      style={{ fontSize: '1.8vw' }}
                    >
                      Card title
                    </Card.Title>
                    <Card.Text
                      style={{ paddingBottom: '2rem', fontSize: '1vw' }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim a quo nemo dolore laudantium ducimus sunt quod minima
                      cupiditate veritatis. Distinctio voluptatem perspiciatis
                      aperiam rerum, quaerat dolore illo necessitatibus quis!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </ContentSection>
      </HomeSection>
      <CarouselSection style={{ zIndex: 1 }}>
        <TitlePage>Nossos parceiros</TitlePage>
        <div className="carouselcontainer">
          <Carousel slideType={SLIDETYPE} options={OPTIONS} />
        </div>
        <Carousel slideType={slideHistory} options={OPTIONS} />
      </CarouselSection>
    </div>
  );
}
