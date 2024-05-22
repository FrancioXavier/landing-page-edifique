import { Nav } from './styled';
import Link from 'next/link';
import Image from 'next/image';
import NavButton from '../NavButton';
import edifiqueLogo from '@/config/img/edifique-logo.svg';

export const Header = () => {
  return (
    <>
      <Nav className="" style={{ zIndex: 1 }}>
        <div className="row align-items-center w-100">
          <div className="pharTitle">
            <a href="/">
              <div
                className="position-absolute"
                style={{
                  width: '30%',
                  height: '100%',
                  top: 0,
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
            <Link href="#" className="buttonGradient">
              <p
                className="mx-3 px-1 py-1"
                style={{ marginBottom: 0, fontSize: '1vw' }}
              >
                Quem somos
              </p>
            </Link>
            <Link href="#" className="buttonGradient">
              <p
                className="mx-3 px-1 py-1"
                style={{ marginBottom: 0, fontSize: '1vw' }}
              >
                Inspirações
              </p>
            </Link>
            <Link href="#" className="buttonGradient">
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
