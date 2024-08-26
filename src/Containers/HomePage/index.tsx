// import { theme } from '@/styles/theme';
import {
  ActionsCard,
  ActionsCardBottom,
  ActionsCards,
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
import mobilebg from '@/config/img/mobile/mobile-bg.svg';
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
import useMediaQuery from '@mui/material/useMediaQuery';

import cursinho from '@/config/img/activities/cursinho.svg';
import solidarias from '@/config/img/activities/acoes-solidarias.svg';
import escolas from '@/config/img/activities/acoes-escolas.svg';
import auloes from '@/config/img/activities/auloes.svg';
import { useEffect, useState } from 'react';
import ScrollToTopButton from '@/components/ScrollTop/ScrollToTopButton';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = { align: 'start' };
  const OPTIONSSPONSORS: EmblaOptionsType = { align: 'start', loop: true };
  const SLIDETYPE: string = 'sponsors';
  const slideHistory: string = 'stories';
  const mobile = useMediaQuery('(max-width: 768px)');
  const [cardStyle, setCardStyle] = useState({
    color: theme.colors.primary,
    padding: '0 3rem',
  });

  const [cardTitle, setCardTitle] = useState({
    fontSize: '1.8vw',
  });
  const [cardText, setCardText] = useState({
    paddingBottom: '2rem',
    fontSize: '1vw',
  });

  useEffect(() => {
    if (mobile) {
      setCardStyle({ color: theme.colors.primary, padding: '1rem 1rem' });
      setCardTitle({ fontSize: '6vw' });
      setCardText({ paddingBottom: '2rem', fontSize: '3vw' });
    } else {
      setCardStyle({ color: theme.colors.primary, padding: '0 3rem' });
      setCardTitle({ fontSize: '1.8vw' });
      setCardText({ paddingBottom: '2rem', fontSize: '1vw' });
    }
  }, [mobile]);

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
        <meta
          name="description"
          content="Descubra como nosso projeto está transformando vidas ao apoiar alunos e pessoas em situação de vulnerabilidade. Oferecemos educação, recursos e suporte para construir um futuro melhor. Junte-se a nós nessa missão de mudança social."
        />
      </Head>
      <HomeSection>
        <Header />
        <Image
          src={mobile ? mobilebg.src : backgroundGeral.src}
          height={100}
          width={100}
          priority
          alt="teste"
          style={{
            width: '100%',
            height: `${mobile ? '100vh' : 'fit-content'}`,
            zIndex: 0,
            objectFit: 'cover',
          }}
        />
        <ScrollToTopButton />
        <ContentHome style={{ zIndex: 1 }}>
          <h1>BEM VINDO AO EDIFIQUE AÇÕES</h1>
          <h2>O melhor cursinho gratuito para o ENEM</h2>
          <div className="icons">
            <div className="iconContainer">
              <a
                href="https://www.instagram.com/edifiqueacoes/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do Edifique Ações"
              >
                <FaInstagram size={30} />
              </a>
            </div>
            <div className="iconContainer">
              <a
                href="https://www.facebook.com/EdifiqueAcoes/?locale=pt_BR"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook do Edifique Ações"
              >
                <FaFacebookF size={30} />
              </a>
            </div>
          </div>
        </ContentHome>
      </HomeSection>
      <HomeSection style={{ height: 'fit-content', marginBottom: '8rem' }}>
        <ContentSection>
          <h1>METODOLOGIA DE ENSINO</h1>
          <h2>Conheça nosso sistema de aprendizagem</h2>
          <div className="cardSection">
            <Row xs={1} sm={2} md={3} className="g-5 text-start">
              <Col>
                <Card>
                  <Card.Body
                    className="text-md-start text-sm-center"
                    style={cardStyle}
                  >
                    {mobile ? (
                      <></>
                    ) : (
                      <Image
                        src={books.src}
                        width={100}
                        height={100}
                        alt="Imagem ilustrando pilha de livros"
                        style={{
                          width: '5.5vw',
                          height: '5.5vw',
                        }}
                      />
                    )}
                    <Card.Title className="fw-bold" style={cardTitle}>
                      Aulas diversas e robustas
                    </Card.Title>
                    <Card.Text className="text-start" style={cardText}>
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
                  <Card.Body style={cardStyle}>
                    {mobile ? (
                      <></>
                    ) : (
                      <Image
                        src={test.src}
                        width={100}
                        height={100}
                        alt="Imagem ilustrando prova"
                        style={{
                          width: '5.5vw',
                          height: '5.5vw',
                        }}
                      />
                    )}
                    <Card.Title className="fw-bold" style={cardTitle}>
                      Simulados para vestibulares
                    </Card.Title>
                    <Card.Text className="text-start" style={cardText}>
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
                  <Card.Body style={cardStyle}>
                    {mobile ? (
                      <></>
                    ) : (
                      <Image
                        src={pcImage.src}
                        width={100}
                        height={100}
                        alt="Image ilustrando o card de estudo com supervisão"
                        style={{
                          width: '5.5vw',
                          height: '5.5vw',
                        }}
                      />
                    )}
                    <Card.Title className="fw-bold" style={cardTitle}>
                      Estudo com supervisão de monitores
                    </Card.Title>
                    <Card.Text className="text-start" style={cardText}>
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
          <TitlePage
            id="about-us"
            style={mobile ? { fontSize: '8vw', marginBottom: '2rem' } : {}}
          >
            Nossas Ações
          </TitlePage>
          <ActionsCards>
            <ActionsContainer
              style={{
                backgroundImage: `url(${escolas.src})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <ActionsCard style={mobile ? {} : { marginLeft: '3rem' }}>
                <h3>Ações nas escolas</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  officia labore velit qui ea voluptate nam inventore reiciendis
                  architecto aut nulla soluta distinctio blanditiis quaerat
                  voluptatibus reprehenderit cupiditate, perspiciatis maiores?
                </p>
              </ActionsCard>
            </ActionsContainer>
            <ActionsContainer
              style={{
                backgroundImage: `url(${cursinho.src})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: `${mobile ? '100%' : '50vw'}`,
                textAlign: 'right',
              }}
            >
              <ActionsCard
                style={
                  mobile
                    ? {
                        marginLeft: 'auto',
                        borderLeft: 'none',
                        borderRight: '10px solid #fff',
                      }
                    : { marginLeft: '3rem' }
                }
              >
                <h3>Curso Edificar</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  officia labore velit qui ea voluptate nam inventore reiciendis
                  architecto aut nulla soluta distinctio blanditiis quaerat
                  voluptatibus reprehenderit cupiditate, perspiciatis maiores?
                </p>
              </ActionsCard>
            </ActionsContainer>
          </ActionsCards>
          <ActionsCards>
            <ActionsContainer
              style={{
                width: `${mobile ? '100%' : '50vw'}`,
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'end',
                backgroundImage: `url(${solidarias.src})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <ActionsCardBottom
                style={
                  mobile ? { marginRight: 'auto' } : { marginRight: '3rem' }
                }
              >
                <h3>Ações Solidárias</h3>
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
                backgroundImage: `url(${auloes.src})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <ActionsCardBottom
                style={
                  mobile
                    ? {
                        marginLeft: 'auto',
                        borderLeft: 'none',
                        borderRight: '10px solid #fff',
                        textAlign: 'right',
                      }
                    : {
                        marginRight: '3rem',
                      }
                }
              >
                <h3>Aulões</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  officia labore velit qui ea voluptate nam inventore reiciendis
                  architecto aut nulla soluta distinctio blanditiis quaerat
                  voluptatibus reprehenderit cupiditate, perspiciatis maiores?
                </p>
              </ActionsCardBottom>
            </ActionsContainer>
          </ActionsCards>
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
      <Footer />
    </div>
  );
}
