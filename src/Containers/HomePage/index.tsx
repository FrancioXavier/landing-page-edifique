// import { theme } from '@/styles/theme';
import {
  ActionsCard,
  ActionsCardBottom,
  ActionsContainer,
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
// import { FaTwitter } from 'react-icons/fa';
import { Card, Col, Row } from 'react-bootstrap';
import { theme } from '@/styles/theme';
import books from '@/config/img/elements/books.svg';
import test from '@/config/img/elements/test.svg';
import pcImage from '@/config/img/elements/pc.svg';
import Head from 'next/head';

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = { align: 'start' };
  const OPTIONSSPONSORS: EmblaOptionsType = { align: 'start', loop: true };
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
      <Head>
        <title>Edifique Ações - Home</title>
      </Head>
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
          <h1>BEM VINDO AO EDIFIQUE AÇÕES</h1>
          <h2>O melhor cursinho gratuito para o ENEM</h2>
          <div className="icons">
            <div className="iconContainer">
              <a
                href="https://www.instagram.com/edifiqueacoes/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={30} />
              </a>
            </div>
            <div className="iconContainer">
              <a
                href="https://www.facebook.com/EdifiqueAcoes/?locale=pt_BR"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={30} />
              </a>
            </div>
          </div>
        </ContentHome>
      </HomeSection>
      <HomeSection style={{ height: 'fit-content', marginBottom: '8rem' }}>
        <ContentSection style={{ zIndex: 1 }}>
          <h1>METODOLOGIA DE ENSINO</h1>
          <h2>Conheça nosso sistema de aprendizagem</h2>
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
                      Aulas diversas e robustas
                    </Card.Title>
                    <Card.Text
                      style={{ paddingBottom: '2rem', fontSize: '1vw' }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim a quo nemo dolore laudantium ducimus sunt quod minima
                      cupiditate veritatis. Distinctio voluptatem perspiciatis
                      aperiam rerum, quaerat dolore illo necessitatibus quis!
                      istinctio voluptatem perspiciatis aperiam rerum, quaerat
                      dolore illo necessitatibus quis!
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
                      Simulados para vestibulares
                    </Card.Title>
                    <Card.Text
                      style={{ paddingBottom: '2rem', fontSize: '1vw' }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim a quo nemo dolore laudantium ducimus sunt quod minima
                      cupiditate veritatis. Distinctio voluptatem perspiciatis
                      aperiam rerum, quaerat dolore illo necessitatibus quis!
                      istinctio voluptatem perspiciatis aperiam rerum, quaerat
                      dolore illo necessitatibus quis!
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
                      Estudo com supervisão de monitores
                    </Card.Title>
                    <Card.Text
                      style={{ paddingBottom: '2rem', fontSize: '1vw' }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim a quo nemo dolore laudantium ducimus sunt quod minima
                      cupiditate veritatis. Distinctio voluptatem perspiciatis
                      aperiam rerum, quaerat dolore illo necessitatibus quis!
                      istinctio voluptatem perspiciatis aperiam rerum, quaerat
                      dolore illo necessitatibus quis!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </ContentSection>
      </HomeSection>
      <HomeSection style={{ height: 'fit-content', marginBottom: '5rem' }}>
        <ContentSection>
          <TitlePage>Nossas Ações</TitlePage>
          <div className="d-flex justify-content-around w-100 mb-5">
            <ActionsContainer>
              <ActionsCard style={{ marginLeft: '3rem' }}>
                <h3>Ações nas escolas</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  officia labore velit qui ea voluptate nam inventore reiciendis
                  architecto aut nulla soluta distinctio blanditiis quaerat
                  voluptatibus reprehenderit cupiditate, perspiciatis maiores?
                </p>
              </ActionsCard>
            </ActionsContainer>
            <ActionsContainer style={{ width: '50vw' }}>
              <ActionsCard style={{ marginLeft: '3rem' }}>
                <h3>Ações nas escolas</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  officia labore velit qui ea voluptate nam inventore reiciendis
                  architecto aut nulla soluta distinctio blanditiis quaerat
                  voluptatibus reprehenderit cupiditate, perspiciatis maiores?
                </p>
              </ActionsCard>
            </ActionsContainer>
          </div>
          <div className="d-flex justify-content-around w-100">
            <ActionsContainer
              style={{
                width: '50vw',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end',
              }}
            >
              <ActionsCardBottom style={{ marginRight: '3rem' }}>
                <h3>Ações nas escolas</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  officia labore velit qui ea voluptate nam inventore reiciendis
                  architecto aut nulla soluta distinctio blanditiis quaerat
                  voluptatibus reprehenderit cupiditate, perspiciatis maiores?
                </p>
              </ActionsCardBottom>
            </ActionsContainer>
            <ActionsContainer
              style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end',
              }}
            >
              <ActionsCardBottom style={{ marginRight: '3rem' }}>
                <h3>Ações nas escolas</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  officia labore velit qui ea voluptate nam inventore reiciendis
                  architecto aut nulla soluta distinctio blanditiis quaerat
                  voluptatibus reprehenderit cupiditate, perspiciatis maiores?
                </p>
              </ActionsCardBottom>
            </ActionsContainer>
          </div>
        </ContentSection>
      </HomeSection>
      <CarouselSection style={{ zIndex: 1 }}>
        <TitlePage style={{ zIndex: 1 }}>Nossos parceiros</TitlePage>
        <div className="carouselcontainer">
          <Carousel slideType={SLIDETYPE} options={OPTIONSSPONSORS} />
        </div>
        <div id="inspirations">
          <Carousel slideType={slideHistory} options={OPTIONS} />
        </div>
      </CarouselSection>
    </div>
  );
}
