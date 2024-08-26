import Image from 'next/image';
import { Content, FooterContainer } from './styled';
import edifiqueLogo from '@/config/img/edifique-logo.svg';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { useMediaQuery } from '@mui/material';

export const Footer = () => {
  const mobile = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <FooterContainer>
        <Content>
          <Image
            src={edifiqueLogo.src}
            alt="Edifique Logo"
            width={100}
            height={100}
            priority
            style={{ width: '50%', height: '75%' }}
          />
        </Content>
        <Content>
          <p
            style={{
              marginRight: mobile ? '0.5rem' : '2rem',
              fontSize: mobile ? '4vw' : '1.5vw',
            }}
          >
            Nos siga nas redes sociais!
          </p>
          <div className="icons">
            <div className="iconContainer">
              <a
                href="https://www.instagram.com/edifiqueacoes/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do Edifique Ações"
              >
                <FaInstagram size={30} />
              </a>
            </div>
            <div className="iconContainer">
              <a
                href="https://www.facebook.com/EdifiqueAcoes/?locale=pt_BR"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook do Edifique Ações"
              >
                <FaFacebookF size={30} />
              </a>
            </div>
          </div>
        </Content>
        <Content>
          <p
            style={{
              width: '80%',
              fontWeight: 'bold',
              fontSize: mobile ? '3.5vw' : '1vw',
            }}
          >
            Av. Tenente Raimundo Rocha Nº 1639 <br /> Bairro Cidade
            Universitária Juazeiro do Norte – Ceará CEP 63048-080
          </p>
        </Content>
      </FooterContainer>
    </>
  );
};
