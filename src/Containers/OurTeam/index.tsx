import { Header } from '@/components/Header';
import { Content, ContainerCards, Cards } from './styled';
import { TitlePage } from '../HomePage/styled';
import bruno from '@/config/img/stories/bruno.svg';
import { CardComponent } from '@/components/Card';
import { Container, Row } from 'react-bootstrap';

export default function OurTeam() {
  return (
    <>
      <Header />
      <Content>
        <ContainerCards>
          <TitlePage>Diretores</TitlePage>
          <Cards>
            <Container>
              <Row className="gx-0">
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
              </Row>
            </Container>
          </Cards>
        </ContainerCards>

        <ContainerCards>
          <TitlePage>Marketing</TitlePage>
          <Cards>
            <Container>
              <Row className="gx-0">
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
              </Row>
              <Row className="gx-0 justify-content-center align-items-center">
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
              </Row>
            </Container>
          </Cards>
        </ContainerCards>

        <ContainerCards>
          <TitlePage>Administrativo</TitlePage>
          <Cards>
            <Container>
              <Row className="gx-0">
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
              </Row>
              <Row className="gx-0 justify-content-center align-items-center">
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
              </Row>
            </Container>
          </Cards>
        </ContainerCards>
        <ContainerCards>
          <TitlePage>Gente e Gestão</TitlePage>
          <Cards>
            <Container>
              <Row className="gx-0">
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
              </Row>
              <Row className="gx-0 justify-content-center align-items-center">
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
              </Row>
            </Container>
          </Cards>
        </ContainerCards>

        <ContainerCards>
          <TitlePage>Institucional</TitlePage>
          <Cards>
            <Container>
              <Row className="gx-0">
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
              </Row>
              <Row className="gx-0 justify-content-center align-items-center">
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
                <CardComponent
                  img={bruno.src}
                  title="Bruno Presidente"
                  subtitle="Presidente"
                />
              </Row>
            </Container>
          </Cards>
        </ContainerCards>
      </Content>
    </>
  );
}
