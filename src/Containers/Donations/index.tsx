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
import mobilebg from '@/config/img/mobile/mobile-bg.svg';
import solidaria from '@/config/img/donation/solidaria.svg';
import { useMediaQuery } from '@mui/material';
import QRCode from 'qrcode.react';
import { useState } from 'react';
import ScrollToTopButton from '@/components/ScrollTop/ScrollToTopButton';

export default function Donation() {
  const mobile = useMediaQuery('(max-width: 768px)');
  const [showQRCode, setShowQRCode] = useState(false);

  // Função onClick para alternar a visibilidade da div
  const handleClick = () => {
    setShowQRCode(!showQRCode);
  };

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
          src={mobile ? mobilebg.src : background.src}
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
        <ScrollToTopButton />
        <ContentPage style={{ zIndex: 1 }}>
          <h1>AJUDE O EDIFIQUE AÇÕES</h1>
          <h2>
            Cada ajuda é um passo para continuarmos com esse trabalho com muito
            amor e dedicação
          </h2>
          <DonationButton onClick={handleClick}>
            <a href="#donate" style={{ color: theme.colors.white }}>
              Faça aqui sua doação
            </a>
          </DonationButton>
        </ContentPage>
      </HomeSection>
      <DonationSection>
        <WhyDonate>
          <div className="text">
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
                width: mobile ? 'fit-content' : '15vw',
                objectFit: 'cover',
                marginRight: mobile ? '0' : '10rem',
                marginTop: mobile ? 'auto' : '0',
              }}
            />
          </div>
        </WhyDonate>
        <WhyDonate
          style={{
            background: theme.colors.black,
            flexDirection: mobile ? 'column' : 'row-reverse',
          }}
        >
          <div className="text">
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
                width: mobile ? '60vw' : '25vw',
                objectFit: 'cover',
                border: `6px solid ${theme.colors.primary}`,
                background: theme.colors.primary,
                marginBottom: mobile ? '2rem' : '0',
              }}
            />
          </div>
        </WhyDonate>
        <WhyDonate>
          <div className="text">
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
                height: mobile ? '30vh' : '50vh',
                width: 'fit-content',
                objectFit: 'cover',
                marginBottom: mobile ? '2rem' : '0',
              }}
            />
          </div>
        </WhyDonate>
        <WhyDonate
          style={{
            background: theme.colors.black,
            paddingTop: mobile ? '2rem' : '0',
          }}
        >
          <div
            style={{
              flexDirection: mobile ? 'column' : 'row',
              marginBottom: mobile ? '2rem' : '',
            }}
          >
            <h3 style={{ width: '100%' }}>
              Por isso precisamos da sua ajuda, faça uma boa ação! Doe
            </h3>
            <DonationButton onClick={handleClick}>Doar</DonationButton>
          </div>
          {showQRCode && (
            <div
              style={{
                marginLeft: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              id="donate"
            >
              <h3>Doe via Pix! Faça utilizando nosso QRcode :)</h3>
              <QRCode
                value="00020126400014br.gov.bcb.pix0111088383093020203Pix5204000053039865802BR5925FRANCIO XAVIER DA SILVA M6015JUAZEIRO DO NOR622905250IpFiUSMa0SCip2fZ9Tk3c1Rl630431AE"
                size={150}
              />

              <h3>Ou utilize nosso CNPJ: 088.383.093-02</h3>
              <h4>
                Nome: Edifique Acoes <br />
                Banco: do brasil <br />
                chave PIX: 08838309302
              </h4>
            </div>
          )}
        </WhyDonate>
      </DonationSection>
    </>
  );
}
