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
                  height: '90%',
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
              <p className="mx-3 px-1 py-1" style={{ marginBottom: 0 }}>
                Quem somos
              </p>
            </Link>
            <Link href="#" className="buttonGradient">
              <p className="mx-3 px-1 py-1" style={{ marginBottom: 0 }}>
                Inspirações
              </p>
            </Link>
            <Link href="#" className="buttonGradient">
              <p className="mx-3 px-1 py-1" style={{ marginBottom: 0 }}>
                Doações
              </p>
            </Link>
            <Link href="#" className="buttonGradient">
              <p className="mx-3 px-1 py-1" style={{ marginBottom: 0 }}>
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
