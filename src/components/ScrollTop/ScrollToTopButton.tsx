import { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar a página até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rola suavemente para o topo
    });
  };

  // Mostra ou esconde o botão com base na rolagem da página
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            display: 'flex',
            bottom: 0,
            left: 0,
            marginBottom: '4rem',
            marginLeft: '3rem',
            background: '#000',
            color: '#FFF',
            border: '1px solid #fff',
            borderRadius: '50%',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: '20px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          <IoIosArrowUp size={40} />
        </button>
      )}
    </>
  );
}
