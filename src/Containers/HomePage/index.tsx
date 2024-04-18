import { theme } from '@/styles/theme';
import { ContentHome, HomeSection } from './styled';
import background from '@/config/img/bgHome.svg';
import { Header } from '@/components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeSection
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: theme.colors.black,
        }}
      >
        <ContentHome>
          <h1>
            <span>EDIFIQUE</span>
            <br /> AÇÕES
          </h1>

          <p>Cursinho pré-vestibular popular e programa de extensão da UFCA</p>
        </ContentHome>
      </HomeSection>
    </>
  );
}
