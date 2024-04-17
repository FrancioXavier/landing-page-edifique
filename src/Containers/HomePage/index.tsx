import { theme } from '@/styles/theme';
import { ContentHome, HomeSection } from './styled';
import background from '@/config/img/bgHome.svg';

export default function HomePage() {
  return (
    <>
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
        </ContentHome>
      </HomeSection>
    </>
  );
}
