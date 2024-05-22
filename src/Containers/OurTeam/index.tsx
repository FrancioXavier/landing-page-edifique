import { Header } from '@/components/Header';
import {
  Card,
  Content,
  Container,
  Cards,
  CardName,
  Title,
  SubTitle,
} from './styled';
import { TitlePage } from '../HomePage/styled';
import Image from 'next/image';
import bruno from '@/config/img/stories/bruno.svg';

export default function OurTeam() {
  return (
    <>
      <Header />
      <Content>
        <Container>
          <TitlePage>Presidentes</TitlePage>
          <Cards>
            <Card>
              <Image
                src={bruno.src}
                width={100}
                height={100}
                alt="teste"
                style={{
                  position: 'absolute',
                  height: '40vh',
                  width: '15vw',
                  objectFit: 'cover',
                }}
              />
              <CardName>
                <Title>Bruno Presidente</Title>
                <SubTitle>Presidente</SubTitle>
              </CardName>
            </Card>
            <Card>
              <Image
                src={bruno.src}
                width={100}
                height={100}
                alt="teste"
                style={{
                  position: 'absolute',
                  height: '40vh',
                  width: '15vw',
                  objectFit: 'cover',
                }}
              />
              <CardName>
                <Title>Bruno Presidente</Title>
                <SubTitle>Presidente</SubTitle>
              </CardName>
            </Card>
            <Card>
              <Image
                src={bruno.src}
                width={100}
                height={100}
                alt="teste"
                style={{
                  position: 'absolute',
                  height: '40vh',
                  width: '15vw',
                  objectFit: 'cover',
                }}
              />
              <CardName>
                <Title>Bruno Presidente</Title>
                <SubTitle>Presidente</SubTitle>
              </CardName>
            </Card>
            <Card>
              <Image
                src={bruno.src}
                width={100}
                height={100}
                alt="teste"
                style={{
                  position: 'absolute',
                  height: '40vh',
                  width: '15vw',
                  objectFit: 'cover',
                }}
              />
              <CardName>
                <Title>Bruno Presidente</Title>
                <SubTitle>Presidente</SubTitle>
              </CardName>
            </Card>
          </Cards>
        </Container>
      </Content>
    </>
  );
}
