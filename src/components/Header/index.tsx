import { Nav } from './styled';
import Link from 'next/link';
import Image from 'next/image';
import NavButton from '../NavButton';
import edifiqueLogo from '@/config/img/edifique-logo.svg';
import { useMediaQuery } from '@mui/material';

export const Header = () => {
  const mobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Nav className="" style={{ zIndex: 1 }}>
        <div className="row align-items-center w-100">
          <div className="pharTitle">
            <a href="/landing-page-edifique/">
              <div
                className="position-absolute"
                style={{
                  width: `${mobile ? '50%' : '30%'}`,
                  height: '100%',
                  top: 0,
                  left: `${mobile ? '50%' : null}`,
                  transform: `${mobile ? 'translateX(-50%)' : null}`,
                }}
              >
                <Image
                  src={edifiqueLogo.src}
                  alt="Edifique Logo"
                  fill
                  priority
                />
              </div>
            </a>
          </div>
          <div className="col d-flex flex-row justify-content-end align-items-center">
            <Link href="/#about-us" className="buttonGradient">
              <p
                className="mx-3 px-1 py-1"
                style={{ marginBottom: 0, fontSize: '1vw' }}
              >
                Quem somos
              </p>
            </Link>
            <Link href="/#inspirations " className="buttonGradient">
              <p
                className="mx-3 px-1 py-1"
                style={{ marginBottom: 0, fontSize: '1vw' }}
              >
                Inspirações
              </p>
            </Link>
            <Link href="/doacoes" className="buttonGradient">
              <p
                className="mx-3 px-1 py-1"
                style={{ marginBottom: 0, fontSize: '1vw' }}
              >
                Doações
              </p>
            </Link>
            <Link href="/nossa-equipe" className="buttonGradient">
              <p
                className="mx-3 px-1 py-1"
                style={{ marginBottom: 0, fontSize: '1vw' }}
              >
                Nossa equipe
              </p>
            </Link>
          </div>
        </div>

        <div className="categoriesButton">
          <NavButton />
        </div>
      </Nav>
    </>
  );
};
