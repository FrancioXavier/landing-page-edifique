import { Header } from '@/components/Header';
import Head from 'next/head';
import { HomeSection } from '../HomePage/styled';
import Image from 'next/image';
import background from '@/config/img/donationsBg.svg';
import { ContentPage, DonationButton } from './styled';

export default function Donation() {
  return (
    <>
      <Head>Edifique Ações - Doações</Head>
      <HomeSection>
        <Header />
        <Image
          src={background.src}
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
        <ContentPage style={{ zIndex: 1 }}>
          <h1>AJUDE O EDIFIQUE AÇÕES</h1>
          <h2>
            Cada ajuda é um passo para continuarmos com esse trabalho com muito
            amor e dedicação
          </h2>
          <DonationButton>Faça aqui sua doação</DonationButton>
        </ContentPage>
      </HomeSection>
    </>
  );
}
