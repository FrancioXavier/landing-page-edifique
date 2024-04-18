import { theme } from '@/styles/theme';
import { ContentHome, HomeSection } from './styled';
// import background from '@/config/img/bgHome.svg';
import { Header } from '@/components/Header';
import backgroundGeral from '@/config/img/bg-geral.svg';

export default function HomePage() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundGeral.src})`,
        backgroundPosition: '',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.colors.black,
        height: '450vh',
      }}
    >
      <Header />
      <HomeSection>
        <ContentHome>
          <h1>
            <span>EDIFIQUE</span>
            <br /> AÇÕES
          </h1>

          <p>Cursinho pré-vestibular popular e programa de extensão da UFCA</p>
        </ContentHome>
      </HomeSection>
    </div>
  );
}
