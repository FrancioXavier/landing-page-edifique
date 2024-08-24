import { Header } from '@/components/Header';
import { Content, ContainerCards, Cards } from './styled';
import { TitlePage } from '../HomePage/styled';
import bruno from '@/config/img/stories/bruno.svg';
import { CardComponent } from '@/components/Card';
import { Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';
import ScrollToTopButton from '@/components/ScrollTop/ScrollToTopButton';

export default function OurTeam() {
  return (
    <>
      <Head>
        <title>Edifique Ações - equipe</title>
        <meta
          name="description"
          content="Conheça a equipe dedicada por trás do nosso projeto, comprometida em apoiar alunos e pessoas em situação de vulnerabilidade. Descubra as histórias, experiências e paixões que movem nossa missão de fazer a diferença."
        />
      </Head>
      <Header />
      <ScrollToTopButton />
      <Content>
        <ContainerCards>
          <TitlePage>Diretores</TitlePage>
          <Cards>
            <Container>
              <Row className="gx-0">
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
              </Row>
            </Container>
          </Cards>
        </ContainerCards>

        <ContainerCards>
          <TitlePage>Marketing</TitlePage>
          <Cards>
            <Container>
              <Row className="gx-0">
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
              </Row>
              <Row className="gx-0 justify-content-center align-items-center">
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
              </Row>
            </Container>
          </Cards>
        </ContainerCards>

        <ContainerCards>
          <TitlePage>Administrativo</TitlePage>
          <Cards>
            <Container>
              <Row className="gx-0">
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
              </Row>
              <Row className="gx-0 justify-content-center align-items-center">
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
              </Row>
            </Container>
          </Cards>
        </ContainerCards>
        <ContainerCards>
          <TitlePage>Gente e Gestão</TitlePage>
          <Cards>
            <Container>
              <Row className="gx-0">
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
              </Row>
              <Row className="gx-0 justify-content-center align-items-center">
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
              </Row>
            </Container>
          </Cards>
        </ContainerCards>

        <ContainerCards>
          <TitlePage>Institucional</TitlePage>
          <Cards>
            <Container>
              <Row className="gx-0">
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
              </Row>
              <Row className="gx-0 justify-content-center align-items-center">
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardComponent
                    img={bruno.src}
                    title="Bruno Presidente"
                    subtitle="Presidente"
                  />
                </Col>
              </Row>
            </Container>
          </Cards>
        </ContainerCards>
      </Content>
    </>
  );
}
