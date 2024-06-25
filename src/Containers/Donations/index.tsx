import { Header } from '@/components/Header';
import Head from 'next/head';
import { HomeSection } from '../HomePage/styled';
import Image from 'next/image';
import background from '@/config/img/donationsBg.svg';
import {
  ContentPage,
  DonationButton,
  DonationSection,
  WhyDonate,
} from './styled';
import { theme } from '@/styles/theme';

import edinho from '@/config/img/donation/Edinho.svg';
import logo from '@/config/img/donation/edificar-logo.svg';
import solidaria from '@/config/img/donation/solidaria.svg';

export default function Donation() {
  return (
    <>
      <Head>Edifique Ações - Doações</Head>
      <HomeSection
        style={{
          backgroundColor: theme.colors.black,
        }}
      >
        <Header />
        <Image
          src={background.src}
          height={100}
          width={100}
          priority
          alt="teste"
          style={{
            width: '100%',
            height: '100vh',
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
      <DonationSection>
        <WhyDonate>
          <div>
            <h3>Por que doar para o Edifique?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              maxime nam excepturi, debitis fugit quia. Deserunt blanditiis
              tempore et hic quam quo ut facere officiis? Quo cum deserunt
              itaque molestiae.
            </p>
          </div>

          <div>
            <Image
              src={edinho}
              width={100}
              height={100}
              alt="teste"
              style={{
                height: '50vh',
                width: '15vw',
                objectFit: 'cover',
                marginRight: '10rem',
              }}
            />
          </div>
        </WhyDonate>
        <WhyDonate
          style={{
            background: theme.colors.black,
            flexDirection: 'row-reverse',
          }}
        >
          <div>
            <h3>Por que doar para o Edifique?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              maxime nam excepturi, debitis fugit quia. Deserunt blanditiis
              tempore et hic quam quo ut facere officiis? Quo cum deserunt
              itaque molestiae.
            </p>
          </div>
          <div>
            <Image
              src={solidaria}
              width={100}
              height={100}
              alt="teste"
              style={{
                height: '100%',
                width: '25vw',
                objectFit: 'cover',
                border: `6px solid ${theme.colors.primary}`,
                background: theme.colors.primary,
              }}
            />
          </div>
        </WhyDonate>
        <WhyDonate>
          <div>
            <h3>Por que doar para o Edifique?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              maxime nam excepturi, debitis fugit quia. Deserunt blanditiis
              tempore et hic quam quo ut facere officiis? Quo cum deserunt
              itaque molestiae.
            </p>
          </div>
          <div>
            <Image
              src={logo}
              width={100}
              height={100}
              alt="teste"
              style={{
                height: '50vh',
                width: 'fit-content',
                objectFit: 'cover',
              }}
            />
          </div>
        </WhyDonate>
        <WhyDonate
          style={{
            background: theme.colors.black,
          }}
        >
          <div>
            <h3 style={{ width: '100%' }}>
              Por isso precisamos da sua ajuda, faça uma boa ação! Doe
            </h3>
            <DonationButton>Doar</DonationButton>
          </div>
        </WhyDonate>
      </DonationSection>
    </>
  );
}
