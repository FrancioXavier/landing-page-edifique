import { Nav } from './styled';
import Link from 'next/link';
import Image from 'next/image';
import NavButton from '../NavButton';
import edifiqueLogo from '@/config/img/edifique-logo.svg';

export const Header = () => {
  return (
    <>
      <Nav className="">
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
            <Link href="#" className="d-flex flex-row">
              <p className="mx-1">Quem somos</p>
            </Link>
            <Link href="#" className="d-flex flex-row">
              <p className="mx-1">Inspirações</p>
            </Link>
            <Link href="#" className="d-flex flex-row">
              <p className="mx-1">Doações</p>
            </Link>
            <Link href="#" className="d-flex flex-row">
              <p className="mx-1">Nossa equipe</p>
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
