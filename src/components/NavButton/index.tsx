import { theme } from '@/styles/theme';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoMenu } from 'react-icons/io5';

function NavButton() {
  return (
    <>
      <Navbar expand={false} className="mb-3">
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${false}`}
          style={{
            backgroundColor: theme.colors.black,
            color: theme.colors.white,
            border: `1px solid ${theme.colors.white}`,
          }}
        >
          <IoMenu size={30} style={{ color: theme.colors.white }} />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          <Offcanvas.Header
            closeButton
            style={{
              backgroundColor: theme.colors.black,
              color: theme.colors.white,
            }}
          >
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              EDIFIQUE AÇÕES
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            style={{
              backgroundColor: theme.colors.black,
              color: theme.colors.white,
            }}
          >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Quem somos</Nav.Link>
              <Nav.Link href="/">Inspirações</Nav.Link>
              <Nav.Link href="/">Doações</Nav.Link>
              <Nav.Link href="/">Nossa equipe</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default NavButton;
